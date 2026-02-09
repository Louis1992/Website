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
      ctaText: 'Jetzt beraten lassen'
    },

    // Hero
    hero: {
      title: 'Professionelle B2B-Telemarketing-Experten für Ihren skalierbaren Vertrieb',
      subtitle: 'Wir sind Ihre externe Telemarketing-Abteilung. Von Kaltakquise über Lead-Nachverfolgung bis hin zur CRM-Pflege – unsere erfahrenen Sales-Mitarbeiter arbeiten täglich 2-3 Stunden exklusiv für Ihr Unternehmen. Flexibel einsetzbar, DSGVO-konform und ohne Personalrisiko.',
      cta: 'Jetzt unverbindlich beraten lassen',
      belowText: 'Für etablierte B2B-Unternehmen mit <strong>ambitionierten Wachstumszielen</strong>',
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
      title: 'Für wen ist LeadGenies die richtige Lösung?',
      subtitle: 'Wir arbeiten mit etablierten B2B-Unternehmen ab €20.000 Monatsumsatz zusammen, die ihren Vertrieb systematisch skalieren möchten. Unsere Partner sehen die Terminvereinbarung nicht als Notlösung, sondern als strategischen Hebel für planbares Wachstum.',
      checklistTitle: 'Qualifizierungs-Checkliste',
      checklist: [
        'Sie haben ein etabliertes Produkt mit klarem Product-Market-Fit.',
        'Sie oder Ihr Vertriebsteam können und wollen mehr qualifizierte Termine wahrnehmen.',
        'Sie suchen einen langfristigen Partner, keine kurzfristige "Feuerwehr".'
      ],
      checklistFooter: 'Trifft das auf Sie zu? Dann lassen Sie uns sprechen.',
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
      subtitle: 'Klare Preise, keine versteckten Kosten. Wählen Sie das Paket, das zu Ihrem Wachstum passt.',
      description: 'Investment für etablierte B2B-Unternehmen:',
      packages: [
        {
          name: 'Growth',
          duration: 'Ab 3 Monate',
          price: '€3.499',
          priceNote: '/Monat · zzgl. €1.999 Onboarding',
          dailyPrice: 'Ab €80/Stunde',
          features: [
            '2 Stunden/Tag dedizierter Sales-Mitarbeiter',
            'Kanal: Telefonakquise',
            'Tägliches Reporting + wöchentlicher Feedback-Call',
            'LeadGenies-App: Tägliche Übersicht & Insights',
            'Leadlisten auf Anfrage (separat buchbar)',
            'DSGVO-konform & professionell',
            'Ziel: 8–15 qualifizierte Termine/Monat'
          ],
          bestFor: 'Schneller Einstieg',
          cta: 'Qualifizierungsgespräch buchen'
        },
        {
          name: 'Scale',
          duration: 'Ab 6 Monate',
          price: '€4.999',
          priceNote: '/Monat · Onboarding inkludiert',
          dailyPrice: 'Ab €57/Stunde',
          savings: 'Empfohlen',
          features: [
            '3–4 Stunden/Tag dedizierter Sales-Mitarbeiter',
            'Kanal: Telefon + alle Follow-up-Mails & Nachverfolgung',
            'Super-individuelles Reporting nach Kundenwunsch',
            'LeadGenies-App: Live-Tracking & Insights Plus',
            'Leadlisten (bis zu 1.000/Monat), Onboarding & Infrastruktur inklusive',
            'Wöchentliche Zielgruppen-Review & Qualitäts-Tracking',
            'Ziel: 15–30 qualifizierte Termine/Monat'
          ],
          bestFor: 'Maximales Wachstum',
          cta: 'Qualifizierungsgespräch buchen'
        },
        {
          name: 'Enterprise',
          duration: 'Ab 12 Monate',
          price: 'Individuell',
          priceNote: 'Onboarding + Strategy-Workshop inkludiert',
          features: [
            '5–6 Stunden/Tag dedizierter Sales-Mitarbeiter',
            'Individuelle Einarbeitung ins Team mit allen Aufgaben',
            'Volle Integration in Ihre Infrastruktur & Ihr Team',
            'LeadGenies-App: Vollzugriff & Priority Support',
            'Unbegrenzte verifizierte Leads inkl. mit dauerhaftem Qualitäts-Reporting',
            'Ziel: 50+ qualifizierte Termine/Monat'
          ],
          bestFor: 'Volle Sales-Power',
          cta: 'Erstgespräch vereinbaren'
        }
      ],
      bestForLabel: 'Ideal für:',
      roiNote: 'Rechenbeispiel Scale-Paket: Bei 20+ Terminen/Monat = ca. €250 pro qualifiziertem Termin. Bei einem Ø Auftragswert von €15.000 und 20% Abschlussrate = €60.000+ Monatsumsatz-Potenzial.',
      footerText: 'Diese Investment-Höhe ist ideal für etablierte B2B-Unternehmen mit €20.000+ Monatsumsatz. Für wachsende Unternehmen ohne eigenes Sales-Team: <a href="/starter" style="color: #4136b3; font-weight: 600;">Entdecken Sie unser Starter-Programm →</a><br/><br/>Leadlisten separat benötigt? Über unseren Partner <a href="https://www.lead-schmiede.de" target="_blank" rel="noopener" style="color: #4136b3; font-weight: 600;">Lead-Schmiede.de</a> erhalten Sie DSGVO-konforme B2B-Leadlisten ab €1,50/Lead.'
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
          image: '/mona-petersen.png',
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
    },

    // ===== STARTER PAGE TRANSLATIONS =====

    starterHeader: {
      menuItems: [
        { label: 'Prozess', href: '#how-it-works' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Garantie', href: '#guarantee' },
        { label: 'Pakete', href: '#pricing' },
        { label: 'Kontakt', href: '#contact' }
      ],
      ctaText: 'Beratungsgespräch'
    },

    starterHero: {
      title: 'Professionelle B2B-Kaltakquise – speziell für wachsende Unternehmen',
      subtitle: 'Sie haben ein gutes Produkt, aber noch kein großes Vertriebsteam? Wir übernehmen Ihre Kaltakquise komplett – inklusive Leadlisten, Onboarding und Reporting. Ein Preis, alles drin.',
      cta: 'Kostenloses Beratungsgespräch',
      belowText: 'Für B2B-Unternehmen die <strong>ihren Vertrieb aufbauen</strong> wollen'
    },

    starterTrust: {
      title: 'Ist das Starter-Programm das Richtige für Sie?',
      subtitle: 'Unser Starter-Programm ist speziell für wachsende B2B-Unternehmen konzipiert, die professionelle Kaltakquise nutzen möchten, ohne gleich ein eigenes SDR-Team aufbauen zu müssen.',
      checklistTitle: 'Perfekt für Sie, wenn:',
      checklist: [
        'Ihr Unternehmen generiert mindestens €5.000 monatlichen Umsatz.',
        'Sie haben ein B2B-Produkt oder eine B2B-Dienstleistung und möchten aktiv neue Kunden gewinnen.',
        'Ihre durchschnittliche Auftragsgröße liegt bei €3.000+ (ACV).',
        'Sie möchten einen strukturierten Vertriebsprozess aufbauen – auch ohne eigenes Sales-Team.'
      ],
      checklistFooter: 'Klingt nach Ihnen? Dann lassen Sie uns sprechen.'
    },

    starterHowItWorks: {
      title: 'So starten wir gemeinsam',
      subtitle: 'In 4 einfachen Schritten zu Ihrem externen Vertriebsteam',
      steps: [
        {
          number: '01',
          title: 'Beratungsgespräch',
          description: 'Wir lernen Ihr Unternehmen, Ihr Produkt und Ihre Zielgruppe kennen. Gemeinsam definieren wir, welches Starter-Paket am besten passt.'
        },
        {
          number: '02',
          title: 'Onboarding (inklusive)',
          description: 'Wir schulen unseren Sales-Mitarbeiter auf Ihr Produkt, entwickeln den Gesprächsleitfaden und richten alle Prozesse ein – ohne Extra-Kosten.'
        },
        {
          number: '03',
          title: 'Kaltakquise startet',
          description: 'Ihr dedizierter Sales-Mitarbeiter beginnt mit der täglichen Akquise. Sie erhalten qualifizierte Termine direkt in Ihren Kalender.'
        },
        {
          number: '04',
          title: 'Wachstum & Optimierung',
          description: 'Durch regelmäßiges Reporting und Feedback optimieren wir kontinuierlich. Ihre Pipeline wächst planbar und nachhaltig.'
        }
      ]
    },

    starterPricing: {
      title: 'Starter-Pakete – Alles inklusive',
      subtitle: 'Ein Preis, keine versteckten Kosten. Onboarding, Leadlisten und Reporting – alles inklusive.',
      description: 'Investment für wachsende B2B-Unternehmen:',
      packages: [
        {
          name: 'Starter',
          duration: 'Ab 3 Monate',
          price: '€2.999',
          priceNote: '/Monat · alles inklusive',
          dailyPrice: 'Ab €68/Stunde',
          features: [
            '2 Stunden/Tag dedizierter Sales-Mitarbeiter',
            'Leadlisten, Onboarding & Infrastruktur – komplett inklusive',
            'Kanal: Telefonakquise',
            'Wöchentliches Reporting',
            'DSGVO-konform & professionell',
            'Ziel: 5–10 qualifizierte Termine/Monat'
          ],
          bestFor: 'Vertrieb starten',
          cta: 'Beratungsgespräch buchen'
        },
        {
          name: 'Starter Plus',
          duration: 'Ab 3 Monate',
          price: '€3.999',
          priceNote: '/Monat · alles inklusive',
          dailyPrice: 'Ab €45/Stunde',
          savings: 'Empfohlen',
          features: [
            '4 Stunden/Tag dedizierter Sales-Mitarbeiter',
            'Leadlisten, Onboarding & Infrastruktur – komplett inklusive',
            'Kanal: Telefon + E-Mail Follow-ups',
            'Tägliches Reporting + wöchentlicher Feedback-Call',
            'LeadGenies-App: Übersicht & Insights',
            'Ziel: 10–18 qualifizierte Termine/Monat'
          ],
          bestFor: 'Bestes Preis-Leistungs-Verhältnis',
          cta: 'Beratungsgespräch buchen'
        },
        {
          name: 'Starter Pro',
          duration: 'Ab 3 Monate',
          price: '€5.499',
          priceNote: '/Monat · alles inklusive',
          dailyPrice: 'Ab €42/Stunde',
          features: [
            '6 Stunden/Tag dedizierter Sales-Mitarbeiter',
            'Leadlisten, Onboarding & Infrastruktur – komplett inklusive',
            'Kanal: Telefon + E-Mail + LinkedIn Outreach',
            'Tägliches Reporting + wöchentlicher Strategy-Call',
            'Sales-Coaching für Ihr Team (1x/Monat)',
            'Ziel: 18–30 qualifizierte Termine/Monat'
          ],
          bestFor: 'Maximaler Vertriebsaufbau',
          cta: 'Beratungsgespräch buchen'
        }
      ],
      bestForLabel: 'Ideal für:',
      roiNote: 'Rechenbeispiel Starter Plus: Bei 14 Terminen/Monat und Ø €5.000 Auftragswert mit 20% Abschlussrate = €14.000 Monatsumsatz-Potenzial. Alles inklusive – keine Extra-Kosten.',
      footerText: 'Sie sind bereits ein etabliertes Unternehmen mit eigenem Vertriebsteam? <a href="/" style="color: #4136b3; font-weight: 600;">Entdecken Sie unsere Enterprise-Pakete →</a>'
    },

    starterFaq: {
      title: 'Häufige Fragen zum Starter-Programm',
      categories: [
        {
          title: 'Über das Starter-Programm',
          items: [
            {
              question: 'Was unterscheidet das Starter-Programm von den regulären Paketen?',
              answer: 'Das Starter-Programm ist speziell für kleinere B2B-Unternehmen konzipiert. Alles ist inklusive – Onboarding, Leadlisten, Reporting. Sie zahlen einen Preis und bekommen den vollen Service. Bei unseren regulären Paketen richten wir uns an größere Unternehmen mit eigenem Vertriebsteam.'
            },
            {
              question: 'Ich habe noch kein Vertriebsteam – ist das ein Problem?',
              answer: 'Nein, genau dafür ist das Starter-Programm da. Wir übernehmen die Kaltakquise komplett und liefern Ihnen qualifizierte Termine. Sie müssen nur die Gespräche führen und abschließen.'
            },
            {
              question: 'Wie viele Termine kann ich realistisch erwarten?',
              answer: 'Je nach Paket zwischen 5-25 Termine pro Monat. Beim Starter Plus (unserem beliebtesten Paket) sind es typischerweise 8-15 qualifizierte Termine monatlich.'
            },
            {
              question: 'Warum eine Mindestlaufzeit von 3 Monaten?',
              answer: 'Der erste Monat dient dem Onboarding und der Kalibrierung. Ab Monat 2-3 sehen Sie die vollen Ergebnisse. Eine kürzere Laufzeit wäre nicht fair Ihnen gegenüber, da der volle Wert erst nach der Einarbeitungsphase sichtbar wird.'
            }
          ]
        },
        {
          title: 'Ablauf & Leistungen',
          items: [
            {
              question: 'Was ist alles im Preis enthalten?',
              answer: 'Alles: Onboarding, Gesprächsleitfaden-Entwicklung, DSGVO-konforme Leadlisten, tägliche Kaltakquise, Reporting und regelmäßige Feedback-Calls. Es gibt keine versteckten Zusatzkosten.'
            },
            {
              question: 'Wie schnell können wir starten?',
              answer: 'Nach dem Beratungsgespräch und Vertragsabschluss starten wir innerhalb von 7-10 Tagen mit dem Onboarding. Die ersten Anrufe erfolgen typischerweise in der zweiten Woche.'
            },
            {
              question: 'Kann ich später auf ein größeres Paket upgraden?',
              answer: 'Ja, absolut. Viele unserer Starter-Kunden wachsen mit uns und steigen auf unsere Enterprise-Pakete um. Wir begleiten Sie auf dem gesamten Weg.'
            },
            {
              question: 'Welche Branchen bedient ihr?',
              answer: 'B2B SaaS, IT-Dienstleistungen, Beratung, Agenturen, Professional Services – alle B2B-Branchen mit Auftragswerten ab €3.000.'
            }
          ]
        }
      ]
    },

    starterContact: {
      title: 'Bereit, Ihren Vertrieb zu starten?',
      subtitle: 'Lassen Sie uns in einem kurzen Gespräch klären, welches Starter-Paket am besten zu Ihnen passt. Unverbindlich und kostenlos.',
      formTitle: 'Kostenloses Beratungsgespräch anfragen'
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
      ctaText: 'Get Consultation'
    },

    // Hero
    hero: {
      title: 'Professional B2B Telemarketing Experts for Your Scalable Sales',
      subtitle: 'Your external telemarketing team. Our experienced sales professionals work 2-3 hours daily exclusively for you – from cold calling to CRM management. GDPR-compliant and without hiring risk.',
      cta: 'Get Free Consultation Now',
      belowText: 'For established B2B companies with <strong>ambitious growth goals</strong>',
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
      title: 'Is LeadGenies the right solution for you?',
      subtitle: 'We work with established B2B companies generating €20,000+ monthly revenue that want to systematically scale their sales. Our partners see appointment setting not as a stopgap measure, but as a strategic lever for predictable growth.',
      checklistTitle: 'Qualification Checklist',
      checklist: [
        'You have an established product with clear product-market fit.',
        'You or your sales team can and want to handle more qualified appointments.',
        'You are looking for a long-term partner, not a short-term "firefighter".'
      ],
      checklistFooter: 'Does this apply to you? Let\'s talk.',
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
      subtitle: 'Clear prices, no hidden costs. Choose the package that fits your growth.',
      description: 'Investment for established B2B companies:',
      packages: [
        {
          name: 'Growth',
          duration: 'From 3 months',
          price: '€3,499',
          priceNote: '/month · plus €1,999 onboarding',
          dailyPrice: 'From €80/hour',
          features: [
            '2 hours/day dedicated sales professional',
            'Channel: Phone outreach',
            'Daily reporting + weekly feedback call',
            'LeadGenies App: Daily overview & insights',
            'Lead lists available on request (separate)',
            'GDPR-compliant & professional',
            'Target: 8–15 qualified appointments/month'
          ],
          bestFor: 'Quick Start',
          cta: 'Book Qualification Call'
        },
        {
          name: 'Scale',
          duration: 'From 6 months',
          price: '€4,999',
          priceNote: '/month · onboarding included',
          dailyPrice: 'From €57/hour',
          savings: 'Recommended',
          features: [
            '3–4 hours/day dedicated sales professional',
            'Channel: Phone + all follow-up emails & tracking',
            'Highly customized reporting tailored to your needs',
            'LeadGenies App: Live tracking & Insights Plus',
            'Lead lists (up to 1,000/month), onboarding & infrastructure included',
            'Weekly target audience review & quality tracking',
            'Target: 15–30 qualified appointments/month'
          ],
          bestFor: 'Maximum Growth',
          cta: 'Book Qualification Call'
        },
        {
          name: 'Enterprise',
          duration: 'From 12 months',
          price: 'Custom',
          priceNote: 'Onboarding + strategy workshop included',
          features: [
            '5–6 hours/day dedicated sales professional',
            'Individual team onboarding with all tasks covered',
            'Full integration into your infrastructure & team',
            'LeadGenies App: Full access & priority support',
            'Unlimited verified leads incl. with ongoing quality reporting',
            'Target: 50+ qualified appointments/month'
          ],
          bestFor: 'Full Sales Power',
          cta: 'Schedule Introduction Call'
        }
      ],
      bestForLabel: 'Best for:',
      roiNote: 'Scale package example: At 20+ appointments/month = approx. €250 per qualified appointment. With avg. deal value of €15,000 and 20% close rate = €60,000+ monthly revenue potential.',
      footerText: 'This investment level is ideal for established B2B companies with €20,000+ monthly revenue. For growing companies without a sales team: <a href="/en/starter" style="color: #4136b3; font-weight: 600;">Discover our Starter Program →</a><br/><br/>Need lead lists separately? Through our partner <a href="https://www.lead-schmiede.de" target="_blank" rel="noopener" style="color: #4136b3; font-weight: 600;">Lead-Schmiede.de</a> you can get GDPR-compliant B2B lead lists from €1.50/lead.'
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
          image: '/mona-petersen.png',
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
    },

    // ===== STARTER PAGE TRANSLATIONS =====

    starterHeader: {
      menuItems: [
        { label: 'Process', href: '#how-it-works' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Guarantee', href: '#guarantee' },
        { label: 'Packages', href: '#pricing' },
        { label: 'Contact', href: '#contact' }
      ],
      ctaText: 'Free Consultation'
    },

    starterHero: {
      title: 'Professional B2B Cold Calling – Built for Growing Companies',
      subtitle: 'Great product but no big sales team yet? We handle your cold calling completely – including lead lists, onboarding, and reporting. One price, everything included.',
      cta: 'Free Consultation',
      belowText: 'For B2B companies looking to <strong>build their sales</strong>'
    },

    starterTrust: {
      title: 'Is the Starter Program Right for You?',
      subtitle: 'Our Starter Program is designed specifically for growing B2B companies that want to leverage professional cold calling without building an in-house SDR team.',
      checklistTitle: 'Perfect for you if:',
      checklist: [
        'Your company generates at least €5,000 monthly revenue.',
        'You have a B2B product or service and want to actively acquire new customers.',
        'Your average deal size is €3,000+ (ACV).',
        'You want to build a structured sales process – even without your own sales team.'
      ],
      checklistFooter: 'Sound like you? Let\'s talk.'
    },

    starterHowItWorks: {
      title: 'How We Get Started Together',
      subtitle: 'Your external sales team in 4 simple steps',
      steps: [
        {
          number: '01',
          title: 'Consultation Call',
          description: 'We learn about your company, product, and target audience. Together we define which Starter package fits best.'
        },
        {
          number: '02',
          title: 'Onboarding (Included)',
          description: 'We train our sales professional on your product, develop conversation scripts, and set up all processes – at no extra cost.'
        },
        {
          number: '03',
          title: 'Cold Calling Starts',
          description: 'Your dedicated sales professional begins daily outreach. You receive qualified appointments directly in your calendar.'
        },
        {
          number: '04',
          title: 'Growth & Optimization',
          description: 'Through regular reporting and feedback, we continuously optimize. Your pipeline grows predictably and sustainably.'
        }
      ]
    },

    starterPricing: {
      title: 'Starter Packages – Everything Included',
      subtitle: 'One price, no hidden costs. Onboarding, lead lists, and reporting – all included.',
      description: 'Investment for growing B2B companies:',
      packages: [
        {
          name: 'Starter',
          duration: 'From 3 months',
          price: '€2,999',
          priceNote: '/month · everything included',
          dailyPrice: 'From €68/hour',
          features: [
            '2 hours/day dedicated sales professional',
            'Lead lists, onboarding & infrastructure – fully included',
            'Channel: Phone outreach',
            'Weekly reporting',
            'GDPR-compliant & professional',
            'Target: 5–10 qualified appointments/month'
          ],
          bestFor: 'Start Selling',
          cta: 'Book Consultation'
        },
        {
          name: 'Starter Plus',
          duration: 'From 3 months',
          price: '€3,999',
          priceNote: '/month · everything included',
          dailyPrice: 'From €45/hour',
          savings: 'Recommended',
          features: [
            '4 hours/day dedicated sales professional',
            'Lead lists, onboarding & infrastructure – fully included',
            'Channel: Phone + email follow-ups',
            'Daily reporting + weekly feedback call',
            'LeadGenies App: Overview & insights',
            'Target: 10–18 qualified appointments/month'
          ],
          bestFor: 'Best Value',
          cta: 'Book Consultation'
        },
        {
          name: 'Starter Pro',
          duration: 'From 3 months',
          price: '€5,499',
          priceNote: '/month · everything included',
          dailyPrice: 'From €42/hour',
          features: [
            '6 hours/day dedicated sales professional',
            'Lead lists, onboarding & infrastructure – fully included',
            'Channel: Phone + email + LinkedIn outreach',
            'Daily reporting + weekly strategy call',
            'Sales coaching for your team (1x/month)',
            'Target: 18–30 qualified appointments/month'
          ],
          bestFor: 'Maximum Sales Growth',
          cta: 'Book Consultation'
        }
      ],
      bestForLabel: 'Best for:',
      roiNote: 'Starter Plus example: At 14 appointments/month with avg. €5,000 deal value and 20% close rate = €14,000 monthly revenue potential. Everything included – no extra costs.',
      footerText: 'Already an established company with your own sales team? <a href="/en" style="color: #4136b3; font-weight: 600;">Discover our Enterprise packages →</a>'
    },

    starterFaq: {
      title: 'Frequently Asked Questions about the Starter Program',
      categories: [
        {
          title: 'About the Starter Program',
          items: [
            {
              question: 'What makes the Starter Program different from regular packages?',
              answer: 'The Starter Program is designed specifically for smaller B2B companies. Everything is included – onboarding, lead lists, reporting. You pay one price and get the full service. Our regular packages are designed for larger companies with existing sales teams.'
            },
            {
              question: 'I don\'t have a sales team yet – is that a problem?',
              answer: 'No, that\'s exactly what the Starter Program is for. We handle cold calling completely and deliver qualified appointments. You just need to have the conversations and close deals.'
            },
            {
              question: 'How many appointments can I realistically expect?',
              answer: 'Depending on the package, between 5-25 appointments per month. With Starter Plus (our most popular package), you can typically expect 8-15 qualified appointments monthly.'
            },
            {
              question: 'Why a minimum commitment of 3 months?',
              answer: 'The first month is for onboarding and calibration. You\'ll see full results from month 2-3. A shorter period wouldn\'t be fair to you, as the full value only becomes visible after the ramp-up phase.'
            }
          ]
        },
        {
          title: 'Process & Services',
          items: [
            {
              question: 'What\'s included in the price?',
              answer: 'Everything: onboarding, script development, GDPR-compliant lead lists, daily cold calling, reporting, and regular feedback calls. There are no hidden additional costs.'
            },
            {
              question: 'How quickly can we start?',
              answer: 'After the consultation and contract signing, we begin onboarding within 7-10 days. First calls typically happen in the second week.'
            },
            {
              question: 'Can I upgrade to a larger package later?',
              answer: 'Yes, absolutely. Many of our Starter customers grow with us and move to our Enterprise packages. We support you every step of the way.'
            },
            {
              question: 'Which industries do you serve?',
              answer: 'B2B SaaS, IT services, consulting, agencies, professional services – all B2B industries with deal values starting at €3,000.'
            }
          ]
        }
      ]
    },

    starterContact: {
      title: 'Ready to Start Selling?',
      subtitle: 'Let\'s have a quick chat to figure out which Starter package fits you best. No commitment, completely free.',
      formTitle: 'Request Free Consultation'
    }
  }
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
