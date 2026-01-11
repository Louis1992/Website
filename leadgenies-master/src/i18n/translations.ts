// Translation strings for LeadGenies website

export type Language = 'de' | 'en';

export const translations = {
  de: {
    // Header
    header: {
      menuItems: [
        { label: 'Was wir tun', href: '#hero' },
        { label: 'So funktioniert es', href: '#how-it-works' },
        { label: 'Lohnt es sich?', href: '#roi-calculator' },
        { label: 'Garantie & DSGVO', href: '#guarantee' },
        { label: 'Preise', href: '#pricing' }
      ],
      ctaText: 'Kostenlos beraten lassen'
    },

    // Hero
    hero: {
      title: 'Mehr B2B-Termine durch echte deutsche Kaltakquise Experten – gestützt auf KI-Daten',
      subtitle: 'Wir füllen Ihren Kalender mit qualifizierten Leads. Unsere deutschen Profi-Caller nutzen modernste Daten-Analyse für maximale Erfolgsquoten – Menschlichkeit trifft auf Präzision.',
      cta: 'Kostenlos anfragen',
      belowText: 'Schließen Sie sich <strong>über 10.000</strong> erfolgreichen deutschen Unternehmen an, die Telemarketing als ihren Vertriebskanal Nr. 1 nutzen',
      reviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: 'Die Caller von LeadGenies agieren extrem professionell und auf Augenhöhe mit Geschäftsführern aus verschiedenen Branchen. Wirklich Super!',
          attribution: '— Vivien Poswiat, Gründer, Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: 'Wir hatten Zweifel, ob externe Caller unsere Software erklären können. LeadGenies hat uns überzeugt: Die Termine sind zahlreich und die Entscheider wissen genau, worum es geht.',
          attribution: '— Thomas Reppa, CEO, CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: 'LeadGenies hat unsere komplexen technischen Produkte schnell verstanden und liefert konstant qualifizierte Termine mit genau den richtigen Unternehmen.',
          attribution: '— Sebastian R., Sales Manager, Intech Automation',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ],
      mobileReviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: 'Extrem professionell und auf Augenhöhe mit Geschäftsführern. Wirklich Super!',
          attribution: '— Vivien P., Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: 'Externe Caller, die unsere Software erklären können – LeadGenies hat uns überzeugt.',
          attribution: '— Thomas R., CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: 'Komplexe Produkte verstanden. Liefert qualifizierte Termine mit den richtigen Unternehmen.',
          attribution: '— Sebastian R., Intech',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ]
    },

    // Trust Section
    trust: {
      title: 'Viele Unternehmen vertrauen uns bereits – bereit für Ihr Wachstum?',
      stats: [
        { label: 'Zufriedene Partner' },
        { label: 'Geführte Gespräche' },
        { label: 'Zufriedenheitsquote' }
      ],
      badge: {
        topRated: 'Top-bewerteter Service 2025',
        verifiedBy: 'Verifiziert von:',
        tooltip: 'Trustindex bestätigt, dass Unternehmen eine Google-Bewertung von 4,5 oder höher basierend auf Bewertungen der letzten 12 Monate aufrechterhalten.'
      }
    },

    // How It Works
    howItWorks: {
      title: 'So funktioniert es',
      subtitle: '5 Schritte zum Erfolg'
    },

    // ROI Calculator
    roiCalculator: {
      title: 'Lohnt sich LeadGenies für Sie?',
      subtitle: 'Berechnen Sie den potenziellen Umsatz durch unseren KI-gestützten Cold-Calling-Service',
      yourMetrics: 'Ihre Kennzahlen',
      dealValue: 'Ø Kundenwert (CLV) / Ø Gewinn pro Abschluss',
      closingRate: 'Abschlussquote (%)',
      monthlyAppointments: 'Termine pro Monat',
      yourPotentialROI: 'Ihr potenzieller ROI',
      expectedMonthlyRevenue: 'Erwarteter monatlicher Umsatz',
      serviceCost: 'LeadGenies Servicekosten',
      netMonthlyGain: 'Netto-Monatsgewinn',
      fomoMessage: 'Ihr ungenutztes Potenzial: Sie lassen €{amount} Umsatz liegen, wenn Sie auf professionelle Akquise verzichten.',
      adjustMetrics: 'Passen Sie Ihre Kennzahlen an, um positives ROI-Potenzial zu sehen.',
      chartTitle: 'Kumulierter Umsatz vs. Servicekosten',
      chartSubtitle: 'Sehen Sie, wie sich Ihre Investition über 12 Monate auszahlt',
      greatROI: 'Großartiges ROI-Potenzial!',
      letsDiscuss: 'Lassen Sie uns besprechen, wie LeadGenies Ihnen helfen kann, diese Ergebnisse zu erzielen.',
      cta: 'Kostenlos beraten lassen',
      revenueGenerated: 'Generierter Umsatz',
      months: ['Monat 1', 'Monat 2', 'Monat 3', 'Monat 4', 'Monat 5', 'Monat 6', 'Monat 7', 'Monat 8', 'Monat 9', 'Monat 10', 'Monat 11', 'Monat 12']
    },

    // Guarantee Section
    guarantee: {
      title: 'Garantie & DSGVO',
      items: [
        {
          title: '100% DSGVO-konform',
          subtitle: 'Deutsche Datenschutzstandards, Server in Deutschland'
        },
        {
          title: 'Was abgedeckt ist',
          subtitle: 'Komplettes Onboarding, voller Monat Calling, alle Reports & Daten'
        },
        {
          title: 'Unsere Erfolgsbilanz',
          subtitle: '0 Rückerstattungen in 2024, 100% Kundenzufriedenheit, 12 Termine/Monat'
        },
        {
          title: '100% Geld zurück',
          subtitle: 'Wenn wir im ersten Monat keinen einzigen qualifizierten Termin vereinbaren, erhalten Sie Ihr Geld zu 100% zurück.'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'Alles, was Sie wissen müssen',
      categories: [
        {
          title: 'Über unseren Service',
          items: [
            {
              question: 'Wie verbessert KI Ihr Cold Calling?',
              answer: 'Wir nutzen KI für ICP-Analyse, Lead-Scoring und Gesprächseinblicke'
            },
            {
              question: 'Was unterscheidet Sie von anderen Agenturen?',
              answer: 'Kombination aus deutscher Expertise + KI-Technologie'
            },
            {
              question: 'Welche Branchen bedienen Sie?',
              answer: 'B2B SaaS, IT, Beratung, Immobilien, Professional Services'
            }
          ]
        },
        {
          title: 'Prozess & Technologie',
          items: [
            {
              question: 'Wie funktioniert Waterfall-Enrichment?',
              answer: 'Mehrere Datenquellen werden sequenziell validiert'
            },
            {
              question: 'Was ist Company-Lookalike-Technologie?',
              answer: 'KI findet ähnliche Unternehmen wie Ihre besten Kunden'
            },
            {
              question: 'Wie stellen Sie Datenqualität sicher?',
              answer: '7-stufiger Verifizierungsprozess mit 99% Genauigkeit'
            }
          ]
        },
        {
          title: 'Ergebnisse & Preise',
          items: [
            {
              question: 'Welche Ergebnisse kann ich erwarten?',
              answer: 'Durchschnittlich 12-15 qualifizierte Termine pro Monat'
            },
            {
              question: 'Wie schnell können wir starten?',
              answer: '48 Stunden vom Vertrag bis zum ersten Anruf'
            },
            {
              question: 'Bieten Sie individuelle Pakete an?',
              answer: 'Ja, basierend auf Ihren spezifischen Anforderungen'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparente Pakete für planbares Wachstum',
      subtitle: 'Wählen Sie Ihre Laufzeit - skalieren Sie Ihren Erfolg',
      packages: [
        {
          name: 'Testmonat',
          duration: '1 Monat',
          price: '€3.999',
          features: [
            '50-100 Anrufe / Tag',
            'Inkl. Lead-Liste (KI-basiert)',
            'Tägliches Reporting',
            'Wöchentliche Optimierung',
            'Geld-zurück-Garantie'
          ],
          bestFor: 'Zum Testen',
          cta: 'Pilotphase starten'
        },
        {
          name: 'Growth-Paket',
          duration: '3 Monate',
          price: '€3.499/Monat',
          savings: '€1.500 sparen',
          features: [
            'Alles aus dem Testmonat',
            'Direkter WhatsApp-Draht zum Caller',
            'Erweitertes KPI-Reporting',
            'Wöchentliche Anpassung der Lead-Liste',
            'Prioritäts-Support'
          ],
          bestFor: 'Ernsthaftes Wachstum',
          cta: 'Wachstum beschleunigen'
        },
        {
          name: 'Scale-Paket',
          duration: '6 Monate',
          price: '€2.999/Monat',
          savings: '€6.000 sparen',
          features: [
            'Alles aus Growth',
            'Langfristige Strategie-Planung',
            'Individuelles Reporting',
            'Maximale Planungssicherheit',
            'Bestes Preis-Leistungs-Verhältnis'
          ],
          bestFor: 'Marktdominanz',
          cta: 'Dominanz sichern'
        }
      ],
      bestForLabel: 'Ideal für:'
    },

    // Review Cards Section
    reviewCards: {
      row1: [
        {
          company: 'CoffeeCup.app',
          review: 'Die Zusammenarbeit mit LeadGenies hat unsere Vertriebspipeline transformiert. Ihre Caller generieren zuverlässig jede Woche qualitativ hochwertige Termine. Unser Vertriebsteam kann sich jetzt auf den Abschluss konzentrieren, während LeadGenies die Kaltakquise übernimmt.',
          name: 'Thomas Reppa.',
          position: 'CEO',
          bgColor: '#E8F4F8'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies hat uns geholfen, den Outbound-Vertrieb schneller zu skalieren als wir es intern konnten. Ihr Team versteht unsere Zielgruppe perfekt. Bereits im ersten Monat sahen wir einen deutlichen Anstieg bei den Partneranmeldungen.',
          name: 'Sascha Schwarz.',
          position: 'Vertriebsleiter',
          bgColor: '#F0F8E8'
        },
        {
          company: 'Tech-Experts GmbH',
          review: 'Das Outsourcing an LeadGenies war effektiver und kosteneffizienter als internes Calling. Ihre Caller kommunizieren auf Augenhöhe mit Entscheidern und liefern konstant wertvolle Termine.',
          name: 'Vivien Poswiat.',
          position: 'Gründer',
          bgColor: '#FFF9E6'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies hat unserem B2B-Outreach einen enormen Schub gegeben. Sie repräsentieren unsere Marke mit Energie und Klarheit. Wir erhalten regelmäßige Berichte und Feedback, sodass wir immer wissen, was passiert.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F5F5F5'
        },
        {
          company: 'Intech Automation',
          review: 'LeadGenies wurde ein zentraler Teil unseres Vertriebsprozesses. Ihr Team hat unsere komplexen technischen Produkte schnell verstanden und qualifizierte Termine mit genau den richtigen Unternehmen generiert.',
          name: 'Sebastian Rott.',
          position: 'Vertriebsleiter',
          bgColor: '#FFE8E8'
        }
      ],
      row2: [
        {
          company: 'Intech Automation',
          review: 'LeadGenies wurde ein zentraler Teil unseres Vertriebsprozesses. Ihr Team hat unsere komplexen technischen Produkte schnell verstanden und qualifizierte Termine mit genau den richtigen Unternehmen generiert.',
          name: 'Sebastian Rott.',
          position: 'Vertriebsleiter',
          bgColor: '#FFE8E8'
        },
        {
          company: 'Tech-Experts GmbH',
          review: 'Das Outsourcing an LeadGenies war effektiver und kosteneffizienter als internes Calling. Ihre Caller kommunizieren auf Augenhöhe mit Entscheidern und liefern konstant wertvolle Termine.',
          name: 'Vivien Poswiat.',
          position: 'Gründer',
          bgColor: '#E8F0F8'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies hat unserem B2B-Outreach einen enormen Schub gegeben. Sie repräsentieren unsere Marke mit Energie und Klarheit. Wir erhalten regelmäßige Berichte und Feedback, sodass wir immer wissen, was passiert.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F0F8E8'
        },
        {
          company: 'CoffeeCup.app',
          review: 'Die Zusammenarbeit mit LeadGenies hat unsere Vertriebspipeline transformiert. Ihre Caller generieren zuverlässig jede Woche qualitativ hochwertige Termine. Unser Vertriebsteam kann sich jetzt auf den Abschluss konzentrieren, während LeadGenies die Kaltakquise übernimmt.',
          name: 'Thomas Reppa.',
          position: 'CEO',
          bgColor: '#FFF9E6'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies hat uns geholfen, den Outbound-Vertrieb schneller zu skalieren als wir es intern konnten. Ihr Team versteht unsere Zielgruppe perfekt. Bereits im ersten Monat sahen wir einen deutlichen Anstieg bei den Partneranmeldungen.',
          name: 'Sascha Schwarz.',
          position: 'Vertriebsleiter',
          bgColor: '#F5F5F5'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Bereit für mehr Umsatz?',
      subtitle: 'Lassen Sie uns herausfinden, ob wir zueinander passen.',
      formTitle: 'Schnellkontakt-Formular',
      nameLabel: 'Name*',
      nameRequired: 'Name ist erforderlich',
      companyLabel: 'Unternehmen*',
      companyRequired: 'Unternehmen ist erforderlich',
      emailLabel: 'E-Mail*',
      emailRequired: 'E-Mail ist erforderlich',
      phoneLabel: 'Telefon',
      challengeLabel: 'Was ist Ihre größte Vertriebsherausforderung?',
      submitButton: 'Kostenlos & unverbindlich sprechen',
      responseTime: 'Antwort innerhalb von 2 Stunden während der Geschäftszeiten',
      directContactTitle: 'Direkter Kontakt',
      officeHoursLabel: 'Bürozeiten',
      officeHours: 'Mo-Fr 8:00-18:00 MEZ',
      linkedInValue: 'Mit Louis verbinden'
    },

    // Footer
    footer: {
      copyright: '© {year} LeadGenies GmbH',
      legal: [
        { label: 'Impressum', href: '/impressum' },
        { label: 'AGB', href: '/agb' },
        { label: 'Datenschutz', href: '/datenschutz' }
      ]
    },

    // Language switcher
    language: {
      de: 'DE',
      en: 'EN'
    }
  },

  en: {
    // Header
    header: {
      menuItems: [
        { label: 'What We Do', href: '#hero' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Is It Worth It?', href: '#roi-calculator' },
        { label: 'Our Guarantee', href: '#guarantee' },
        { label: 'Pricing', href: '#pricing' }
      ],
      ctaText: 'Book a Strategy Call'
    },

    // Hero
    hero: {
      title: 'More B2B Appointments by Real Experts – Powered by AI Data',
      subtitle: 'We fill your calendar with qualified leads. Our professional callers use cutting-edge data analysis for maximum success rates – where human expertise meets precision.',
      cta: 'Speak with us',
      belowText: 'Join <strong>10,000+</strong> successful German companies using telemarketing as their #1 sales channel',
      reviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: '"More effective than in-house calling. Their well-prepared callers deliver quality appointments and feel like part of our team."',
          attribution: '— Vivien Poswiat, Founder, Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: '"Transformed our pipeline with quality appointments every week. We focus on closing, they handle outreach. Fast ROI."',
          attribution: '— Thomas Reppa, CEO, CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: '"Quickly understood our complex technical products and consistently delivers qualified appointments with the right companies."',
          attribution: '— Sebastian R., Sales Manager, Intech Automation',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ],
      mobileReviews: [
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          text: '"Well-prepared callers who consistently deliver. Feels like an extension of our team."',
          attribution: '— Vivien P., Tech-Experts',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          text: '"Transformed our sales pipeline. High-quality appointments every week. Investment paid off within weeks."',
          attribution: '— Thomas R., CoffeeCup.app',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
        },
        {
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          text: '"Quickly understood our complex products. Delivers qualified appointments with exactly the right companies."',
          attribution: '— Sebastian R., Intech',
          personImage: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
        }
      ]
    },

    // Trust Section
    trust: {
      title: 'Trusted by top companies ready to scale',
      stats: [
        { label: 'Satisfied Partners' },
        { label: 'Conversations Held' },
        { label: 'Appointment Rate' }
      ],
      badge: {
        topRated: 'Top-rated service 2025',
        verifiedBy: 'Verified by:',
        tooltip: 'Trustindex verifies that businesses maintain a Google rating of 4.5 or higher based on reviews collected over the past 12 months.'
      }
    },

    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: '5 Steps to Success'
    },

    // ROI Calculator
    roiCalculator: {
      title: 'Calculate Your Return on Investment',
      subtitle: 'Calculate the potential revenue from our AI-powered cold calling service',
      yourMetrics: 'Your Metrics',
      dealValue: 'Average Deal Value / CLV',
      closingRate: 'Closing Rate',
      monthlyAppointments: 'Monthly Appointments',
      yourPotentialROI: 'Your Potential ROI',
      expectedMonthlyRevenue: 'Expected Monthly Revenue',
      serviceCost: 'LeadGenies Service Cost',
      netMonthlyGain: 'Net Monthly Gain',
      fomoMessage: 'You\'re missing out on €{amount} per month by not working with LeadGenies.',
      adjustMetrics: 'Try adjusting your metrics to see positive ROI potential.',
      chartTitle: 'Cumulative Revenue vs Service Cost',
      chartSubtitle: 'See how your investment pays off over 12 months',
      greatROI: 'Great ROI Potential!',
      letsDiscuss: 'Let\'s discuss how LeadGenies can help you achieve these results.',
      cta: 'Book a Strategy Call',
      revenueGenerated: 'Revenue Generated',
      months: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12']
    },

    // Guarantee Section
    guarantee: {
      title: 'True Success Guarantee & GDPR Compliant',
      items: [
        {
          title: "What's Covered",
          subtitle: 'Complete onboarding, full month of calling, all reports & data'
        },
        {
          title: 'Our Track Record',
          subtitle: '0 refunds in 2024, 100% client satisfaction, 12 appointments/month'
        },
        {
          title: 'GDPR Compliant',
          subtitle: 'EU data protection, secure servers'
        },
        {
          title: '100% Money Back',
          subtitle: 'Secure Encrypted Payments'
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'Everything You Need to Know',
      categories: [
        {
          title: 'About Our Service',
          items: [
            {
              question: 'How does AI enhance your cold calling?',
              answer: 'We use AI for ICP analysis, lead scoring, and conversation insights'
            },
            {
              question: 'What makes you different from other agencies?',
              answer: 'Combination of German expertise + AI technology'
            },
            {
              question: 'Which industries do you serve?',
              answer: 'B2B SaaS, IT, Consulting, Real Estate, Professional Services'
            }
          ]
        },
        {
          title: 'Process & Technology',
          items: [
            {
              question: 'How does waterfall enrichment work?',
              answer: 'Multiple data sources validated in sequence'
            },
            {
              question: 'What is company lookalike technology?',
              answer: 'AI finds similar companies to your best customers'
            },
            {
              question: 'How do you ensure data quality?',
              answer: '7-step verification process with 99% accuracy'
            }
          ]
        },
        {
          title: 'Results & Pricing',
          items: [
            {
              question: 'What results can I expect?',
              answer: 'Average 12-15 qualified appointments per month'
            },
            {
              question: 'How quickly can we start?',
              answer: '48 hours from contract to first call'
            },
            {
              question: 'Do you offer custom packages?',
              answer: 'Yes, based on your specific needs'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparent Pricing for Predictable Growth',
      subtitle: 'Choose your commitment level - scale your success',
      packages: [
        {
          name: 'Test Month',
          duration: '1 Month',
          price: '€3,999',
          features: [
            '50 calls/day',
            'Weekly optimization',
            'Money-back guarantee',
            'Basic reporting'
          ],
          bestFor: 'Testing the waters',
          cta: 'Start Test Month'
        },
        {
          name: 'Growth Package',
          duration: '3 Months',
          price: '€3,499/month',
          savings: 'Save €1,500',
          features: [
            'Everything in Test Month',
            'Dedicated account manager',
            'Advanced AI insights',
            'Custom ICP workshop',
            'Priority support'
          ],
          bestFor: 'Serious growth',
          cta: 'Choose Growth'
        },
        {
          name: 'Scale Package',
          duration: '6 Months',
          price: '€2,999/month',
          savings: 'Save €6,000',
          features: [
            'Everything in Growth',
            'Multi-channel outreach',
            'C-level targeting',
            'Quarterly strategy sessions',
            'Custom integrations'
          ],
          bestFor: 'Market domination',
          cta: 'Choose Scale'
        }
      ],
      bestForLabel: 'Best for:'
    },

    // Review Cards Section
    reviewCards: {
      row1: [
        {
          company: 'CoffeeCup.app',
          review: 'Working with LeadGenies transformed our sales pipeline. Their callers reliably generate quality appointments every week. Our sales team now focuses on closing deals while LeadGenies handles cold outreach.',
          name: 'Thomas Reppa.',
          position: 'CEO',
          bgColor: '#E8F4F8'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies helped us scale outbound sales faster than we could internally. Their team understands our target audience perfectly. Within the first month, we saw a clear increase in partner sign-ups.',
          name: 'Sascha Schwarz.',
          position: 'Sales Director',
          bgColor: '#F0F8E8'
        },
        {
          company: 'Tech-Experts GmbH',
          review: 'Outsourcing to LeadGenies was more effective and cost-efficient than in-house calling. Their callers communicate at eye level with decision-makers and consistently deliver valuable appointments.',
          name: 'Vivien Poswiat.',
          position: 'Founder',
          bgColor: '#FFF9E6'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies gave our B2B outreach a huge boost. They represent our brand with energy and clarity. We get regular reports and feedback, so we always know what is happening.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F5F5F5'
        },
        {
          company: 'Intech Automation',
          review: 'LeadGenies became a core part of our sales process. Their team quickly understood our complex technical products and generated qualified appointments with exactly the right companies.',
          name: 'Sebastian Rott.',
          position: 'Sales Manager',
          bgColor: '#FFE8E8'
        }
      ],
      row2: [
        {
          company: 'Intech Automation',
          review: 'LeadGenies became a core part of our sales process. Their team quickly understood our complex technical products and generated qualified appointments with exactly the right companies.',
          name: 'Sebastian Rott.',
          position: 'Sales Manager',
          bgColor: '#FFE8E8'
        },
        {
          company: 'Tech-Experts GmbH',
          review: 'Outsourcing to LeadGenies was more effective and cost-efficient than in-house calling. Their callers communicate at eye level with decision-makers and consistently deliver valuable appointments.',
          name: 'Vivien Poswiat.',
          position: 'Founder',
          bgColor: '#E8F0F8'
        },
        {
          company: 'YourHomie',
          review: 'LeadGenies gave our B2B outreach a huge boost. They represent our brand with energy and clarity. We get regular reports and feedback, so we always know what is happening.',
          name: 'Mirco Meyer.',
          position: 'CEO',
          bgColor: '#F0F8E8'
        },
        {
          company: 'CoffeeCup.app',
          review: 'Working with LeadGenies transformed our sales pipeline. Their callers reliably generate quality appointments every week. Our sales team now focuses on closing deals while LeadGenies handles cold outreach.',
          name: 'Thomas Reppa.',
          position: 'CEO',
          bgColor: '#FFF9E6'
        },
        {
          company: 'HappyFutter GmbH',
          review: 'LeadGenies helped us scale outbound sales faster than we could internally. Their team understands our target audience perfectly. Within the first month, we saw a clear increase in partner sign-ups.',
          name: 'Sascha Schwarz.',
          position: 'Sales Director',
          bgColor: '#F5F5F5'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Ready to Fill Your Pipeline with Qualified Leads?',
      subtitle: '',
      formTitle: 'Quick Contact Form',
      nameLabel: 'Name*',
      nameRequired: 'Name is required',
      companyLabel: 'Company*',
      companyRequired: 'Company is required',
      emailLabel: 'Email*',
      emailRequired: 'Email is required',
      phoneLabel: 'Phone',
      challengeLabel: "What's your biggest sales challenge?",
      submitButton: 'Get Your Free Strategy Session',
      responseTime: 'Response within 2 hours during business days',
      directContactTitle: 'Contact Directly',
      officeHoursLabel: 'Office Hours',
      officeHours: 'Mon-Fri 8:00-18:00 CET',
      linkedInValue: 'Connect with Louis'
    },

    // Footer
    footer: {
      copyright: '© {year} LeadGenies GmbH',
      legal: [
        { label: 'Imprint', href: '/impressum' },
        { label: 'Terms & Conditions', href: '/agb' },
        { label: 'Privacy Policy', href: '/datenschutz' }
      ]
    },

    // Language switcher
    language: {
      de: 'DE',
      en: 'EN'
    }
  }
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
