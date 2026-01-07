// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';
import { getGeneralSEOSettings } from '../lib/seo';

// Endpoint for dynamically generating robots.txt

export const GET: APIRoute = async ({ site }) => {
  const seoSettings = await getGeneralSEOSettings();
  const siteUrl = site?.toString() || 'https://www.leadgenies.de';

  // If custom robots.txt content is provided, use it directly
  if (seoSettings.robots.customRobotsTxt && seoSettings.robots.customRobotsTxt.trim().length > 0) {
    return new Response(seoSettings.robots.customRobotsTxt, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
  
  // Otherwise, generate robots.txt based on index/follow settings
  let robotsTxt = `User-agent: *\n`;
  
  // Apply settings from admin dashboard
  if (!seoSettings.robots.index) {
    robotsTxt += `Disallow: /\n`;
  } else if (!seoSettings.robots.follow) {
    robotsTxt += `Disallow: /\n`;
    robotsTxt += `Allow: /$\n`; // Allow just the homepage
  } else {
    robotsTxt += `Allow: /\n`;
  }
  
  // Add sitemap
  robotsTxt += `\nSitemap: ${siteUrl}/sitemap.xml\n`;
  
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};