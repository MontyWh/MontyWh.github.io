/* ============================================================================
   data.js — single source of truth for every piece of content on the site.
   Edit this file to update the site. No other file needs to change.

   Structure:
     siteData.profile               header, hero copy, contact links, single CV
     siteData.projects              main Software / IT / Dev portfolio cards
     siteData.backgroundProjects    secondary Audio / Hardware / Creative cards
     siteData.skills                grouped skill lists (Dev & IT first)
     siteData.experience            core Tech, IT & Digital experience
     siteData.backgroundExperience  hospitality, community & leadership roles
     siteData.education             qualifications (newest first)
   ========================================================================== */

const siteData = {

  /* ------------------------------------------------------------------ */
  /* PROFILE                                                            */
  /* ------------------------------------------------------------------ */
  profile: {
    name: "Montague Whishaw",
    role: "Software Development, IT & Cybersecurity",
    location: "Bath, UK",

    // Short line under the name in the hero.
    tagline: "Developing software in C++, C#, JavaScript and Ruby, alongside IT systems support, technical documentation and cybersecurity.",

    // Hero paragraph.
    intro:
      "Recent BSc (Hons) Audio and Music Technology graduate from UWE Bristol, seeking a role in a technical team " +
      "with a strong teamworking and training ethic. Special focus in software development (C++/C with JUCE, C#/Unity, " +
      "JavaScript/Three.js, Ruby on Rails), DSP, IT troubleshooting, and interactive/embedded-style environments.",

    // "About" section — array of paragraphs combining everything from both CVs (minus excluded roles).
    about: [
      "I am a recent graduate in Audio and Music Technology from the University of the West of England (UWE Bristol), " +
      "looking to contribute and develop my existing skills in software development, IT systems, and cybersecurity within " +
      "a team that values collaboration and training.",

      "My software development and web toolkit spans C++ and C (JUCE), DSP, Unity/C#, FMOD, Max/MSP, JavaScript (Three.js), " +
      "HTML/CSS, JSON, Ruby on Rails, and Blender. I have built bespoke desktop plugins, web applications, and real-time " +
      "systems, applying DSP fundamentals such as filtering and spectral manipulation, while actively developing my skills in FFT.",

      "On the IT, documentation, and operations side, I interned with the UK Government Digital Service (GDS) producing " +
      "technical guidance for automating forms processing across government departments, completed ten CPD-accredited " +
      "modules in AI labs and team challenges with Amazon's Step-Up programme, and supported hybrid AV/IT operations " +
      "and livestream pipelines across Discord, Zoom, and Gather Town at the Audio Developer Conference.",

      "In my wider background, I have strong studio and spatial audio experience (Pro Tools, Reaper, Logic, Studio One, " +
      "MuseScore, Fender Studio, Q-Lab, mixing desks, 5.1.2/5.1.4/7.1.2/7.1.4 surround formats, and ambisonics). " +
      "Beyond technology, I founded and presided over UWE's Society of Musicians, serve on the Bath social committee for " +
      "CircleUp, work front-of-house at Lansdown Cricket Club, and led a 17-day mountain trek in Costa Rica with Raleigh International."
    ],

    // Contact and profile links.
    links: [
      { label: "Email",    value: "monty.whishaw@gmail.com",    href: "mailto:monty.whishaw@gmail.com", primary: true },
      { label: "GitHub",   value: "github.com/MontyWh",         href: "https://github.com/MontyWh" },
      { label: "LinkedIn", value: "linkedin.com/in/montaguewh", href: "https://www.linkedin.com/in/montaguewh/" }
    ],

    // Single CV placeholder (TBC). Replace href once your new CV PDF is exported.
    cv: {
      label: "Download CV (TBC)",
      href: "#contact", // Placeholder until new PDF is placed in assets/files/
      filename: "",
      note: "Updated CV PDF coming soon"
    },

    portrait: null,

    availability: "Open to junior software developer, IT support, QA, and cybersecurity roles. Based in Bath/Bristol, UK — available for on-site, hybrid, or remote work."
  },

  /* ------------------------------------------------------------------ */
  /* PROJECT FILTERS (Applies to Main Software & Technical Projects)    */
  /* ------------------------------------------------------------------ */
  filterTags: [
    "C++", "C#", "JavaScript", "Three.js", "JUCE", "Unity", "DSP", "FMOD", "HTML/CSS"
  ],

  /* ------------------------------------------------------------------ */
  /* MAIN PROJECTS (Software Development & Technical)                   */
  /* ------------------------------------------------------------------ */
  projects: [
    {
      id: "gramophone-plugin",
      title: "Virtual Gramophone Audio Plugin (C++ / JUCE)",
      year: "2024",
      role: "Software Developer & UI Designer",
      featured: true,
      blurb:
        "Bespoke desktop audio software plugin developed in C++ using the JUCE framework, integrating real-time " +
        "DSP and synthesis with a custom 3D-modelled graphical user interface.",
      detail: [
        "Signal path written in C++ with JUCE, applying real-time DSP fundamentals including filtering and saturation.",
        "Created custom textures and materials for 3D models in Blender to build the virtual gramophone plugin GUI."
      ],
      tags: ["C++", "JUCE", "DSP", "Blender", "Plugin UI"],
      links: [],
      media: null
    },

    {
      id: "vr-daw",
      title: "Immersive VR Digital Audio Workstation",
      year: "2025",
      role: "C# / Unity Developer",
      featured: true,
      blurb:
        "Final Year Project prototyping an immersive VR Digital Audio Workstation in Unity (C#) for a Meta Quest 2, " +
        "exploring intuitive 3D workflows beyond traditional 2D DAWs.",
      detail: [
        "Implemented spatialised C# playback controls via the Meta XR SDK.",
        "Integrated controller haptic feedback and a vertical 3D timeline interface."
      ],
      tags: ["C#", "Unity", "VR", "Spatial Audio", "Meta Quest 2"],
      links: [],
      media: null
    },

    {
      id: "bobaquarium",
      title: "BobaQuarium — Adaptive Game System (Global Game Jam)",
      year: "2025",
      role: "Audio Programmer & Sound Designer",
      featured: false,
      blurb:
        "Built and integrated an event-driven, adaptive system in Unity (C#) and FMOD that reacts dynamically to live gameplay.",
      detail: [
        "Programmed real-time DSP behaviours, playback controls, and parameter automation in C# and FMOD.",
        "Refined clean integration workflows based on playtests under a fixed jam deadline.",
        "Composed, recorded, edited, and mixed the full original adaptive soundtrack using Logic, Studio One, and MuseScore."
      ],
      tags: ["C#", "Unity", "FMOD", "DSP", "Adaptive Audio"],
      links: [],
      media: null
    },

    {
      id: "threejs-av",
      title: "Bespoke Web AV & Three.js Software",
      year: "2024",
      role: "Software Developer",
      featured: false,
      blurb:
        "Interactive browser-based audiovisual software built with JavaScript (Three.js), HTML/CSS, and JSON.",
      detail: [
        "Connected real-time DSP and audio synthesis analysis to 3D browser graphics in Three.js.",
        "Developed as part of advanced software and creative computing coursework at UWE Bristol."
      ],
      tags: ["JavaScript", "Three.js", "HTML/CSS", "DSP"],
      links: [],
      media: null
    }
  ],

  /* ------------------------------------------------------------------ */
  /* BACKGROUND PROJECTS (Hardware, Instruments & Post-Production)      */
  /* ------------------------------------------------------------------ */
  backgroundProjects: [
    {
      id: "maxmsp-instruments",
      title: "Microelectronics & Max/MSP Virtual Instruments",
      year: "2024",
      role: "Hardware & Instrument Designer",
      blurb:
        "Built virtual instruments in Max/MSP—including a software synthesiser, sampler, and drum machine—paired " +
        "with custom microelectronic hardware devices for real-time parameter control.",
      detail: [
        "Engineered custom microcontroller devices to manipulate software audio parameters in real time.",
        "Designed synthesis, sampling, and drum machine patches for embedded-style and interactive workflows."
      ],
      tags: ["Microcontrollers", "Max/MSP", "Hardware", "Synthesis"],
      links: []
    },

    {
      id: "chernobyl-redesign",
      title: "Chernobyl HBO Series Scene Sound Redesign",
      year: "2024",
      role: "Sound Engineer & Designer",
      blurb:
        "Engineered a complex surround soundscape redesign of the HBO Chernobyl trial scene, achieving a 2:1 grade.",
      detail: [
        "Utilised surround sound (5.1.4/7.1.2 & 5.1.2/7.1.4), dialogue editing, and custom foley recording in Pro Tools.",
        "Blended music composition with SFX and atmospheric layers."
      ],
      tags: ["Pro Tools", "Surround Sound", "Foley", "Post-Production"],
      links: []
    }
  ],

  /* ------------------------------------------------------------------ */
  /* SKILLS                                                             */
  /* ------------------------------------------------------------------ */
  skills: [
    {
      group: "Software & Web Development",
      note: "Core programming languages, frameworks and data formats.",
      items: ["C++", "C", "JUCE", "C#", "Unity", "JavaScript (Three.js)", "Ruby on Rails", "HTML/CSS", "JSON", "Git"]
    },
    {
      group: "IT, Documentation & Collaboration",
      note: "Systems support, workflows and enterprise tooling.",
      items: ["Technical Documentation (PDF/Presentation)", "Forms Processing Automation", "Agile Environments", "AV & Livestream Troubleshooting", "Microsoft Office / 365", "Discord, Zoom & Gather Town"]
    },
    {
      group: "Real-Time DSP & Interactive Systems",
      note: "Signal processing and middleware.",
      items: ["DSP", "Filtering & Spectral Manipulation", "FFT (Developing)", "FMOD", "Max/MSP", "Synthesis & Effects Chains", "Parameter Automation"]
    },
    {
      group: "Background: Audio, Media & Hardware",
      note: "Studio software, 3D UI, surround formats and hardware.",
      items: ["Microcontrollers", "Blender (3D UI)", "Pro Tools", "Reaper", "Logic", "Studio One / Fender Studio", "MuseScore", "Q-Lab", "Mixing Desks", "5.1.2 / 5.1.4 / 7.1.2 / 7.1.4 Surround", "Ambisonics", "VR & Haptics"]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* CORE TECHNICAL & IT EXPERIENCE — newest first                      */
  /* ------------------------------------------------------------------ */
  experience: [
    {
      role: "Student, Step-Up Work Experience",
      org: "Amazon",
      place: "UK",
      period: "June 2026",
      highlight: true,
      points: [
        "Gained practical work-readiness through ten CPD-accredited modules and applied them in AI labs, team challenges, and structured mentor shadowing across Amazon's fast-paced environment.",
        "Developed refined abilities to strengthen innovation, widen access to digital skills, and collaborate in technical teams."
      ]
    },
    {
      role: "Volunteer (IT, AV & Operations)",
      org: "Audio Developer Conference (ADC)",
      place: "Bristol, UK",
      period: "Nov 2024, Nov 2025 & Nov 2026",
      highlight: true,
      points: [
        "Supported hybrid operations, providing onsite audio and IT support for speakers, including hardware setup, livestream pipeline monitoring, and troubleshooting across Discord, Zoom, and Gather Town.",
        "Coordinated safe transport of audio equipment between rooms under tight schedules and oversaw cloakroom and lanyard logistics for over 2,000 guests and speakers.",
        "Acted as a primary point of contact at onsite information hubs and networked with audio programmers, speakers, and exhibitors to learn current tools and production workflows."
      ]
    },
    {
      role: "Intern",
      org: "UK Government Digital Service (GDS)",
      place: "The Whitechapel Building, London, UK",
      period: "June 2025 – August 2025",
      highlight: true,
      points: [
        "Produced clear technical guidance and presentations for automating forms processing across UK government departments.",
        "Worked with cross-functional teams to ensure technical documentation met government standards and user needs.",
        "Completed self-directed learning and development in webpage creation (Ruby on Rails, etc.) and forms processing."
      ]
    },
    {
      role: "Sound Designer & Audio Programmer",
      org: "Global Game Jam 2025, UWE Bristol",
      place: "Bristol, UK",
      period: "January 2025 – February 2025",
      highlight: true,
      points: [
        "Built and integrated an adaptive game-audio system in Unity (C#) with FMOD, implementing event-driven interactive music and real-time DSP behaviours for the game 'BobaQuarium'.",
        "Applied audio programming techniques focused on real-time playback control, parameter automation, and clean integration workflows refined through playtests.",
        "Composed, recorded, edited, and mixed original adaptive themes using Logic, Studio One, and MuseScore under complex development cycles and a fixed deadline."
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* BACKGROUND EXPERIENCE (Excluded roles removed)                     */
  /* ------------------------------------------------------------------ */
  backgroundExperience: [
    {
      role: "Bar Staff",
      org: "Lansdown Cricket Club",
      place: "Bath, UK",
      period: "March 2026 – present",
      highlight: false,
      points: [
        "Cultivated a strong community atmosphere by providing personalised service and building rapport with around 50 club members and visitors daily while managing high-volume drink orders.",
        "Maintained operational efficiency and cleanliness by managing snack and beverage inventory, providing table service, and restocking and cleaning public areas."
      ]
    },
    {
      role: "Volunteer & Social Committee Member",
      org: "CircleUp",
      place: "Bath, UK",
      period: "January 2026 – present",
      highlight: false,
      points: [
        "Mascot for the local Bath community for CircleUp, creating the high-energy, inclusive environments necessary to convert digital subscribers into active, real-world communities.",
        "Co-host Friday night pub socials, interact in member chats, and actively break the ice for new or solo attendees to ensure immediate comfort and safety."
      ]
    },
    {
      role: "Society Founder & Former Committee Member",
      org: "Society of Musicians, UWE Bristol",
      place: "Bristol, UK",
      period: "October 2022 – August 2025",
      highlight: false,
      points: [
        "Founded and presided over the university's music society to unite the local music community, growing 100 sign-ups into an active core member base.",
        "Set up a committee structure and Discord communication system for event programming and long-term growth.",
        "Managed a consistent calendar of socials, professional gigs, and open-mic events, and led collaborative rock jams as guitarist and bassist."
      ]
    },
    {
      role: "Costa Rica Volunteer",
      org: "Raleigh International",
      place: "Costa Rica",
      period: "July 2022 – August 2022",
      highlight: false,
      points: [
        "Combined constructing a school classroom for a rural indigenous school with providing English classes and activities.",
        "Covered daily planning, task delegation, and safety briefings for a small team of peers in high-pressure environments.",
        "Led a team through a 17-day mountain trek using clear communication and adaptive problem-solving, navigating with outdated maps and adjusting routes when terrain features were missing or overgrown.",
        "Received five interpersonal skill award nominations, including Best Team Player and Most Positive Team Person."
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* EDUCATION                                                          */
  /* ------------------------------------------------------------------ */
  education: [
    {
      qualification: "BSc (Hons) Audio and Music Technology [J932]",
      institution: "University of the West of England (UWE Bristol)",
      period: "September 2022 – August 2025",
      points: [
        "Relevant coursework covered Advanced Technologies, Audio for Games, Architectural Acoustics, and Audio Post-Production.",
        "Developed bespoke audio/AV software and plugins using C++ (JUCE), Three.js, and C#, integrating DSP and synthesis.",
        "Created textures and materials for 3D models in Blender for a virtual gramophone audio plugin GUI.",
        "Prototyped an immersive VR Digital Audio Workstation in Unity for a Meta Quest 2 with spatialised C# playback controls, haptic feedback, and a 3D vertical timeline interface via the Meta XR SDK.",
        "Built virtual instruments in Max/MSP (synth, sampler, drum machine) with custom microelectronic devices for real-time parameter control.",
        "Engineered surround soundscapes (5.1.4/7.1.2) for film and games, including a Chernobyl HBO trial scene redesign (achieved a 2:1 grade), and composed original scores using Logic, MuseScore, and Fender Studio."
      ]
    },
    {
      qualification: "BTEC (Level 3) IT, A-Level Music Technology, BTEC (Level 3) Music Performing",
      institution: "St Brendan's Sixth Form College, Bristol",
      period: "September 2019 – July 2021",
      points: []
    }
  ],

  /* ------------------------------------------------------------------ */
  /* CERTIFICATIONS AND INTERESTS                                       */
  /* ------------------------------------------------------------------ */
  certifications: [
    "Amazon Step-Up: 10 CPD-Accredited Modules (AI Labs & Work Readiness)",
    "BECTU Starting Safely Certification (ScreenSkills)",
    "Duke of Edinburgh (Bronze)"
  ],

  interests: [
    "Performing electric guitar (Rockschool Grade 7+), 5-string bass guitar, synthesisers, drum machines, samplers, and jazz piano (Grade 1)",
    "Sailing, canoeing, hiking, and mountaineering"
  ]
};