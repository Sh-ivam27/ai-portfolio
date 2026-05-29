export const portfolioData = {
    personal: {
      name: "Shivam Madan",
      tagline: "Computer Science Student · Builder · Problem Solver",
      bio: `I'm a 2nd-year Computer Science student at BITS Pilani, Hyderabad Campus, interested in building thoughtful digital products that solve real problems. My interests lie in full-stack development, AI/ML and Data Mining, with a focus on creating experiences that are both intuitive and functional.`,
      location: "BITS Pilani, Hyderabad Campus",
      email: {
        formal: "f20240137@hyderabad.bits.pilani.ac.in",
        informal: "shivammadan2277@gmail.com",
      },
      phone: "+91 8073863101",
      links: {
        github: "https://github.com/Sh-ivam27",
        linkedin: "https://www.linkedin.com/in/shivam-madan-64b000321/",
      },
    },
  
    education: [
      {
        institution: "BITS Pilani, Hyderabad Campus",
        degree: "B.E. Computer Science & Engineering",
        period: "2024 – Present",
        detail:
          "Currently in 2nd year at one of India's top engineering institutes. Engaged in core CS coursework including data structures, algorithms, object-oriented programming, and systems design.",
      },
      {
        institution: "Delhi Public School Whitefield, Bengaluru",
        degree: "Class XII – CBSE",
        period: "2022 – 2024",
        detail: "Completed senior secondary education with a focus on Science (PCM + Computer Science).",
      },
      {
        institution: "VIBGYOR HIGH SCHOOL Marathahalli, Bengaluru",
        degree: "Class X – ICSE",
        period: "Until 2022",
        detail: "Completed foundational schooling with strong academic performance across all subjects.",
      },
    ],
  
    skills: {
      languages: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
      frameworks: ["React", "Node.js", "Next.js"],
      tools: ["Git", "GitHub", "Figma", "VS Code"],
      areas: ["Frontend Development", "Full-Stack Development", "UI/UX Design", "REST APIs"],
    },
  
    projects: [
      {
        name: "ReFind",
        tagline: "College Thrift Store Platform",
        description:
          "A full-stack web platform designed to modernise the way college students buy and sell second-hand items. ReFind replaces the chaos of WhatsApp groups and informal channels with a structured, searchable marketplace tailored for campus life.",
        problem:
          "College students frequently buy and sell used items but rely on fragmented communication channels like WhatsApp groups, which are noisy, unorganised, and inefficient.",
        solution:
          "A dedicated online thrift store that gives students a clean interface to list items, browse by category, and connect with buyers/sellers — eliminating communication overhead.",
        tech: ["React", "Node.js", "JavaScript"],
        type: "Full-Stack Web App",
        status: "Completed",
        github: null,
        live: null,
      },
    ],
  
    experience: [
      {
        role: "Member",
        organisation: "DoPE – Department of Professional Events, BPHC",
        period: "2024 – Present",
        description:
          "Part of the core team responsible for artist bookings and coordination for BITS Pilani Hyderabad Campus's cultural fests (ATMOS & PEARL). Handled outreach and logistics for live performances and pronights.",
      },
      {
        role: "Member",
        organisation: "Embryo, BPHC",
        period: "2024 – Present",
        description:
          "Actively involved in curating and inviting motivational speakers and industry leaders for talks and sessions at campus, contributing to students' professional and personal development.",
      },
      {
        role: "Mentor",
        organisation: "SWMC – Student Welfare and Mentorship Committee, BPHC",
        period: "2024 – Present",
        description:
          "Mentoring junior students through their transition into BITS Pilani — offering academic guidance, campus navigation support, and personal mentorship.",
      },
      {
        role: "Registration Guide",
        organisation: "AUGSD – Academic Undergraduate Studies Division, BPHC",
        period: "2024 – Present",
        description:
          "Assisted with course registration processes, guiding students through academic procedures and ensuring a smooth enrolment experience each semester.",
      },
      {
        role: "Participant",
        organisation: "Smart India Hackathon (SIH)",
        period: "2024",
        description:
          "Competed in India's largest hackathon — a national-level 36-hour problem-solving competition — contributing technical solutions to real-world government and industry challenges.",
      },
    ],
  
    sampleQA: [
      { q: "What is ReFind?", a: "ReFind is a full-stack web platform I built to help college students buy and sell second-hand items on campus. It replaces messy WhatsApp groups with a clean, structured marketplace." },
      { q: "What college does Shivam attend?", a: "I study Computer Science at BITS Pilani, Hyderabad Campus — currently in my 2nd year." },
      { q: "What programming languages does Shivam know?", a: "I'm proficient in Python, C, C++, Java, JavaScript, and TypeScript, with hands-on experience in React and Node.js." },
      { q: "What clubs is Shivam part of?", a: "I'm active in DoPE (artist bookings for fests), Embryo (speaker series), SWMC (student mentoring), and AUGSD (registration guidance)." },
      { q: "Has Shivam participated in any hackathons?", a: "Yes — I participated in the Smart India Hackathon (SIH), India's largest national hackathon." },
      { q: "How can I contact Shivam?", a: "You can reach me at shivammadan2277@gmail.com or connect on LinkedIn and GitHub — links are in the Contact section." },
    ],
  };
  
  export type PortfolioData = typeof portfolioData;