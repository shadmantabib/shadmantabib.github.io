// Structured CV data — ported and updated from the LaTeX academic CV.
// Rendered generically by src/pages/cv.astro.

export type CVSection =
  | { title: string; type: "map"; contents: { name: string; value: string }[] }
  | { title: string; type: "list"; contents: string[] }
  | {
      title: string;
      type: "time_table";
      contents: {
        title?: string;
        institution?: string;
        year?: string;
        location?: string;
        description?: string[];
        items?: string[];
      }[];
    }
  | {
      title: string;
      type: "nested_list";
      contents: { title: string; items: string[] }[];
    };

export const cvPdf = "/assets/pdf/shadman_tabib_cv.pdf";

export const cv: CVSection[] = [
  {
    title: "General Information",
    type: "map",
    contents: [
      { name: "Full Name", value: "H.M. Shadman Tabib" },
      { name: "Email", value: "shadmantabib2002@gmail.com" },
      { name: "Phone", value: "+880-1880-198766" },
      { name: "Location", value: "Dhaka, Bangladesh" },
      { name: "Languages", value: "English, Bengali" },
    ],
  },
  {
    title: "Research Interests",
    type: "list",
    contents: [
      "<b>Health AI:</b> Medical imaging (cancer), multimodal/semi-supervised learning, BCI (epilepsy), bias-aware clinical decision support",
      "<b>Computer Vision:</b> Unsupervised detection/segmentation, bioimage segmentation, foundation models, real-time systems",
      "<b>Computational Biology:</b> Cryo-ET image analysis, connectomics segmentation, RNA task accuracy estimation",
    ],
  },
  {
    title: "Education",
    type: "time_table",
    contents: [
      {
        title: "Ph.D. in Computer Science",
        institution:
          "Siebel School of Computing and Data Science, University of Illinois Urbana-Champaign (UIUC)",
        year: "Aug 2026 – Present",
        location: "Urbana-Champaign, IL, USA",
        description: ["Incoming Ph.D. Student — admitted starting Fall 2026"],
      },
      {
        title: "B.Sc. in Computer Science and Engineering",
        institution: "Bangladesh University of Engineering and Technology (BUET)",
        year: "2022 – 2026",
        location: "Dhaka, Bangladesh",
        description: [
          "Graduated June 2026",
          "Thesis Supervisors: Dr. M. Sohel Rahman, Dr. Md. Shamsuzzoha Bayzid",
          "CGPA: 3.88 / 4.00",
        ],
      },
      {
        title: "Higher Secondary Certificate (H.S.C.)",
        institution: "Notre Dame College",
        year: "2020",
        location: "Dhaka, Bangladesh",
        description: ["Top 0.6% in the college rank"],
      },
      {
        title: "Secondary School Certificate (S.S.C.)",
        institution: "Rajuk Uttara Model College",
        year: "2018",
        location: "Dhaka, Bangladesh",
        description: ["Ranked 1st for 4 years"],
      },
    ],
  },
  {
    title: "Research Experience",
    type: "time_table",
    contents: [
      {
        title: "Remote Research Collaborator",
        institution: "Carnegie Mellon University (Xu Lab)",
        year: "Jan 2024 – Present",
        location: "Pittsburgh, PA, USA (Remote)",
        description: [
          "Advisor: Dr. Min Xu",
          "Unsupervised Cryo-ET segmentation with stable diffusion foundation models — accepted at CVPR 2026 (Highlight and Award Candidate)",
          "Macromolecule localization from extremely sparse labels — accepted at Briefings in Bioinformatics",
          "Tomogram preprocessing and denoising for high-resolution biological structure reconstruction",
        ],
      },
      {
        title: "Remote Research Collaborator",
        institution: "University of Wisconsin–Madison (Adaptive Inference Lab)",
        year: "Sep 2024 – Sep 2025",
        location: "Madison, WI, USA (Remote)",
        description: [
          "Advisor: Dr. Ben Lengerich",
          "Co-authored a comprehensive review on contextualized machine learning and interpretability in foundation models",
          "Contributed to the AdaptInfer framework and contextual awareness in data-driven modeling (Completed)",
        ],
      },
      {
        title: "Undergraduate Research Assistant",
        institution: "Bangladesh University of Engineering and Technology (BUET)",
        year: "Jan 2023 – 2026",
        location: "Dhaka, Bangladesh",
        description: [
          "Supervisor: Dr. M. Sohel Rahman — semi-supervised, multimodal breast cancer classification (Accepted, NSyS 2024) and connectomics EM segmentation (Ongoing)",
          "Supervisor: Dr. Md. Shamsuzzoha Bayzid — RNA task accuracy estimation via self-supervised losses and multimodal training frameworks for biological connectomics (Ongoing)",
          "Supervisor: Dr. A.B.M. Alim Al Islam — EEG-based context-aware deep learning for single-electrode epilepsy prognosis and real-time BCI modeling (Accepted, NeurIPS Workshop)",
          "Supervisor: Dr. Ch. Md. Rakin Haider — SpectraSentinel, a dual-stream real-time drone detection and tracking system (Submitted)",
          "Supervisor: Dr. K.M. Ariful Kabir — stochastic spatio-temporal epidemiology on multiplex networks (Submitted)",
        ],
      },
    ],
  },
  {
    title: "Work Experience",
    type: "time_table",
    contents: [
      {
        title: "Visiting Scholar, SRI Program",
        institution: "National University of Singapore (NUS)",
        year: "Jun 2026 – Present",
        location: "Singapore",
        description: [
          "On-site research internship focusing on health informatics and computational biology",
          "Contributing to interdisciplinary research at the intersection of biomedical data analysis, machine learning, and computational biology",
        ],
      },
      {
        title: "Short-Term Consultant",
        institution: "Bangladesh University of Engineering and Technology (BUET)",
        year: "Feb 2026 – Present",
        location: "Dhaka, Bangladesh",
        description: [
          "Part-time work on Education AI, developing question-generation modules based on frontier generative models",
          "Collaborating on an adaptive question generation pipeline for personalized, curriculum-aligned assessment",
        ],
      },
      {
        title: "Part-Time Research Engineer",
        institution: "Research & Innovation Centre (RIC), BUET",
        year: "Feb 2025 – Nov 2025",
        location: "Dhaka, Bangladesh",
        description: [
          "Project: Identification of Dengue Breeding Sites through Object Recognition (HE-01-244)",
          "Deep learning-based object recognition for dengue vector surveillance and public health image analysis",
        ],
      },
    ],
  },
  {
    title: "Entrepreneurship & Leadership",
    type: "time_table",
    contents: [
      {
        title: "Co-Founder & Head of Research",
        institution: "PinkLifeLine",
        year: "Jan 2025 – Present",
        description: [
          "Health-tech startup from NeoScreenix (JHU 2025 Global Champion), funded by Bangladesh National ICT Division",
          "Partnered with Sustainlaunch Labs (global innovation accelerator) and Herwill (women's empowerment & digital inclusion)",
          "Built and leads a 50+ medical professionals network; leads ML clinical data pipelines & screening workflows",
        ],
      },
      {
        title: "Lead Organizer & Problem Setter",
        institution: "BUET CSE Fest Deep Learning Sprint 2025",
        year: "Nov 2025 – Jan 2026",
        description: [
          "Coordinated largest national AI datathon; designed problems and rubric, supervised judging",
          "Collaborated with academic & industry mentors to ensure high-quality competition standards",
        ],
      },
    ],
  },
  {
    title: "Awards & Recognitions",
    type: "time_table",
    contents: [
      {
        title: "Global Champion — Johns Hopkins Healthcare Design Competition (Team NeoScreenix)",
        year: "2025",
        description: [
          "Developed a smart AI system for early breast cancer screening integrating multimodal imaging and explainable deep learning",
          'Won 1st place among 440+ global teams and 200+ universities in the "Digital Health" category, representing BUET',
          '<a href="https://cbid.bme.jhu.edu/news-events/design-competition/#h-past-winners" target="_blank" rel="noopener">Official competition page</a> · Featured in <a href="https://www.thedailystar.net/news/bangladesh/news/buet-team-wins-1st-place-johns-hopkins-healthcare-design-competition-3884801" target="_blank" rel="noopener">Daily Star</a>, <a href="https://www.tbsnews.net/features/pursuit/neoscreenix-how-buet-students-early-breast-cancer-detection-technology-could-make" target="_blank" rel="noopener">TBS News</a>, <a href="https://unb.com.bd/category/Bangladesh/a-moment-of-global-recognition-for-local-brilliance-of-bangladesh-in-digital-health-care/158731" target="_blank" rel="noopener">UNB News</a>, and <a href="https://www.youtube.com/watch?v=6gNjdeMGXyw" target="_blank" rel="noopener">national TV</a>',
        ],
      },
      {
        title: "Global 2nd Runner-up — IEEE SPS Video & Image Processing (VIP) Cup",
        year: "2025",
        description: [
          "Designed a vision-based drone detection and payload identification system using RGB–IR fusion models",
          "Implemented real-time detection and tracking pipelines optimized for UAV surveillance, achieving top-tier accuracy and inference speed worldwide",
        ],
      },
      {
        title: "Global Finalist — Bradford Quantum Hackathon (Team NeuroCat)",
        year: "2025",
        description: [
          "International hackathon on quantum computing and clinical trial optimization, organized by Quantinuum and the University of Bradford",
          "Finalist in the Clinical Trial Optimization track (Mayo Clinic dataset); built a hybrid quantum–classical pipeline with QUBO formulation, D-Wave quantum annealing, hardware-aware QAOA on IBM NISQ devices, and warm-start hybrid solver strategies",
        ],
      },
      {
        title: "Datathons",
        year: "2024 – 2025",
        description: [
          "KUET 2025 (Top 5%) · BUET DL Sprint 2024 (Top 15%) · CZI Kaggle 2024 (Top 43%) · SUST DL Enigma 2024 (Top 34%)",
        ],
      },
      {
        title: "National Top 7 — Code Refactoring Contest (Code Catalyst 2024)",
        year: "2024",
        description: [
          "National-level code refactoring and software quality competition at IUT ICT Fest 2024",
          'Focused on resolving code smells and improving maintainability, readability, and structural design — <a href="https://github.com/shadmantabib/Code_Catalyst_2024" target="_blank" rel="noopener">GitHub repository</a>',
        ],
      },
      {
        title: "Dean's & University Merit Scholarships — BUET",
        year: "2022 – Present",
        description: [
          "Sustained academic excellence (CGPA > 3.75 over three consecutive years) and topped the department",
        ],
      },
      {
        title: "Speaker Recognition — IEEE SPS & IEEE CS, CUET",
        year: "2025",
        description: [
          'Invited speaker for the webinar "Unlocking IEEE SP Cup & VIP Cup: A Beginner\'s Guide"',
        ],
      },
      {
        title: "Champion — Bangladesh Biology Olympiad (BdBO)",
        year: "2019 – 2020",
      },
      {
        title: "Second Runner-up — Bangladesh Mathematical Olympiad (BdMO)",
        year: "2019 – 2020",
      },
      {
        title: "Winner — Bangladesh Physics Olympiad (BdPhO)",
        year: "2019",
      },
      {
        title: "4th Place & Extended National Camper — Bangladesh Chemistry Olympiad (BdChO)",
        year: "2020",
        description: [
          "Ranked 4th nationally and selected for extended national camp to represent Bangladesh at IChO 2020",
        ],
      },
    ],
  },
  {
    title: "Academic Coursework & Materials",
    type: "time_table",
    contents: [
      {
        title: "BUET CSE Academic Compendium",
        year: "2022 – Present",
        description: [
          "Comprehensive collection of undergraduate CS course materials, structured solutions, and documentation covering Data Structures, Algorithms, Databases, Operating Systems, Computer Networks, and more",
          '<a href="https://github.com/shadmantabib/BUET_CSE_Academic_Compendium" target="_blank" rel="noopener">GitHub repository</a>',
        ],
      },
    ],
  },
  {
    title: "Technical Skills",
    type: "nested_list",
    contents: [
      {
        title: "Programming",
        items: ["Python, PyTorch, TensorFlow, Keras", "C/C++, Java, SQL", "JavaScript, Dart"],
      },
      {
        title: "ML/AI",
        items: [
          "Computer Vision, Deep Learning",
          "Natural Language Processing",
          "Unsupervised Learning",
          "Agent-Based Modeling",
        ],
      },
      {
        title: "Specialized",
        items: ["Cryo-ET Processing", "Medical Imaging", "Bioimage Analysis", "Mesa, Flutter"],
      },
      {
        title: "Development",
        items: ["Django, HTML/CSS, Node, React, Spring", "Database Design, Git, LaTeX"],
      },
    ],
  },
  {
    title: "Publications",
    type: "list",
    contents: [
      "Publications including journal articles, conference papers, and preprints (17 citations on Google Scholar)",
      "Accepted at CVPR 2026 (Highlight/Award Candidate), NeurIPS Workshop, Briefings in Bioinformatics, IJNLC, NSyS",
      "Multiple arXiv preprints (2025–2026)",
    ],
  },
  {
    title: "Media Coverage",
    type: "list",
    contents: [
      "National Daily News: Daily Star, TBS News, UNB News",
      "TV Coverage: Featured on national television for NeoScreenix achievement",
    ],
  },
];
