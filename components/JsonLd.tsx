export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://kairosdesign.ro/#organization",
        name: "Kairos",
        alternateName: "Kairos Digital Agency",
        url: "https://kairosdesign.ro",
        logo: "https://kairosdesign.ro/logo.svg",
        image: "https://kairosdesign.ro/opengraph-image",
        description:
          "Agenție de web design, branding strategic și dezvoltare web ultra-performantă construită pe Next.js și React. Servicii digitale fără compromisuri.",
        email: "office@kairosdesign.ro",
        telephone: "+40700000000",
        priceRange: "€€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Iași",
          addressRegion: "Iași",
          addressCountry: "RO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 47.1585,
          longitude: 27.6014,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Iași",
          },
          {
            "@type": "Country",
            name: "România",
          },
          {
            "@type": "Place",
            name: "Uniunea Europeană",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        sameAs: [
          "https://instagram.com/kairosdesign.ro",
          "https://www.tiktok.com/@kairosdesign.ro?_r=1&_t=ZN-99jSG2kMltO",
          "https://github.com/adrianchelmu12/kairosdesign",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicii Digitale Kairos",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Design & UI/UX Avansat",
                description:
                  "Design de interfețe digitale moderne, mobile-first, prototipare Figma interactivă și sisteme de design scalabile.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Branding Strategic & Identitate Vizuală",
                description:
                  "Creare identitate de brand completă: logo, tipografie, paletă cromatică, ghid de stil și materiale vizuale distinctive.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dezvoltare Web Next.js & React",
                description:
                  "Inginerie web modernă folosind Next.js 16, TypeScript și Tailwind CSS pentru performanță 100/100, securitate și scalabilitate.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://kairosdesign.ro/#website",
        url: "https://kairosdesign.ro",
        name: "Kairos",
        description:
          "Transformăm viziuni ambițioase în experiențe digitale memorabile. Web design avansat, branding strategic și dezvoltare web ultra-performantă.",
        publisher: {
          "@id": "https://kairosdesign.ro/#organization",
        },
        inLanguage: "ro-RO",
      },
      {
        "@type": "FAQPage",
        "@id": "https://kairosdesign.ro/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Ce servicii oferă agenția Kairos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kairos oferă servicii complete de web design modern (UI/UX), dezvoltare web custom cu Next.js, React și TypeScript, branding strategic și identitate vizuală, precum și optimizare avansată pentru performanță și SEO.",
            },
          },
          {
            "@type": "Question",
            name: "Folosiți șabloane (templates) sau dezvoltați de la zero?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La Kairos nu folosim niciodată șabloane prefabricate sau teme WordPress copiate. Fiecare proiect este desenat și programat de la zero, adaptat exclusiv specificului afacerii tale pentru unicitate și performanță maximă.",
            },
          },
          {
            "@type": "Question",
            name: "Cât durează dezvoltarea unui proiect web cu Kairos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "În funcție de complexitate, o pagină de prezentare sau un landing page este livrat de regulă în 2-3 săptămâni, în timp ce o platformă digitală completă sau un site extins durează între 4 și 8 săptămâni.",
            },
          },
          {
            "@type": "Question",
            name: "Unde este localizată agenția Kairos și cum colaborați cu clienții?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kairos își are sediul în Iași, România, dar colaborează digital cu clienți din toată țara și la nivel internațional (Uniunea Europeană, SUA și global), printr-un proces transparent de lucru la distanță.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

