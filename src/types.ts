/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Node {
  label: string;
  x: number;
  y: number;
  id: string;
  attributes: Record<string, any>;
  color: string;
  size: number;
}

export interface Edge {
  source: string;
  target: string;
  id: string;
  attributes: Record<string, any>;
  color: string;
  size: number;
}

export interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

export enum Category {
  ShowNetwork = "Show Network",
  Skills = "Skills",
  Projects = "Projects",
  Experience = "Experience",
  Education = "Education",
}

export const categories: Category[] = [
  Category.ShowNetwork,
  Category.Skills,
  Category.Projects,
  Category.Experience,
  Category.Education,
];

export interface SidebarItem {
  label: string;
  title: string;
  type?: Category;
  description: string;
  link?: string;
  photo?: string;
}

export const sidebarBodyMap = {
  Skills: {
    label: "Skills",
    title: "Skills",
    description:
      "This category shows technical and interpersonal skillsets I have acquired through academic pursuits, personal projects, and professional experiences, showcasing adaptability and versatility.",
  },
  Python: {
    label: "Python",
    title: "Python",
    type: Category.Skills,
    description:
      "I have used Python primarily in my undergraduate research on Natural Language Processing (NLP), as well as statistical analysis and simplistic AI algorithms to further my practice and understanding in this complex field. I now use Python professionally to build backend systems for Delfina Care, with a focus on Firebase data injection and integration.",
    link: "https://www.python.org/",
    photo: "Python",
  },
  SQLite: {
    label: "SQLite",
    title: "SQLite",
    type: Category.Skills,
    description:
      "I have extensive experience with SQLite, a powerful and lightweight cross-platform relational database management system. Proficient in designing and querying databases. I took classes which taught me how to navigate the complexities of a large database, as well as how to work with cloud systems such as Azure.",
    link: "https://www.sqlite.org/index.html",
    photo: "SQLite",
  },
  Java: {
    label: "Java",
    title: "Java, C#, and C based languages",
    type: Category.Skills,
    description:
      "Java was the language I was taught my fundamentals in, and is as a result the language I have the most practice in. I have also developed many projects using C, Rust, and other related programming languages to build strong backend environments in a full-stack application.",
    link: "https://www.java.com/en/",
    photo: "Java",
  },
  "React/Node.JS": {
    label: "React/Node.JS",
    title: "React, Node.JS, and Javascript based languages",
    type: Category.Skills,
    description:
      "React has become one of my primary tools at Delfina, where I build robust, accessible frontend interfaces for our pregnancy care platform. While I primarily work in React, I also have experience with other JavaScript and Node.js-based frameworks, including Vue and Angular.",
    link: "https://react.dev/",
    photo: "React",
  },
  AI: {
    label: "AI",
    title: "Artificial Intelligence",
    type: Category.Skills,
    description:
      "I have a broad exploration into the realm of Artificial Intelligence, encompassing machine learning, neural networks, and intelligent system design.",
  },
  NLP: {
    label: "NLP",
    title: "Natural Language Processing (NLP)",
    type: Category.Skills,
    description:
      "Focus on Natural Language Processing, involving the interaction between computers and human languages. Explored techniques for text analysis and language understanding. This was the focus of my Undergraduate Research and presentation of my paper at AAAI.",
  },
  "Data Science": {
    label: "Data Science",
    title: "Data Science",
    type: Category.Skills,
    description:
      "Throughout my studies, I concentrated on Big Data and Statistical Analysis, working with large-scale datasets to identify trends and insights. I focused on applying statistical techniques for hypothesis testing, regression analysis, and predictive modeling. I also explored data pipelines and optimization strategies to process vast amounts of data efficiently. My experience in these areas allowed me to develop a solid understanding of data quality, cleaning, and the importance of statistical rigor in drawing reliable conclusions from complex datasets.",
  },
  "Soft Skills": {
    label: "Soft Skills",
    title: "Soft Skills",
    type: Category.Skills,
    description:
      "Possessing strong social communication skills, I am customer-focused and adept at delivering impactful presentations. My collaborative approach fosters effective teamwork, complemented by empathetic interpersonal skills. On a personal level, I am self-motivated and excel in efficient time management. My creativity, analytical thinking, and adaptability further contribute to a well-rounded skill set.",
  },
  Projects: {
    label: "Projects",
    title: "Projects",
    description:
      "I continue to explore new skills through personal projects, which I design and build from scratch to deepen my understanding of specific technologies or ideas. While I previously created academic projects under guided themes during school, those experiences helped shape my ability to work in team-based environments and follow industry best practices—skills I now apply in my professional work.",
    link: "https://github.com/leejmorel",
  },
  "Software Development": {
    label: "Software Development",
    title: "Software Development Lifecycle & Version Control",
    type: Category.Skills,
    description:
      "I follow the full software development lifecycle—from planning and implementation to testing, code review, and deployment. I work primarily with Git and GitHub to manage version control, maintain clean commit histories, and collaborate through structured pull request workflows. I’m comfortable navigating complex codebases, reviewing peer contributions, and ensuring stable, well-documented releases.",
    link: "https://docs.github.com/en/pull-requests",
  },
  Solala: {
    label: "Solala",
    title: "Solala",
    type: Category.Projects,
    description:
      "Solala is a mental health management todo and scheduling web app, designed to help develop emotional intelligence skills, track moods and stress levels, and encourage valuable tools to maintain work/life balance and prevent burnout.",
    link: "https://github.com/Solala-App/Solala",
  },
  PathKit: {
    label: "PathKit",
    title: "PathKit",
    type: Category.Projects,
    description:
      "An all-in-one GM Screen application for running Pathfinder2e. This project explored the debugging process, Agile best practices, Pull Requests and team development, and is a fully responsive design built for all platforms.",
    link: "https://github.com/LeeJMorel/PathKit",
  },
  MarvelVerse: {
    label: "MarvelVerse",
    title: "MarvelVerse",
    type: Category.Projects,
    description:
      "MarvelVerse is an interactive visualization project that explores the Marvel Comics universe through dynamic network graphs. Gain insights into hero teams, their connections, and the evolution of Marvel over time.",
    link: "https://leejmorel.github.io/MarvelVerse/",
  },
  "Morse Code Translator": {
    label: "Morse Code Translator",
    title: "Morse Code Translator",
    type: Category.Projects,
    description:
      "A program that encodes and decodes Morse code files using a binary tree. Morse code is a system that encodes the 26 English letters and 10 numeric digits into sequences of dots, dashes, and spaces. The tree stores the encodings of each letter and number, going left for a dot and right for a dash. The program is designed to translate both directions, inverting the tree",
    link: "https://github.com/LeeJMorel/Morse-Code-Translator",
  },
  Experience: {
    label: "Experience",
    title: "Experience",
    description:
      "Prior to my time as a student I had a successful business career, where I became a General Manager. I left this field in hopes to explore my passions deeper; however, I bring with me experience from my previous career. I excel working with teams, communications, and my time management capabilities have been the reason for the success of my many personal projects.",
  },
  "Undergraduate Research": {
    label: "Undergraduate Research",
    title: "Undergraduate Research",
    type: Category.Experience,
    description:
      "Programming in Python and Jupyter Notebook for statistically relevant data analysis and visualization. Reading and summarizing other potentially relevant research papers. Prompt generation for LLMs such as ChatGPT and Llama 2 for exploratory research. Successfully co-authored and published a workshop paper to be orally presented April 2024 for the AAAI conference.",
    link: "https://aaai.org/aaai-conference/",
    photo: "UW",
  },
  "Software Engineer I - Delfina": {
    label: "Software Engineer I - Delfina",
    title: "Software Engineer I – Fullstack Development",
    type: Category.Experience,
    description:
      "At Delfina, I build and maintain the intelligent pregnancy care platform as a fullstack engineer. My primary responsibilities include developing accessible, user-focused interfaces in React and creating scalable backend services in Python, including Firebase data integration. I contribute to production-level code through Git workflows and pull requests, ensuring clean, maintainable, and collaborative development across the platform.",
    link: "https://www.delfinacare.com",
    photo: "Delfina",
  },
  "UW Seattle Computer Science B.S. '24": {
    label: "UW Seattle Computer Science B.S. '24",
    title: "Paul G Allen Computer Science B.S., University of Washington 2024",
    type: Category.Education,
    description:
      "Many of my projects began as a seed of an idea during the diverse courses I took during my undergraduate studies at University of Washington - Seattle. UW's Computer Science program is among some of the best in the world, ranking #16 globally. I attended as a transfer student, a difficult feat as they only accept 1-2% of transfer applicants a year, saving these spots for students who go beyond just exceptional grades.",
    link: "https://www.cs.washington.edu/",
    photo: "UW",
  },
  "University of WA Annual Dean’s List 2023": {
    label: "University of WA Annual Dean’s List 2023",
    title: "University of Washington Dean’s List",
    type: Category.Education,
    description:
      "I was named to the University of Washington Dean's List in 2023 for maintaining a GPA higher than 3.5, an achievement that recognizes high academic performance and excellence at one of the top computer science programs in the world.",
    link: "https://www.washington.edu/",
    photo: "UW",
  },
  "Chambers Commitment to Academic Excellence 2021": {
    label: "Chambers Commitment to Academic Excellence 2021",
    title: "Chambers Commitment to Academic Excellence Award",
    type: Category.Education,
    description:
      "Awarded to TRIO students demonstrating significant academic merit, the Chambers Commitment to Academic Excellence Award recognized my achievement of maintaining a 4.0 GPA over two or more years, reflecting my dedication to academic excellence.",
    link: "https://www.trioprograms.org/",
    photo: "Trio",
  },
  "NAEOP TRIO Achiever Award 2021": {
    label: "NAEOP TRIO Achiever Award 2021",
    title: "NAEOP TRIO Achiever Award",
    type: Category.Education,
    description:
      "The NAEOP TRIO Achiever Award is presented to TRIO students who have made outstanding contributions to society. I was honored with this award in 2021 for my active involvement in initiatives that positively impact the community and my commitment to societal betterment.",
    link: "https://naeop.org/",
    photo: "Trio",
  },
  "Allen School Undergraduate Service Award 2023": {
    label: "Allen School Undergraduate Service Award 2023",
    title: "Allen School Undergraduate Service Award",
    type: Category.Education,
    description:
      "In 2023, I was honored with the Allen School Undergraduate Service Award, recognizing me as one of the top graduates (4 awarded out of 600 graduates) for exceptional student advocacy. My work in improving DEIA services and creating a study center significantly boosted academic performance and provided valuable support to the student community.",
    link: "https://www.cs.washington.edu/",
    photo: "Allen",
  },
};
