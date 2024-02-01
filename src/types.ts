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
  Classes = "Classes",
}

export const categories: Category[] = [
  Category.ShowNetwork,
  Category.Skills,
  Category.Projects,
  Category.Experience,
  Category.Classes,
];

export interface SidebarItem {
  title: string;
  type?: Category;
  description: string;
  link?: string;
  photo?: string;
}

export const sidebarBodyMap = {
  Skills: {
    title: "Skills",
    description:
      "This category shows technical and interpersonal skillsets I have acquired through academic pursuits, personal projects, and professional experiences, showcasing adaptability and versatility.",
  },
  Python: {
    title: "Python",
    type: Category.Skills,
    description:
      "I have used Python primarily in my undergraduate research on Natural Language Processing (NLP), as well as statistical analysis and simplistic AI Algorithms to further my practice and understanding in this complex field.",
    link: "https://www.python.org/",
    photo: "Python",
  },
  AI: {
    title: "Artificial Intelligence",
    type: Category.Skills,
    description:
      "I have a broad exploration into the realm of Artificial Intelligence, encompassing machine learning, neural networks, and intelligent system design.",
  },
  NLP: {
    title: "Natural Language Processing (NLP)",
    type: Category.Skills,
    description:
      "Focus on Natural Language Processing, involving the interaction between computers and human languages. Explored techniques for text analysis and language understanding. This was the focus of my Undergraduate Research and presentation of my paper at AAAI.",
  },
  SQLite: {
    title: "SQLite",
    type: Category.Skills,
    description:
      "I have extensive experience with SQLite, a powerful and lightweight cross-platform relational database management system. Proficient in designing and querying databases. I took classes which taught me how to navigate the complexities of a large database, as well as how to work with cloud systems such as Azure.",
    link: "https://www.sqlite.org/index.html",
    photo: "SQLite",
  },
  "Data Science": {
    title: "Data Science",
    type: Category.Skills,
    description:
      "A key focus throughout my major was exploring Big Data and Statistics.",
  },
  "C#/Java": {
    title: "C#, Java, and C based languages",
    type: Category.Skills,
    description:
      "Java was the language I was taught my fundamentals in, and is as a result the language I have the most practice in. I have also developed many projects using C, Rust, and other related programming languages to build strong backend environments in a full-stack application.",
    link: "https://www.java.com/en/",
  },
  "React/Node.JS": {
    title: "React, Node.JS, and javascript based languages",
    type: Category.Skills,
    description:
      "While most of my projects are built using React due to its popularity, I am familiar with many JavaScript and Node.js-based tools such as Vue and Angular as well.",
    link: "https://react.dev/",
  },
  "Soft Skills": {
    title: "Soft Skills",
    type: Category.Skills,
    description:
      "Possessing strong social communication skills, I am customer-focused and adept at delivering impactful presentations. My collaborative approach fosters effective teamwork, complemented by empathetic interpersonal skills. On a personal level, I am self-motivated and excel in efficient time management. My creativity, analytical thinking, and adaptability further contribute to a well-rounded skill set.",
  },
  Projects: {
    title: "Projects",
    description:
      "I explore new skills through projects both in and out of my classes. Projects made for classes are still built from scratch, and are proposed and built out by myself with the intent to explore particular themes under guidance. This has been vital to learning how to work in team-based development environments and has equipped me to follow best practices.",
    link: "https://github.com/leejmorel",
  },
  "Agile/Kanban": {
    title: "Agile and Kanban based Software Development",
    type: Category.Skills,
    description:
      "I am well-versed in the software development lifecycle, demonstrating proficiency in both Kanban and Agile methodologies. My familiarity with these frameworks enables me to navigate complex projects efficiently. I bring a strategic and adaptable approach to development processes, ensuring effective project management and delivery.",
    link: "https://www.atlassian.com/agile/kanban",
  },
  Solala: {
    title: "Solala",
    type: Category.Projects,
    description:
      "Solala is a mental health management todo and scheduling web app, designed to help develop emotional intelligence skills, track moods and stress levels, and encourage valuable tools to maintain work/life balance and prevent burnout.",
    link: "https://github.com/Solala-App/Solala",
  },
  PathKit: {
    title: "PathKit",
    type: Category.Projects,
    description:
      "An all-in-one GM Screen application for running Pathfinder2e. This project explored the debugging process, Agile best practices, Pull Requests and team development, and is a fully responsive design built for all platforms.",
    link: "https://github.com/LeeJMorel/PathKit",
  },
  MarvelVerse: {
    title: "MarvelVerse",
    type: Category.Projects,
    description:
      "MarvelVerse is an interactive visualization project that explores the Marvel Comics universe through dynamic network graphs. Gain insights into hero teams, their connections, and the evolution of Marvel over time.",
    link: "https://leejmorel.github.io/MarvelVerse/",
  },
  "Morse Code Translator": {
    title: "Morse Code Translator",
    type: Category.Projects,
    description:
      "A program that encodes and decodes Morse code files using a binary tree. Morse code is a system that encodes the 26 English letters and 10 numeric digits into sequences of dots, dashes, and spaces. The tree stores the encodings of each letter and number, going left for a dot and right for a dash. The program is designed to translate both directions, inverting the tree",
    link: "https://github.com/LeeJMorel/Morse-Code-Translator",
  },
  Experience: {
    title: "Experience",
    description:
      "Prior to my time as a student I had a successful business career, where I became a General Manager. I left this field in hopes to explore my passions deeper; however, I bring with me experience from my previous career. I excel working with teams, communications, and my time management capabilities have been the reason for the success of my many personal projects.",
  },
  "Undergraduate Research": {
    title: "Undergraduate Research",
    type: Category.Experience,
    description:
      "Programming in Python and Jupyter Notebook for statistically relevant data analysis and visualization. Reading and summarizing other potentially relevant research papers. Prompt generation for LLMs such as ChatGPT and Llama 2 for exploratory research. Successfully co-authored and published a workshop paper to be orally presented April 2024 for the AAAI conference.",
    link: "https://aaai.org/aaai-conference/",
  },
  "UW Computer Science B.S. (June 2024)": {
    title: "UW Computer Science B.S.",
    type: Category.Experience,
    description:
      "Many of my projects began as a seed of an idea during the diverse courses I took during my undergraduate studies at University of Washington - Seattle. UW's Computer Science program is among some of the best in the world, ranking #16 globally. I attended as a transfer student, a difficult feat as they only accept 1-2% of transfer applicants a year, saving these spots for students who go beyond just exceptional grades.",
    link: "https://www.cs.washington.edu/",
  },
  Classes: {
    title: "Classes",
    description:
      "This is a small collection of my undergraduate classes you may find relevant. During my time at The Allen School, I focused on my interests in AI and Statistics, which ultimately led to my published research on NLP Models under the mentorship of Lucille Njoo.",
    link: "https://www.cs.washington.edu/academics/ugrad/current-students/degree",
  },
  "Data Visualization": {
    title: "Data Visualization",
    type: Category.Classes,
    description:
      "Techniques for creating effective visualizations of data based on principles from graphic design, perceptual psychology, and statistics. Topics include visual encoding models, exploratory data analysis, visualization software, interaction techniques, graphical perception, color, animation, high-dimensional data, cartography, network visualization, and text visualization.",
    link: "https://courses.cs.washington.edu/courses/cse442/23au/",
  },
  Databases: {
    title: "Databases",
    type: Category.Classes,
    description:
      "The relational data model and the SQL query language. Conceptual modeling: entity/relationships, normal forms. XML, XPath, and XQuery. Transactions: recovery and concurrency control. Implementation of a database system. A medium-sized project using a rational database backend",
    link: "https://courses.cs.washington.edu/courses/cse444/23sp/",
  },
  "Data Algorithms": {
    title: "Data Algorithms",
    type: Category.Classes,
    description:
      "Covers abstract data types and structures including dictionaries, balanced trees, hash tables, priority queues, and graphs; sorting; asymptotic analysis; fundamental graph algorithms including graph search, shortest path, and minimum spanning trees; multithreading and parallel algorithms; P and NP complexity classes.",
    link: "https://courses.cs.washington.edu/courses/cse332/23wi/",
  },
  "Intro to CS": {
    title: "Intro to CS",
    type: Category.Classes,
    description:
      "Year-long series that covers the fundamentals of Computer Science. Builds in-depth knowledge of basics such as loops, arrays, lists, discrete mathematics, Big-O, binary trees, clean code principles, and more.",
    link: "https://www.cs.washington.edu/academics/ugrad/nonmajor-options/intro-courses",
  },
  "Software Development Cycle": {
    title: "Software Development Cycle",
    type: Category.Classes,
    description:
      "Fundamentals of software engineering using a group project as the basic vehicle. Topics covered include the software crisis, managing complexity, requirements specification, architectural and detailed design, testing and analysis, software process, and tools and environments.",
    link: "https://nigini.github.io/SWEng/offers/CSE403-SP23/",
  },
  "Mobile App Development": {
    title: "Mobile App Development",
    type: Category.Classes,
    description:
      "User interfaces for computing systems, including principles and implementation techniques. Covers key topics and programming paradigms for interactive systems, such as event handling; graphical layout, design, and widgets; undo; accessibility; and context awareness. Provides experience with modern application domains and frameworks (e.g., mobile applications).",
    link: "https://courses.cs.washington.edu/courses/cse340/",
  },
  "Stats & Probability": {
    title: "Stats & Probability",
    type: Category.Classes,
    description:
      "Examines fundamentals of enumeration and discrete probability; applications of randomness to computing; polynomial-time versus NP; and NP-completeness.",
    link: "https://courses.cs.washington.edu/courses/cse312/22wi/",
  },
};
