// Translation strings for LeadGenies website

export type Language = 'de' | 'en';

export const translations = {
  de: {
    // Header
    header: {
      menuItems: [
        { label: 'Team', href: '#team' },
        { label: 'Prozess', href: '#how-it-works' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'ROI-Rechner', href: '#roi-calculator' },
        { label: 'Garantie', href: '#guarantee' },
        { label: 'Preis', href: '#pricing' }
      ],
      ctaText: 'Qualifizierungsgespräch'
    },

    // Hero
    hero: {
      title: 'Die externe Vertriebsabteilung für etablierte B2B-Unternehmen',
      subtitle: 'Ihre dedizierte Telemarketing-Abteilung für systematische Kaltakquise. Unsere erfahrenen Sales-Profis arbeiten täglich 2-3 Stunden exklusiv für Ihr Unternehmen – DSGVO-konform, ohne Personalrisiko und mit messbaren Ergebnissen.',
      cta: 'Qualifizierungsgespräch vereinbaren',
      belowText: 'Für B2B-Unternehmen mit <strong>€20.000+ Monatsumsatz</strong> und eigenem Vertriebsteam',
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
      title: 'Passt LeadGenies zu Ihrem Unternehmen?',
      subtitle: 'Wir arbeiten ausschließlich mit etablierten B2B-Unternehmen zusammen, die bereits über ein funktionierendes Vertriebsteam verfügen und ihren Sales-Prozess systematisch skalieren möchten.',
      checklistTitle: 'Sie sind bei uns richtig, wenn:',
      checklist: [
        'Ihr Unternehmen generiert mindestens €20.000 monatlichen Umsatz.',
        'Sie haben ein Vertriebsteam von mind. 3-5 Mitarbeitern, das mehr Termine wahrnehmen kann.',
        'Ihre durchschnittliche Auftragsgröße liegt bei €15.000+ (ACV).',
        'Sie suchen einen langfristigen Partner für mind. 6 Monate Zusammenarbeit.'
      ],
      checklistFooter: 'Alle Punkte treffen zu? Dann lassen Sie uns sprechen.',
      notSuitableTitle: 'Nicht geeignet für:',
      notSuitableList: [
        'Solopreneure & Freelancer ohne eigenes Sales-Team',
        'Startups in Pre-Seed/Seed-Phase',
        'Unternehmen mit Auftragswerten unter €5.000',
        'Wer kurzfristige "Feuerwehr-Aktionen" sucht'
      ],
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
              question: 'Was unterscheidet Sie von einem klassischen Callcenter?',
              answer: 'Wir sind eine externe SDR-Abteilung (Sales Development Representative). Unsere Mitarbeiter sind hochqualifizierte Vertriebsprofis, die auf Augenhöhe mit Entscheidern kommunizieren. Der Fokus liegt auf der Qualität und Tiefe der Gespräche, nicht auf der reinen Anrufquantität. Wir nutzen zudem KI-Technologie zur Datenanalyse und Prozessoptimierung, was uns von traditionellen Agenturen abhebt.'
            },
            {
              question: 'Warum gibt es keine 1-Monats-Testphase?',
              answer: 'Nachhaltiger Vertriebsaufbau ist ein Marathon, kein Sprint. Der erste Monat dient dem Onboarding, der Einarbeitung und der Kalibrierung. Belastbare Ergebnisse und eine signifikante Pipeline-Entwicklung zeigen sich erfahrungsgemäß ab dem zweiten und dritten Monat. Eine 1-Monats-Zusammenarbeit wäre unseriös und würde Ihren und unseren Qualitätsansprüchen nicht gerecht.'
            },
            {
              question: 'Für welche Unternehmen eignet sich Ihr Service NICHT?',
              answer: 'Unser Service ist nicht geeignet für Startups in der Pre-Seed/Seed-Phase, Unternehmen ohne eigenes Vertriebsteam oder Firmen, deren Produkte/Dienstleistungen einen sehr niedrigen Auftragswert haben. Wir schaffen den größten Mehrwert für etablierte Unternehmen, die einen funktionierenden Prozess haben und diesen skalieren möchten.'
            },
            {
              question: 'Welche Branchen bedienen Sie?',
              answer: 'B2B SaaS, IT, Beratung, Immobilien, Professional Services – alle Branchen mit komplexen Produkten und höheren Auftragswerten (ACV 15.000+ €)'
            }
          ]
        },
        {
          title: 'Prozess & Technologie',
          items: [
            {
              question: 'Wie funktioniert Waterfall-Enrichment?',
              answer: 'Mehrere Datenquellen werden sequenziell validiert, um höchste Datenqualität für Ihre Zielgruppe zu gewährleisten'
            },
            {
              question: 'Was ist Company-Lookalike-Technologie?',
              answer: 'Unsere KI findet ähnliche Unternehmen wie Ihre besten Kunden, um Ihre Erfolgsquote zu maximieren'
            },
            {
              question: 'Wie stellen Sie Datenqualität sicher?',
              answer: '7-stufiger Verifizierungsprozess mit 99% Genauigkeit und kontinuierliche Validierung'
            }
          ]
        },
        {
          title: 'Ergebnisse & Investition',
          items: [
            {
              question: 'Welche Ergebnisse kann ich erwarten?',
              answer: 'Durchschnittlich 12-15 qualifizierte Termine pro Monat, abhängig von Ihrer Branche und Zielgruppe'
            },
            {
              question: 'Wie schnell können wir starten?',
              answer: 'Nach dem Strategie-Workshop starten wir innerhalb von 7-10 Tagen mit der aktiven Marktbearbeitung'
            },
            {
              question: 'Wie werden die Kosten strukturiert?',
              answer: 'Unser Preismodell ist transparent und fair: Eine kleine einmalige Onboarding-Pauschale für die Schulung und Integration plus ein monatlicher Festpreis für 2-3 Stunden tägliche Arbeitszeit Ihres persönlichen Sales-Mitarbeiters. Optional können Sie über uns DSGVO-konforme Leadlisten beziehen. Alle Details besprechen wir individuell im Beratungsgespräch.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparente Preisgestaltung',
      subtitle: 'Klare Preise, keine versteckten Kosten. Sie wissen von Anfang an, was Sie investieren.',
      description: 'Investment für etablierte B2B-Unternehmen:',
      packages: [
        {
          name: 'Onboarding-Pauschale',
          duration: 'Einmalig',
          price: '€1.999',
          features: [
            'Intensive Schulung Ihres persönlichen Mitarbeiters',
            'Integration ins Team & Kennenlernen',
            'Einweisung in Ihre CRM-Systeme',
            'Entwicklung der Gesprächsleitfäden',
            'Setup von Reporting & Prozessen'
          ],
          bestFor: 'Perfekter Start',
          cta: 'Qualifizierungsgespräch buchen'
        },
        {
          name: 'Monatlicher Retainer',
          duration: 'Monatlich',
          price: '€3.999',
          priceNote: '= €133/Arbeitstag',
          features: [
            'Tägliche 2-3 Stunden dedizierter Sales-Mitarbeiter',
            'Flexibel einsetzbar: Kaltakquise, Lead-Nachverfolgung, CRM-Pflege',
            'Teilnahme an Schulungen & Feedback-Calls',
            'Wie ein eigener Mitarbeiter – ohne Personalrisiko',
            'DSGVO-konform & professionell'
          ],
          bestFor: 'Kontinuierliches Wachstum',
          cta: 'Qualifizierungsgespräch buchen'
        },
        {
          name: 'Leadlisten-Service',
          duration: 'Optional',
          price: '€499',
          features: [
            'DSGVO-konforme Datenbanken (Cognism, EchoBot)',
            'Aufbereitete Leads in CSV, Excel oder Wunschformat',
            'Gezielt auf Ihre Zielgruppe zugeschnitten',
            'Kontinuierliche Aktualisierung möglich',
            'Optimale Unterstützung für Kaltakquise'
          ],
          bestFor: 'Maximale Effizienz',
          cta: 'Qualifizierungsgespräch buchen'
        }
      ],
      bestForLabel: 'Ideal für:',
      roiNote: 'Bei 12+ Terminen/Monat = ca. €333 pro qualifiziertem Termin. Bei einem Ø Auftragswert von €15.000 und 20% Abschlussrate = €36.000+ Monatsumsatz-Potenzial.',
      footerText: 'Diese Investment-Höhe ist ideal für etablierte B2B-Unternehmen mit €20.000+ Monatsumsatz. Für kleinere Unternehmen empfehlen wir, erst intern zu skalieren.'
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

    // Case Studies Section
    caseStudies: {
      title: 'Erfolgsgeschichten unserer Kunden',
      subtitle: 'Wie etablierte B2B-Unternehmen mit LeadGenies ihren Vertrieb skalieren',
      studies: [
        {
          company: 'CoffeeCup.app',
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          industry: 'SaaS / B2B Software',
          companySize: '25+ Mitarbeiter',
          avgDealSize: 'ACV €18.000+',
          duration: '12 Monate',
          challenge: {
            title: 'Die Herausforderung',
            text: 'Als schnell wachsendes SaaS-Startup mit einem komplexen Produkt fehlte CoffeeCup.app die Zeit und Ressourcen für systematische Kaltakquise. Das interne Team war vollständig mit Produktentwicklung und Bestandskundenpflege ausgelastet.'
          },
          solution: {
            title: 'Die Lösung',
            text: 'Seit über 12 Monaten arbeitet ein dedizierter LeadGenies-Mitarbeiter täglich 2-3 Stunden exklusiv für CoffeeCup. Nach intensiver Produktschulung führt er selbstständig Kaltakquise durch und pflegt das CRM-System.'
          },
          results: {
            title: 'Das Ergebnis',
            metrics: [
              { value: '31', label: 'Termine in 12 Wochen' },
              { value: '12', label: 'Monate erfolgreiche Zusammenarbeit' },
              { value: '100%', label: 'Produktkenntnisse des Mitarbeiters' }
            ],
            quote: 'Der LeadGenies-Mitarbeiter kennt unser Tool in- und auswendig. Die Termine sind hochqualifiziert und die Entscheider verstehen unser Produkt bereits beim ersten Gespräch.'
          },
          testimonial: {
            name: 'Thomas Reppa',
            position: 'CEO',
            image: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
          }
        },
        {
          company: 'Tech-Experts GmbH',
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          industry: 'Personalvermittlung / Recruiting',
          companySize: '35+ Mitarbeiter',
          avgDealSize: 'ACV €25.000+',
          duration: '4 Monate',
          challenge: {
            title: 'Die Herausforderung',
            text: 'Das interne Team von Tech-Experts war vollständig mit laufenden Projekten ausgelastet. Für proaktiven Outbound-Vertrieb fehlten schlichtweg die Kapazitäten, wodurch Wachstumspotenziale ungenutzt blieben.'
          },
          solution: {
            title: 'Die Lösung',
            text: 'LeadGenies stellt seit 4 Monaten einen erfahrenen Telemarketing-Mitarbeiter, der perfekt ins Team integriert ist. Er nimmt an internen Meetings teil, nutzt die CRM-Systeme und arbeitet eng mit dem Vertriebsleiter zusammen.'
          },
          results: {
            title: 'Das Ergebnis',
            metrics: [
              { value: '18', label: 'Termine in 6 Wochen' },
              { value: '4', label: 'Monate Partnerschaft' },
              { value: '95%', label: 'Show-up Rate der Termine' }
            ],
            quote: 'Die Zusammenarbeit läuft wie mit einem eigenen Mitarbeiter. Konstant hochwertige Termine mit Entscheidern aus dem Mittelstand – genau unsere Zielgruppe.'
          },
          testimonial: {
            name: 'Vivien Poswiat',
            position: 'Gründer',
            image: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
          }
        },
        {
          company: 'Intech Automation',
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          industry: 'Industrie-Automation / B2B Tech',
          companySize: '50+ Mitarbeiter',
          avgDealSize: 'ACV €45.000+',
          duration: '10+ Monate',
          challenge: {
            title: 'Die Herausforderung',
            text: 'Intech Automation vertreibt hochkomplexe technische Produkte im Industriebereich. Die Akquise erfordert tiefes technisches Verständnis und Gespräche auf Augenhöhe mit technischen Einkäufern.'
          },
          solution: {
            title: 'Die Lösung',
            text: 'LeadGenies hat sich intensiv in die technischen Lösungen eingearbeitet. Seit 10 Monaten unterstützt das Team kontinuierlich bei Kaltakquise, Lead-Nachverfolgung und der Qualifizierung von Interessenten.'
          },
          results: {
            title: 'Das Ergebnis',
            metrics: [
              { value: '13', label: 'Termine/Monat im Durchschnitt' },
              { value: '10+', label: 'Monate kontinuierlicher Support' },
              { value: '100%', label: 'Technische Gesprächsqualität' }
            ],
            quote: 'Die Qualität der Gespräche ist beeindruckend. LeadGenies liefert genau die richtigen Industriekunden – Unternehmen, die unsere Lösungen wirklich brauchen.'
          },
          testimonial: {
            name: 'Sebastian Rott',
            position: 'Sales Manager',
            image: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
          }
        }
      ],
      cta: 'Ihre Erfolgsgeschichte beginnt hier'
    },

    // Team Section
    team: {
      title: 'Wer callt für Sie?',
      subtitle: 'Lernen Sie unsere erfahrenen Vertriebsprofis kennen – keine anonymen Callcenter-Agents, sondern spezialisierte Experten mit echtem Branchenwissen.',
      members: [
        {
          name: 'Mona Petersen',
          role: 'Co-Founder & Director Sales Development',
          badge: 'C-Level Spezialistin',
          image: '/mona-petersen.jpg',
          bio: 'Mona ist auf die Ansprache von C-Level Entscheidern spezialisiert und überzeugt durch ihre Kombination aus juristischem Fachwissen und charismatischer Persönlichkeit. Mit ihrer DSGVO-Expertise und professionellen Auftritt öffnet sie selbst bei skeptischen Geschäftsführern und Vorständen die Tür zum ersten Gespräch.',
          education: {
            title: 'Hintergrund',
            text: 'Rechtswissenschaften (Jura) mit Spezialisierung auf Datenschutzrecht'
          },
          experience: {
            title: 'Erfahrung',
            text: '5+ Jahre C-Level Akquise in regulierten B2B-Branchen'
          },
          strength: {
            title: 'Besondere Stärke',
            text: 'Spezialistin für Geschäftsführer und C-Level im Mittelstand – schafft Vertrauen auf Augenhöhe'
          }
        },
        {
          name: 'Daniel Kock',
          role: 'Co-Founder & Head of Fulfillment',
          badge: 'IT & HR Spezialist',
          image: '/daniel-kock.png',
          bio: 'Daniel vereint technisches IT-Verständnis mit Erfahrung aus der Personalvermittlung. Als einer unserer Top-Setter und Closer überzeugt er durch sein tiefes Produktverständnis und seine Fähigkeit, komplexe Lösungen verständlich zu kommunizieren.',
          education: {
            title: 'Hintergrund',
            text: 'IT-Branche mit zusätzlicher Expertise in HR & Recruiting'
          },
          experience: {
            title: 'Erfahrung',
            text: 'Mehrjährige Erfahrung in Personalvermittlung und Tech-Sales'
          },
          strength: {
            title: 'Besondere Stärke',
            text: 'Spezialist für komplexe Tech-Produkte und Software-as-a-Service'
          }
        },
        {
          name: 'Maren Lucatero',
          role: 'Senior Sales Development Representative',
          badge: 'International & HR Expertin',
          image: '/maren-lucatero.png',
          bio: 'Maren bringt internationale Erfahrung aus Deutschland und Mexiko mit und verbindet HR-Expertise mit exzellenter Kundenbetreuung. Ihre organisatorische Stärke und mehrsprachige Kompetenz machen sie zur idealen Ansprechpartnerin für internationale Geschäftskunden.',
          education: {
            title: 'Hintergrund',
            text: 'HR & Business Administration mit internationaler Projekterfahrung'
          },
          experience: {
            title: 'Erfahrung',
            text: 'Mehrjährige Erfahrung in Geschäftsführungsassistenz und internationalem Kundenmanagement'
          },
          strength: {
            title: 'Besondere Stärke',
            text: 'Internationale Kundenkommunikation und mehrsprachige Projektkoordination'
          }
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Passt LeadGenies zu Ihrem Unternehmen?',
      subtitle: 'Lassen Sie uns in einem kurzen Gespräch klären, ob wir der richtige Partner für Sie sind.',
      formTitle: 'Qualifizierungsgespräch anfragen',
      nameLabel: 'Name*',
      nameRequired: 'Name ist erforderlich',
      companyLabel: 'Unternehmen*',
      companyRequired: 'Unternehmen ist erforderlich',
      emailLabel: 'E-Mail*',
      emailRequired: 'E-Mail ist erforderlich',
      phoneLabel: 'Telefon',
      challengeLabel: 'Was ist Ihre größte Vertriebsherausforderung?',
      submitButton: 'Qualifizierungsgespräch vereinbaren',
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
        { label: 'Team', href: '#team' },
        { label: 'Process', href: '#how-it-works' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'ROI Calculator', href: '#roi-calculator' },
        { label: 'Guarantee', href: '#guarantee' },
        { label: 'Pricing', href: '#pricing' }
      ],
      ctaText: 'Book Qualification Call'
    },

    // Hero
    hero: {
      title: 'The External Sales Department for Established B2B Companies',
      subtitle: 'Your dedicated telemarketing department for systematic cold calling. Our experienced sales professionals work 2-3 hours daily exclusively for your company – GDPR-compliant, without hiring risk, and with measurable results.',
      cta: 'Book Qualification Call',
      belowText: 'For B2B companies with <strong>€20,000+ monthly revenue</strong> and existing sales team',
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
      title: 'Is LeadGenies Right for Your Business?',
      subtitle: 'We work exclusively with established B2B companies that already have a functioning sales team and want to systematically scale their sales process.',
      checklistTitle: 'You\'re a fit if:',
      checklist: [
        'Your company generates at least €20,000 monthly revenue.',
        'You have a sales team of min. 3-5 members who can handle more appointments.',
        'Your average deal size is €15,000+ (ACV).',
        'You\'re looking for a long-term partner for at least 6 months.'
      ],
      checklistFooter: 'All points apply? Let\'s talk.',
      notSuitableTitle: 'Not suitable for:',
      notSuitableList: [
        'Solopreneurs & freelancers without a sales team',
        'Startups in pre-seed/seed phase',
        'Companies with deal values under €5,000',
        'Those seeking short-term "firefighting"'
      ],
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
              question: 'What distinguishes you from a traditional call center?',
              answer: 'We are an external SDR (Sales Development Representative) department. Our team consists of highly qualified sales professionals who communicate at eye level with decision-makers. The focus is on the quality and depth of conversations, not on pure call volume. We also use AI technology for data analysis and process optimization, which sets us apart from traditional agencies.'
            },
            {
              question: 'Why is there no 1-month trial period?',
              answer: 'Sustainable sales development is a marathon, not a sprint. The first month is for onboarding, training, and calibration. Reliable results and significant pipeline development typically show from the second and third month onwards. A 1-month collaboration would be unprofessional and would not meet your and our quality standards.'
            },
            {
              question: 'For which companies is your service NOT suitable?',
              answer: 'Our service is not suitable for startups in the pre-seed/seed phase, companies without their own sales team, or companies whose products/services have a very low contract value. We create the greatest added value for established companies that have a functioning process and want to scale it.'
            },
            {
              question: 'Which industries do you serve?',
              answer: 'B2B SaaS, IT, Consulting, Real Estate, Professional Services – all industries with complex products and higher contract values (ACV €15,000+)'
            }
          ]
        },
        {
          title: 'Process & Technology',
          items: [
            {
              question: 'How does waterfall enrichment work?',
              answer: 'Multiple data sources are validated sequentially to ensure the highest data quality for your target audience'
            },
            {
              question: 'What is company lookalike technology?',
              answer: 'Our AI finds similar companies to your best customers to maximize your success rate'
            },
            {
              question: 'How do you ensure data quality?',
              answer: '7-step verification process with 99% accuracy and continuous validation'
            }
          ]
        },
        {
          title: 'Results & Investment',
          items: [
            {
              question: 'What results can I expect?',
              answer: 'Average 12-15 qualified appointments per month, depending on your industry and target audience'
            },
            {
              question: 'How quickly can we start?',
              answer: 'After the strategy workshop, we start active market cultivation within 7-10 days'
            },
            {
              question: 'How are costs structured?',
              answer: 'Our pricing model is transparent and fair: A small one-time onboarding fee for training and integration plus a monthly fixed price for 2-3 hours daily working time of your personal sales professional. Optionally, you can obtain GDPR-compliant lead lists through us. We discuss all details individually in the consultation call.'
            }
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Clear prices, no hidden costs. You know from the start what you\'re investing.',
      description: 'Investment for established B2B companies:',
      packages: [
        {
          name: 'Onboarding Fee',
          duration: 'One-time',
          price: '€1,999',
          features: [
            'Intensive training of your personal team member',
            'Team integration & introduction',
            'Training in your CRM systems',
            'Development of conversation scripts',
            'Setup of reporting & processes'
          ],
          bestFor: 'Perfect Start',
          cta: 'Book Qualification Call'
        },
        {
          name: 'Monthly Retainer',
          duration: 'Monthly',
          price: '€3,999',
          priceNote: '= €133/working day',
          features: [
            'Daily 2-3 hours dedicated sales professional',
            'Flexibly deployable: Cold calling, lead follow-up, CRM management',
            'Participation in training & feedback calls',
            'Like your own employee – without hiring risk',
            'GDPR-compliant & professional'
          ],
          bestFor: 'Continuous Growth',
          cta: 'Book Qualification Call'
        },
        {
          name: 'Lead List Service',
          duration: 'Optional',
          price: '€499',
          features: [
            'GDPR-compliant databases (Cognism, EchoBot)',
            'Prepared leads in CSV, Excel or desired format',
            'Specifically tailored to your target audience',
            'Continuous updates possible',
            'Optimal support for cold calling'
          ],
          bestFor: 'Maximum Efficiency',
          cta: 'Book Qualification Call'
        }
      ],
      bestForLabel: 'Best for:',
      roiNote: 'At 12+ appointments/month = approx. €333 per qualified appointment. With avg. deal value of €15,000 and 20% close rate = €36,000+ monthly revenue potential.',
      footerText: 'This investment level is ideal for established B2B companies with €20,000+ monthly revenue. For smaller companies, we recommend scaling internally first.'
    },

    // Review Cards Section
    reviewCards: {
      row1: [
        {
          company: 'Case Study: CoffeeCup.app',
          review: 'Challenge: As a SaaS startup with a complex product, we lacked time for systematic cold calling. Solution: For over 12 months, a dedicated LeadGenies professional has been working 2-3 hours daily exclusively for us. Result: Average 3-4 qualified B2B appointments per month with decision-makers who understand our product. The team member knows our tool inside out.',
          name: 'Thomas Reppa',
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
          company: 'Case Study: Tech-Experts GmbH',
          review: 'Challenge: Our internal team was busy with projects, resources for outbound were lacking. Solution: For 14 months, LeadGenies has been supporting us with an experienced telemarketing professional who is perfectly integrated into our team. Result: Consistently 3-4 high-quality appointments monthly with C-level from mid-market companies. The collaboration works like with our own employee.',
          name: 'Vivien Poswiat',
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
          company: 'Case Study: Intech Automation',
          review: 'Challenge: Complex technical products require deep understanding in acquisition. Solution: LeadGenies has intensively familiarized themselves with our solutions. For 10 months, we have been continuously receiving support in cold calling and lead follow-up. Result: 3-4 qualified appointments per month with exactly the right industrial customers. The quality of conversations is impressive.',
          name: 'Sebastian Rott',
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

    // Case Studies Section
    caseStudies: {
      title: 'Success Stories from Our Clients',
      subtitle: 'How established B2B companies scale their sales with LeadGenies',
      studies: [
        {
          company: 'CoffeeCup.app',
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/app-v1.svg',
          industry: 'SaaS / B2B Software',
          companySize: '25+ employees',
          avgDealSize: 'ACV €18,000+',
          duration: '12 Months',
          challenge: {
            title: 'The Challenge',
            text: 'As a fast-growing SaaS startup with a complex product, CoffeeCup.app lacked the time and resources for systematic cold calling. The internal team was fully occupied with product development and existing customer care.'
          },
          solution: {
            title: 'The Solution',
            text: 'For over 12 months, a dedicated LeadGenies professional has been working 2-3 hours daily exclusively for CoffeeCup. After intensive product training, he independently conducts cold calling and maintains the CRM system.'
          },
          results: {
            title: 'The Result',
            metrics: [
              { value: '31', label: 'Appointments in 12 Weeks' },
              { value: '12', label: 'Months Successful Partnership' },
              { value: '100%', label: 'Product Knowledge of Team Member' }
            ],
            quote: 'The LeadGenies team member knows our tool inside out. The appointments are highly qualified and decision-makers already understand our product in the first conversation.'
          },
          testimonial: {
            name: 'Thomas Reppa',
            position: 'CEO',
            image: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Aerion_-Coffee-Cup.png'
          }
        },
        {
          company: 'Tech-Experts GmbH',
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Logo-TEC-Experts-v1.svg',
          industry: 'Recruitment / HR Services',
          companySize: '35+ employees',
          avgDealSize: 'ACV €25,000+',
          duration: '4 Months',
          challenge: {
            title: 'The Challenge',
            text: 'Tech-Experts\' internal team was fully occupied with ongoing projects. There was simply no capacity for proactive outbound sales, leaving growth potential untapped.'
          },
          solution: {
            title: 'The Solution',
            text: 'LeadGenies has been providing an experienced telemarketing professional for 4 months who is perfectly integrated into the team. He participates in internal meetings, uses the CRM systems, and works closely with the sales manager.'
          },
          results: {
            title: 'The Result',
            metrics: [
              { value: '18', label: 'Appointments in 6 Weeks' },
              { value: '4', label: 'Months Partnership' },
              { value: '95%', label: 'Appointment Show-up Rate' }
            ],
            quote: 'The collaboration works like with our own employee. Consistently high-quality appointments with decision-makers from mid-market companies – exactly our target audience.'
          },
          testimonial: {
            name: 'Vivien Poswiat',
            position: 'Founder',
            image: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/vivien.png'
          }
        },
        {
          company: 'Intech Automation',
          logo: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech-v1.svg',
          industry: 'Industrial Automation / B2B Tech',
          companySize: '50+ employees',
          avgDealSize: 'ACV €45,000+',
          duration: '10+ Months',
          challenge: {
            title: 'The Challenge',
            text: 'Intech Automation sells highly complex technical products in the industrial sector. Acquisition requires deep technical understanding and conversations at eye level with technical buyers.'
          },
          solution: {
            title: 'The Solution',
            text: 'LeadGenies has intensively familiarized themselves with the technical solutions. For 10 months, the team has been continuously supporting cold calling, lead follow-up, and qualification of prospects.'
          },
          results: {
            title: 'The Result',
            metrics: [
              { value: '13', label: 'Appointments/Month on Average' },
              { value: '10+', label: 'Months Continuous Support' },
              { value: '100%', label: 'Technical Conversation Quality' }
            ],
            quote: 'The quality of conversations is impressive. LeadGenies delivers exactly the right industrial customers – companies that truly need our solutions.'
          },
          testimonial: {
            name: 'Sebastian Rott',
            position: 'Sales Manager',
            image: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/intech.png'
          }
        }
      ],
      cta: 'Your Success Story Starts Here'
    },

    // Team Section
    team: {
      title: 'Who Will Be Calling for You?',
      subtitle: 'Meet our experienced sales professionals – not anonymous call center agents, but specialized experts with real industry knowledge.',
      members: [
        {
          name: 'Mona Petersen',
          role: 'Co-Founder & Director Sales Development',
          badge: 'C-Level Specialist',
          image: '/mona-petersen.jpg',
          bio: 'Mona specializes in reaching C-level decision-makers and convinces through her combination of legal expertise and charismatic personality. With her GDPR knowledge and professional presence, she opens doors to conversations even with skeptical CEOs and executives.',
          education: {
            title: 'Background',
            text: 'Law degree with specialization in data protection law'
          },
          experience: {
            title: 'Experience',
            text: '5+ years C-level acquisition in regulated B2B industries'
          },
          strength: {
            title: 'Special Strength',
            text: 'Specialist for CEOs and C-level in mid-market – builds trust at eye level'
          }
        },
        {
          name: 'Daniel Kock',
          role: 'Co-Founder & Head of Fulfillment',
          badge: 'IT & HR Specialist',
          image: '/daniel-kock.png',
          bio: 'Daniel combines technical IT understanding with experience from recruitment. As one of our top setters and closers, he convinces through his deep product understanding and ability to communicate complex solutions clearly.',
          education: {
            title: 'Background',
            text: 'IT industry with additional expertise in HR & recruiting'
          },
          experience: {
            title: 'Experience',
            text: 'Multiple years of experience in recruitment and tech sales'
          },
          strength: {
            title: 'Special Strength',
            text: 'Specialist for complex tech products and Software-as-a-Service'
          }
        },
        {
          name: 'Maren Lucatero',
          role: 'Senior Sales Development Representative',
          badge: 'International & HR Expert',
          image: '/maren-lucatero.png',
          bio: 'Maren brings international experience from Germany and Mexico, combining HR expertise with excellent customer service. Her organizational strength and multilingual competence make her the ideal contact for international business clients.',
          education: {
            title: 'Background',
            text: 'HR & Business Administration with international project experience'
          },
          experience: {
            title: 'Experience',
            text: 'Multiple years of experience in executive assistance and international customer management'
          },
          strength: {
            title: 'Special Strength',
            text: 'International customer communication and multilingual project coordination'
          }
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Is LeadGenies Right for Your Business?',
      subtitle: 'Let\'s have a quick conversation to determine if we\'re the right partner for you.',
      formTitle: 'Request Qualification Call',
      nameLabel: 'Name*',
      nameRequired: 'Name is required',
      companyLabel: 'Company*',
      companyRequired: 'Company is required',
      emailLabel: 'Email*',
      emailRequired: 'Email is required',
      phoneLabel: 'Phone',
      challengeLabel: "What's your biggest sales challenge?",
      submitButton: 'Book Qualification Call',
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
