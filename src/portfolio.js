/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paarth Pandey",
  title: "Hi all, I'm Paarth",
  subTitle: emoji(
    "A Certified Cybersecurity Professional by Google, AWS Cloud Practitioner, Former Intern @EGIS & Trend Micro and B.Tech Computer Science & Engineering Student @Malaviya National Institute of Technology, India. "
  ),
  resumeLink:
    "https://drive.usercontent.google.com/u/0/uc?id=1ZQt2p0grPqWK5W2r6UVASCQV3fbkp6Nd&export=download", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PaarthPandey10",
  linkedin: "https://www.linkedin.com/in/paarth-pandey-13779529b/",
  gmail: "paarthdxb@gmail.com",
  credly: "https://www.credly.com/users/paarth-pandey.6d3d510b/badges#credly",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I've Done So Far",
  subTitle: "DEDICATED TO CONTINUOUS LEARNING AND APPLYING MY SKILLS TO SOLVE REAL-WORLD SECURITY CHALLENGES.",
  skills: [
    emoji(
      "⚡ Google Certified Cybersecurity Professional with proven analytical and threat-mitigation skills."
    ),
    emoji(
      "⚡ AWS Certified Cloud Practitioner, skilled in securing cloud infrastructure and services."
    ),
    emoji(
      "⚡ Trend Micro XDR Certified, with practical experience in incident detection and response."
    ),
    emoji(
      "⚡ Hands-on security experience from internships at Trend Micro & Egis in network security and threat analysis."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 
  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Malaviya National Institute of Technology, Jaipur",
      logo: require("./assets/images/mnit-logo.png"),
      subHeader: "Bachelor of Technology - Computer Science & Engineering",
      duration: "August 2025 - June 2029",
      desc: "Pursuing my B.Tech in CSE from MNIT, a top-tier National Institute of Technology (NIT) in North India. My curriculum provides a strong foundation in computational theory, software engineering, and systems development.",
      descBullets: [
        "Core Coursework: Data Structures & Algorithms, Computer Networks, Operating Systems, Database Management Systems, and Cryptography.",
        "Actively involved as a member of the university's Cybersecurity Club (CRYX).",
        "Elected Class Representative for the CSE Batch of 2025-2029, liaising for 150+ students.",
        "Marketing Team Member for Sphinx'25 (Technical Fest) and Blitzschlag'26 (Cultural Fest)."
      ]
    },
    {
      schoolName: "JSS Private School, Dubai",
      logo: require("./assets/images/jss-logo.png"),
      subHeader: "High School Diploma - CBSE (Science Stream)",
      duration: "Graduated: March 2025",
      desc: "Completed my high school education with a strong focus on computer science and math, achieving 95.4% and 97.8% in Class 12 and Class 10 (CBSE) respectively.",
      descBullets: [
        "Studied foundational concepts in Python, SQL, Networking, and Cybersecurity.",
        "Received the 'Genius & Specialist Award' for academic excellence throughout high school.",
        "Active member of the Coding Club and won the intra-school cricket championship."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Threat Detection & Response (SOC/XDR)", // From 1-C
      progressPercentage: "80%" 
    },
    {
      Stack: "Ethical Hacking & Pentesting", // From 3-B/C (closer to B)
      progressPercentage: "60%"
    },
    {
      Stack: "Network & Cloud Security", // From 2-A/B
      progressPercentage: "55%"
    },
    {
      Stack: "Security Scripting (Python/Linux)", // From 4-just less than B
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Keep this false as per the template
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AVIT & Security Intern",
      company: "Egis Group",
      companylogo: require("./assets/images/egis-logo.png"),
      date: "July 2025 – August 2025",
      desc: "Gained hands-on experience in physical and network security frameworks, designing solutions for major infrastructure projects in the UAE & KSA.",
      descBullets: [
        "Studied SIRA, TDRA, and ADMCC security frameworks.",
        "Designed Wi-Fi heatmaps (Ekahau AI Pro) and mapped fiber-to-device connectivity.",
        "Interpreted CCTV placements from floorplans and designed network schematics."
      ]
    },
    {
      role: "Cyber Security Intern",
      company: "Trend Micro",
      companylogo: require("./assets/images/trendmicro-logo.png"),
      date: "May 2025 – June 2025",
      desc: "Worked as a certified Trend Vision One XDR professional in simulated threat environments, focusing on incident detection and response.",
      descBullets: [
        "Applied Zero Trust and Risk Analytics principles across endpoint, network, and cloud security scenarios.",
        "Gained hands-on experience with incident detection, analysis, and response using Trend Micro Vision One."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A SELECTION OF MY HANDS-ON TECHNICAL WORKS",
  projects: [
    {
      //image: require("./assets/images/dns-xdr-project.png"),
      projectName: "AI Usage in DNS ",
      projectDesc: "Authored a technical whitepaper on a simulated credential dumping attack, detailing the full incident response lifecycle using Trend Micro Vision One XDR and mapping TTPs to the MITRE ATT&CK framework.",
      footerLink: [
        {
          name: "Read the Whitepaper",
          url: "https://github.com/PaarthPandey10/whitepapers/blob/main/trend-micro-internship-2025/whitepaper-tm-internship-2025.pdf" // <-- IMPORTANT: Upload the PDF to GitHub and paste the link here
        }
      ]
    },
    {
      //image: require("./assets/images/google-cyber-logo.png"),
      projectName: "Google Cybersecurity Professional Portfolio",
      projectDesc: "A collection of projects and labs completed to earn the Google Cybersecurity Professional Certificate, demonstrating skills in SIEM, SQL, Linux, and incident response.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/PaarthPandey10/google-cybersecurity-portfolio"
        }
      ]
    },
    {
      //image: require("./assets/images/aws-labs-logo.png"),
      projectName: "AWS Cloud Practitioner Labs",
      projectDesc: "A repository of hands-on labs and projects demonstrating core AWS services, security principles, and cloud architecture, completed for the AWS CP certification.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/PaarthPandey10/cloud-practitioner-labs"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "My major certifications, hackathon achievements, and a portfolio of my continuous learning.",

  achievementsCards: [
    {
      title: "Certified Google Cybersecurity Professional",
      subtitle:
        "Completed Google's 8-course professional certificate, covering security models, SIEM tools, SQL, Python, and incident response.",
      image: require("./assets/images/google-logo.png"),
      imageAlt: "Google Cybersecurity Professional Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/5OVD0EJY7KUR" // <-- IMPORTANT: Add your Credly/Coursera link
        },
        {
          name: "View Portfolio",
          url: "https://github.com/PaarthPandey10/google-cybersecurity-portfolio"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Validated foundational knowledge of AWS cloud, services, architecture, and security principles.",
      image: require("./assets/images/aws-logo.png"),
      imageAlt: "AWS Certified Cloud Practitioner Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/06b9a04785eb45d58357c3be8ad60efd" // <-- IMPORTANT: Add your Credly link
        },
        {
          name: "View Labs",
          url: "https://github.com/PaarthPandey10/cloud-practitioner-labs"
        }
      ]
    },
    {
      title: "Trend Micro XDR Certified Professional",
      subtitle:
        "Certified in Trend Micro Vision One, with hands-on experience in incident detection, threat analysis, and XDR workflows.",
      image: require("./assets/images/trendmicro-logo.png"),
      imageAlt: "Trend Micro XDR Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://github.com/PaarthPandey10/certificates/blob/main/trend-vision-one-xdr-professional.pdf" // <-- IMPORTANT: Add your cert link
        }
      ]
    },
    {
      title: "Continuous Learning (15+ Certs)",
      subtitle:
        "A public repository of 15+ other certs from Duke University, Google, IIT Madras, Coursera, and more, covering C++, AI, and Data Science.",
      image: require("./assets/images/coursera-logo.png"), // A good generic logo for this
      imageAlt: "Continuous Learning Logo",
      footerLink: [
        {
          name: "View All Certifications",
          url: "https://github.com/PaarthPandey10/certificates" // <-- IMPORTANT: Link to your certs repo
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number1: "+91-637-884-9247",
  number2: "+971-52-945-1637",
  email_address: "paarthdxb@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
