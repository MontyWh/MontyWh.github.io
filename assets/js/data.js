/* ============================================================================
   data.js — single source of truth for every piece of content on the site.
   Edit this file to update the site. No other file needs to change.

   Structure:
     siteData.profile     header, hero copy, contact links
     siteData.projects    portfolio cards (order = display order)
     siteData.skills      grouped skill lists
     siteData.experience  work timeline (newest first)
     siteData.education   qualifications (newest first)
   ========================================================================== */

const siteData = {

  /* ------------------------------------------------------------------ */
  /* PROFILE                                                            */
  /* ------------------------------------------------------------------ */
  profile: {
    name: "Montague Whishaw",
    role: "Audio Software Developer",
    location: "Bath, UK",

    // Short line under the name in the hero.
    tagline: "Building audio tools in C++ and JUCE, and interactive sound for games and immersive media.",

    // Hero paragraph. Keep to two or three sentences.
    intro:
      "Audio and Music Technology graduate from UWE Bristol, working at the point where DSP meets " +
      "playable, usable software. Recent work spans a JUCE plugin with a 3D-rendered interface, a VR " +
      "digital audio workstation prototype on Meta Quest 2, and an adaptive game soundtrack implemented " +
      "in Unity and FMOD.",

    // "About" section — array of paragraphs.
    // This is also where the wider background lives, so nothing from the full
    // CV is lost even though the rest of the site stays audio-focused.
    about: [
      "My route into software came through sound. Three years at UWE Bristol covered audio post-production, " +
      "audio for games, architectural acoustics and advanced technologies, and every module pushed me further " +
      "toward writing the tools rather than only using them.",

      "The focus sits in C++ and C with JUCE, DSP, Unity with C#, FMOD and Max/MSP, building audio tools and " +
      "systems for interactive and embedded-style environments. Day to day that means real-time processing, " +
      "synthesis and effects-based workflows across game audio, immersive media and live sound, applying DSP " +
      "fundamentals such as filtering and spectral manipulation. FFT is the area I am actively developing.",

      "Alongside the code sits a working knowledge of the studio: Pro Tools, Reaper, Logic, MuseScore, Fender " +
      "Studio, surround formats and ambisonics for immersive delivery. I have run sound for live theatre on " +
      "Q-Lab, volunteered on the AV and livestream side of the Audio Developer Conference, and delivered a " +
      "full game soundtrack inside a jam weekend.",

      "The wider background is broader than audio and worth stating plainly, because most of it is where the " +
      "practical skills came from. Three years across hospitality at Lime Hospitality, Pizza Express, " +
      "Sainsbury's and Boom Battle Bar taught me pace, service standards and composure under genuine pressure. " +
      "Nine weeks at Camp America combined cabin care for groups of children with theatre sound and one-to-one " +
      "guitar coaching. In Costa Rica with Raleigh International I helped build a school classroom, taught " +
      "English, and led a peer team through a 17-day mountain trek on outdated maps, picking up five award " +
      "nominations including Best Team Player.",

      "I founded the Society of Musicians at UWE and grew it from 100 sign-ups into an active core membership " +
      "with a committee structure built to outlast me. I now co-host community socials with CircleUp in Bath. " +
      "Outside all of that I play electric guitar to Rockschool Grade 7, 5-string bass, synthesisers, drum " +
      "machines and samplers, jazz piano at Grade 1, and spend time sailing, canoeing, hiking and mountaineering."
    ],

    // Contact and profile links. `primary: true` pins one to the hero.
    links: [
      { label: "Email",    value: "monty.whishaw@gmail.com", href: "mailto:monty.whishaw@gmail.com", primary: true },
      { label: "GitHub",   value: "github.com/MontyWh",      href: "https://github.com/MontyWh" },
      { label: "LinkedIn", value: "linkedin.com/in/montaguewh", href: "https://www.linkedin.com/in/montaguewh/" }
    ],

    // CV downloads. `primary` is the button in the hero, `secondary` sits in
    // the About and Contact sections for anyone who wants the whole picture.
    cv: {
      // `filename` is what the file is called once it lands in someone's
      // Downloads folder, so it stays identifiable away from the site.
      primary: {
        label: "Download CV",
        href: "assets/files/montague-whishaw-audio-cv.pdf",
        filename: "Montague Whishaw - Audio Software CV.pdf",
        note: "Audio software focus, two pages"
      },
      secondary: {
        label: "Full background CV",
        href: "assets/files/montague-whishaw-full-cv.pdf",
        filename: "Montague Whishaw - Full CV.pdf",
        note: "Every role and qualification, including work outside audio"
      }
    },

    // Optional headshot. Set to a path such as "assets/img/portrait.jpg"
    // to replace the monogram placeholder. Leave null to keep the monogram.
    portrait: null,

    // Availability note shown in the contact section. Set to null to hide.
    availability: "Open to junior audio software roles, placements and freelance DSP work. UK based, happy to travel or work remotely."
  },

  /* ------------------------------------------------------------------ */
  /* PROJECT FILTERS                                                    */
  /* The buttons above the project grid. Each string must exactly match */
  /* a tag used on at least one project, or that button shows nothing.  */
  /* Set to null to auto-generate a button for every tag in use.        */
  /* ------------------------------------------------------------------ */
  filterTags: [
    "C++", "JUCE", "DSP", "Unity", "C#", "FMOD",
    "Max/MSP", "Spatial Audio", "JavaScript", "Pro Tools"
  ],

  /* ------------------------------------------------------------------ */
  /* PROJECTS                                                           */
  /* Each project: title, year, blurb, role, detail[], tags[], links[]  */
  /* `featured: true` shows the card at full width.                     */
  /* Add a `media` path (image) to show a thumbnail.                    */
  /* ------------------------------------------------------------------ */
  projects: [
    {
      id: "vr-daw",
      title: "Immersive VR Digital Audio Workstation",
      year: "2025",
      role: "Developer and sound designer",
      featured: true,
      blurb:
        "Final year project. A digital audio workstation rebuilt for virtual reality, prototyped in Unity " +
        "for Meta Quest 2, exploring intuitive 3D workflows beyond traditional 2D DAWs.",
      detail: [
        "Spatialised playback controls implemented in C# via the Meta XR SDK.",
        "Haptic feedback on the controllers for edit points and transport states.",
        "A vertical timeline interface designed for arm reach rather than mouse travel."
      ],
      tags: ["Unity", "C#", "Spatial Audio", "VR", "Meta Quest 2"],
      links: [
        // { label: "Repository", href: "https://github.com/MontyWh/..." },
        // { label: "Demo video", href: "" }
      ],
      media: null
    },

    {
      id: "gramophone-plugin",
      title: "Virtual Gramophone Audio Plugin",
      year: "2024",
      role: "Plugin developer and UI artist",
      featured: true,
      blurb:
        "A JUCE and C++ audio plugin with a photoreal gramophone interface. DSP handles the character " +
        "processing while the front end is a Blender-modelled 3D scene baked into the GUI.",
      detail: [
        "Signal path written in C++ with JUCE, covering the filtering and saturation stages.",
        "Textures and materials authored in Blender, then rendered down for the plugin interface.",
        "Built as a study in giving a plugin a physical identity without losing control precision."
      ],
      tags: ["C++", "JUCE", "DSP", "Blender", "Plugin UI"],
      links: [],
      media: null
    },

    {
      id: "bobaquarium",
      title: "BobaQuarium — Global Game Jam 2025",
      year: "2025",
      role: "Composer and audio programmer",
      blurb:
        "Original adaptive score and full sound design for a jam game, implemented in Unity with FMOD " +
        "so the music responds to gameplay state rather than looping behind it.",
      detail: [
        "Event-driven interactive music and real-time DSP behaviours that react to gameplay.",
        "Adaptive themes composed, edited and mixed in Logic, Studio One and MuseScore.",
        "Parameter automation and clean integration workflows, refined against playtests.",
        "Delivered to a fixed deadline inside the jam window."
      ],
      tags: ["Unity", "C#", "FMOD", "Adaptive Audio", "Composition"],
      links: [],
      media: null
    },

    {
      id: "maxmsp-instruments",
      title: "Max/MSP Virtual Instruments",
      year: "2024",
      role: "Instrument designer",
      blurb:
        "A set of playable instruments built from scratch in Max/MSP: a software synthesiser, a sampler " +
        "and a drum machine, each driven by custom microelectronic hardware for real-time control.",
      detail: [
        "Synthesis, sampling and sequencing engines built as separate, hand-wired patches.",
        "Custom microcontroller devices built to manipulate audio parameters live.",
        "Focus on latency and playability rather than feature count."
      ],
      tags: ["Max/MSP", "Synthesis", "Sampling", "Microcontrollers"],
      links: [],
      media: null
    },

    {
      id: "chernobyl-redesign",
      title: "Chernobyl Scene Sound Redesign",
      year: "2024",
      role: "Sound designer and re-recording mixer",
      blurb:
        "Complete sound redesign of the trial scene from the HBO series Chernobyl, stripped to picture and " +
        "rebuilt in surround with new foley, dialogue edit and atmospheres. Graded at 2:1.",
      detail: [
        "Full foley pass recorded and edited to picture.",
        "Dialogue edit and cleanup, then balanced into a surround mix.",
        "Atmospheres layered for room tone and dread rather than volume."
      ],
      tags: ["Pro Tools", "Surround", "Foley", "Post-Production"],
      links: [],
      media: null
    },

    {
      id: "threejs-av",
      title: "Browser Audio and AV Experiments",
      year: "2024",
      role: "Developer",
      blurb:
        "Web-based audio and AV work using JavaScript and Three.js, connecting real-time visuals to " +
        "audio analysis in the browser.",
      detail: [
        "Three.js scenes driven by live audio parameters.",
        "Written alongside coursework in advanced audio technologies."
      ],
      tags: ["JavaScript", "Three.js", "Web Audio", "HTML/CSS"],
      links: [],
      media: null
    }
  ],

  /* ------------------------------------------------------------------ */
  /* SKILLS                                                             */
  /* ------------------------------------------------------------------ */
  skills: [
    {
      group: "Audio software development",
      note: "Where most of my time goes.",
      items: ["C++", "C", "JUCE", "DSP", "Unity", "C#", "FMOD", "Max/MSP", "Git"]
    },
    {
      group: "Real-time audio",
      note: "The processing side.",
      items: ["Filtering", "Spectral manipulation", "Synthesis", "Effects chains", "Parameter automation", "FFT (developing)"]
    },
    {
      group: "Web and data",
      note: "Supporting tools and interfaces.",
      items: ["JavaScript", "Three.js", "HTML", "CSS", "JSON", "Ruby on Rails", "Blender"]
    },
    {
      group: "Audio engineering",
      note: "Studio and post-production.",
      items: ["Pro Tools", "Reaper", "Logic", "Studio One", "MuseScore", "Fender Studio", "Q-Lab"]
    },
    {
      group: "Immersive and spatial",
      note: "Formats and delivery.",
      items: ["5.1.2 and 7.1.4", "Ambisonics", "VR audio", "Haptics", "Mixing desks"]
    },
    {
      group: "Working practice",
      note: "How I operate on a team.",
      items: ["Agile", "Technical documentation", "Live sound support", "Discord, Zoom, Gather Town"]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* EXPERIENCE — newest first.                                         */
  /* `highlight: true` marks industry-relevant roles for the filter.    */
  /* ------------------------------------------------------------------ */
  experience: [
    {
      role: "Student, Step-Up Work Experience",
      org: "Amazon",
      place: "UK",
      period: "June 2026",
      highlight: true,
      points: [
        "Completed ten CPD-accredited work-readiness modules.",
        "Applied them in AI labs, team challenges and structured mentor shadowing."
      ]
    },
    {
      role: "Volunteer and Social Committee Member",
      org: "CircleUp",
      place: "Bath, UK",
      period: "January 2026 – present",
      highlight: false,
      points: [
        "Community mascot for Bath, creating the high-energy, inclusive environments that turn digital subscribers into active real-world communities.",
        "Co-host Friday night pub socials and break the ice for new or solo attendees to ensure immediate comfort and safety."
      ]
    },
    {
      role: "Volunteer",
      org: "Audio Developer Conference",
      place: "Bristol, UK",
      period: "November 2024 and November 2025",
      highlight: true,
      points: [
        "Supported hybrid operations, troubleshooting AV issues and livestream pipeline connectivity across Discord, Zoom and Gather Town.",
        "Onsite audio and IT support for speakers, covering hardware setup and livestream monitoring.",
        "Networked with audio programmers, speakers and exhibitors to learn current tools and production workflows.",
        "Cloakroom and lanyard logistics for over 2,000 guests and speakers."
      ]
    },
    {
      role: "Intern",
      org: "Government Digital Service",
      place: "The Whitechapel Building, London, UK",
      period: "June 2025 – August 2025",
      highlight: true,
      points: [
        "Produced technical guidance and presentations for automating forms processing across UK government departments.",
        "Worked with cross-functional teams to meet government documentation standards and user needs.",
        "Self-directed learning in web development, including Ruby on Rails."
      ]
    },
    {
      role: "Assistant Theatre Sound Engineer",
      org: "The Great Gatsby, Revolution",
      place: "Bristol, UK",
      period: "May 2025",
      highlight: true,
      points: [
        "Ran SFX and video cueing in Q-Lab for a live production of around 80 audience members.",
        "Diagnosed and resolved equipment failures before curtain to protect the performance."
      ]
    },
    {
      role: "Sound Designer",
      org: "Global Game Jam 2025, UWE Bristol",
      place: "Bristol, UK",
      period: "January 2025 – February 2025",
      highlight: true,
      points: [
        "Composed original adaptive themes for the game BobaQuarium.",
        "Programmed the adaptive soundtrack in Unity, C# and FMOD with DSP for gameplay response.",
        "Managed recording, mixing and synthesis across the full soundtrack."
      ]
    },
    {
      role: "Cabin Counsellor, Guitar Coach and Assistant Theatre Sound Engineer",
      org: "Camp America",
      place: "USA",
      period: "June 2024 – August 2024",
      highlight: true,
      points: [
        "Combined theatre sound operation with one-to-one guitar coaching across a nine-week contract.",
        "Resolved live failures mid-performance when guitar leads and XLRs dropped out.",
        "Coordinated daily care for cabins of 8 to 12 campers alongside technical duties."
      ]
    },
    {
      role: "Bar Staff",
      org: "Lansdown Cricket Club",
      place: "Bath, UK",
      period: "March 2026 – present",
      highlight: false,
      points: [
        "Personalised service for around 50 members and visitors daily while managing high-volume orders.",
        "Inventory, table service and front-of-house upkeep."
      ]
    },
    {
      role: "Floor Staff, Cleaner and Game Host",
      org: "Boom Battle Bar",
      place: "Bath, UK",
      period: "November 2025 – March 2026",
      highlight: false,
      points: [
        "Hosted competitive social games and delivered hospitality for 10 to 70 guests per shift.",
        "Trusted with high-demand Saturday and late-night closing shifts."
      ]
    },
    {
      role: "Hospitality Staff and Kitchen Porter",
      org: "Lime Hospitality",
      place: "Bath, UK",
      period: "June 2021 – May 2024",
      highlight: false,
      points: [
        "Service across Bath Rugby, Bailbrook Hotel and Bath and Chepstow Racecourses.",
        "Weddings and banquets for 20 to 150 guests, and up to 500 daily covers at Bath Spa University."
      ]
    },
    {
      role: "Front-of-House and Back-of-House Staff",
      org: "Pizza Express",
      place: "UK",
      period: "August 2021 – December 2022",
      highlight: false,
      points: [
        "High-volume multi-branch service as Food Runner and Kitchen Porter."
      ]
    },
    {
      role: "Trading Assistant",
      org: "Sainsbury's PLC",
      place: "UK",
      period: "December 2021 – May 2022",
      highlight: false,
      points: [
        "Stock rotation, date code checking and shelf replenishment, plus checkout support at peak."
      ]
    },
    {
      role: "Society Founder and Committee Member",
      org: "Society of Musicians, UWE Bristol",
      place: "Bristol, UK",
      period: "October 2022 – August 2025",
      highlight: true,
      points: [
        "Founded and presided over the society, growing 100 sign-ups into an active core membership.",
        "Set up the committee structure and Discord system for long-term continuity.",
        "Managed a calendar of socials, professional gigs and open-mic events.",
        "Led collaborative rock jams on guitar and bass."
      ]
    },
    {
      role: "Volunteer",
      org: "Raleigh International",
      place: "Costa Rica",
      period: "July 2022 – August 2022",
      highlight: false,
      points: [
        "Built a classroom for a rural indigenous school and delivered English classes.",
        "Led a peer team through a 17-day mountain trek, navigating on outdated maps.",
        "Five award nominations including Best Team Player and Most Positive Team Person."
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* EDUCATION                                                          */
  /* ------------------------------------------------------------------ */
  education: [
    {
      qualification: "BSc (Hons) Audio and Music Technology",
      institution: "University of the West of England, Bristol",
      period: "2022 – 2025",
      points: [
        "Coursework in audio post-production, audio for games, architectural acoustics and advanced technologies.",
        "Developed bespoke audio and AV software using C++ with JUCE, Three.js and C#, integrating DSP and synthesis.",
        "Built virtual instruments in Max/MSP with custom microcontroller control surfaces.",
        "Applied VR development and spatial audio techniques to fully immersive experiences.",
        "Composed original scores drawing on advanced music theory, guitar, bass and synthesisers."
      ]
    },
    {
      qualification: "BTEC Level 3 Music Performing, A-Level Music Technology, BTEC Level 3 IT",
      institution: "St Brendan's Sixth Form College, Bristol",
      period: "2019 – 2021",
      points: []
    }
  ],

  /* ------------------------------------------------------------------ */
  /* CERTIFICATIONS AND INTERESTS                                       */
  /* ------------------------------------------------------------------ */
  certifications: [
    "BECTU Starting Safely certification (ScreenSkills)",
    "Duke of Edinburgh Bronze Award"
  ],

  interests: [
    "Electric guitar, Rockschool Grade 7 and above",
    "5-string bass, synthesisers, drum machines and samplers",
    "Jazz piano, Grade 1",
    "Sailing, canoeing, hiking and mountaineering"
  ]
};
