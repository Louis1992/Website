/**
 * Analytics Deferral Utilities
 * Provides universal script deferral for analytics scripts (GTM, GA, etc.)
 * to improve page load performance without sacrificing tracking accuracy.
 */

interface AnalyticsScript {
  type: 'gtm' | 'ga4' | 'unknown';
  trackingId: string | null;
  scriptSrc: string | null;
  inlineScript: string | null;
}

/**
 * Detects if a script is an analytics script (but NOT Meta Pixel)
 * Meta Pixel should load immediately for proper conversion tracking
 */
export function isAnalyticsScript(scriptContent: string): boolean {
  // Meta Pixel should NOT be deferred - it needs immediate loading
  const metaPixelPatterns = [
    /facebook\.com\/tr\?id=/i,
    /connect\.facebook\.net.*fbevents/i,
    /fbq\(/i,
  ];

  if (metaPixelPatterns.some(pattern => pattern.test(scriptContent))) {
    return false; // Meta Pixel should load immediately
  }

  const analyticsPatterns = [
    /googletagmanager\.com\/gtag\/js/i,
    /google-analytics\.com\/analytics\.js/i,
    /gtag\(/i,
    /dataLayer/i,
    /ga\(/i,
    /window\.dataLayer/i,
  ];

  return analyticsPatterns.some(pattern => pattern.test(scriptContent));
}

/**
 * Extracts analytics information from script content
 */
export function parseAnalyticsScript(scriptContent: string): AnalyticsScript | null {
  // Check for GTM format - ID in src URL (gtm.js?id=GTM-xxx)
  const gtmJsMatch = scriptContent.match(/googletagmanager\.com\/gtm\.js\?id=(GTM-[A-Z0-9]+)/i);

  // Check for GTM format - ID in function parameters (common in inline GTM scripts)
  // Pattern: })(window,document,'script','dataLayer','GTM-XXXXXXX');
  const gtmFunctionMatch = scriptContent.match(/\)\s*\([^)]*['"]dataLayer['"]\s*,\s*['"](GTM-[A-Z0-9]+)['"]\s*\)/i);

  // Check for GA4/gtag format (gtag/js)
  const gtagMatch = scriptContent.match(/googletagmanager\.com\/gtag\/js\?id=([A-Z0-9-]+)/i);
  const ga4ConfigMatch = scriptContent.match(/gtag\s*\(\s*['"]config['"]\s*,\s*['"]([A-Z0-9-]+)['"]/i);

  if (gtmJsMatch || gtmFunctionMatch || gtagMatch || ga4ConfigMatch) {
    const trackingId = gtmJsMatch ? gtmJsMatch[1] :
                       (gtmFunctionMatch ? gtmFunctionMatch[1] :
                       (gtagMatch ? gtagMatch[1] :
                       (ga4ConfigMatch ? ga4ConfigMatch[1] : null)));

    const scriptSrcMatch = scriptContent.match(/src\s*=\s*['"](https:\/\/[^'"]+)['"]/i);
    const scriptSrc = scriptSrcMatch ? scriptSrcMatch[1] : null;

    // Extract inline script content (between <script> tags)
    const inlineMatch = scriptContent.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    const inlineScript = inlineMatch ? inlineMatch[1].trim() : null;

    return {
      type: (gtmJsMatch || gtmFunctionMatch) ? 'gtm' : 'ga4',
      trackingId,
      scriptSrc,
      inlineScript,
    };
  }

  return null;
}

/**
 * Separates analytics scripts from other header scripts
 * Keeps script blocks with their associated noscript tags intact
 */
export function separateAnalyticsScripts(headerScripts: string): {
  analyticsScripts: AnalyticsScript[];
  otherScripts: string;
} {
  if (!headerScripts) {
    return { analyticsScripts: [], otherScripts: '' };
  }

  // Find all script tags with their potentially following noscript tags
  // This ensures Meta Pixel code stays together
  const scriptBlocks: string[] = [];
  const analyticsScripts: AnalyticsScript[] = [];
  const otherScriptsList: string[] = [];

  let remaining = headerScripts;
  const scriptRegex = /<script[\s\S]*?<\/script>/gi;

  let match;
  let lastIndex = 0;
  const scriptMatches: Array<{ script: string; index: number; endIndex: number }> = [];

  // Find all script tags and their positions
  while ((match = scriptRegex.exec(headerScripts)) !== null) {
    scriptMatches.push({
      script: match[0],
      index: match.index,
      endIndex: scriptRegex.lastIndex
    });
  }

  // Process each script and check for following noscript
  scriptMatches.forEach((scriptMatch, i) => {
    const { script, index, endIndex } = scriptMatch;

    // Check if there's a noscript tag immediately following this script
    const afterScript = headerScripts.substring(endIndex);
    const noscriptMatch = afterScript.match(/^\s*(<noscript[\s\S]*?<\/noscript>)/i);

    let fullBlock = script;
    let blockEndIndex = endIndex;

    if (noscriptMatch) {
      // Include the noscript tag as part of this block
      fullBlock = script + noscriptMatch[0];
      blockEndIndex = endIndex + noscriptMatch[0].length;
    }

    // Check if this is an analytics script that should be deferred
    if (isAnalyticsScript(script)) {
      const parsed = parseAnalyticsScript(script);
      if (parsed) {
        analyticsScripts.push(parsed);
      }
    } else {
      otherScriptsList.push(fullBlock);
    }

    // Mark the content we've processed
    if (i === 0) {
      // Add content before first script
      const beforeContent = headerScripts.substring(0, index).trim();
      if (beforeContent) {
        otherScriptsList.unshift(beforeContent);
      }
    }

    // Add content between this script and the next
    if (i < scriptMatches.length - 1) {
      const nextScript = scriptMatches[i + 1];
      const betweenContent = headerScripts.substring(blockEndIndex, nextScript.index).trim();
      if (betweenContent) {
        otherScriptsList.push(betweenContent);
      }
    } else {
      // Add content after last script
      const afterContent = headerScripts.substring(blockEndIndex).trim();
      if (afterContent) {
        otherScriptsList.push(afterContent);
      }
    }
  });

  // If no scripts were found, return all content as other scripts
  if (scriptMatches.length === 0) {
    return { analyticsScripts: [], otherScripts: headerScripts };
  }

  const otherScripts = otherScriptsList.filter(s => s).join('\n');

  return { analyticsScripts, otherScripts };
}

/**
 * Generates loading script for analytics
 * NOTE: GTM loads IMMEDIATELY (not deferred) for proper Google Ads conversion tracking.
 * Deferring GTM causes data loss for users who bounce quickly or convert within 3 seconds.
 */
export function generateDeferredAnalyticsScript(analyticsScripts: AnalyticsScript[]): string {
  if (analyticsScripts.length === 0) return '';

  const script = analyticsScripts[0]; // For now, handle the first one (usually GTM or GA4)

  if (!script.trackingId) return '';

  // GTM scripts load IMMEDIATELY - no deferral
  // Deferring GTM breaks Google Ads conversion tracking
  if (script.type === 'gtm') {
    return `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${script.trackingId}');</script>
    <!-- End Google Tag Manager -->
  `;
  }

  // GA4/gtag scripts - load immediately for accurate tracking
  return `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${script.trackingId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${script.trackingId}');
    </script>
  `;
}
