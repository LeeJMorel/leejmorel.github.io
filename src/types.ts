/* eslint-disable @typescript-eslint/no-explicit-any */
//filter for both visualizations
export interface FilterOption {
  label: string;
  color: string;
}

export const defaultFilter = { label: "Fantastic Four", color: "grey" };

export const filterOptions: FilterOption[] = [
  { label: "Fantastic Four", color: "grey" },
];

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

export interface SidebarItem {
  description: string;
  link?: string;
  photo?: string;
}

export const sidebarBodyMap = {
  Skills: {
    description: "oksavso.",
  },
  Python: {
    description: "Moansd.",
    link: "https://www.python.org/",
  },
  AI: {
    description: "kAFNL;.",
  },
  NLP: {
    description: "neato.",
  },
  SQLite: {
    description:
      "While I have worked with many different SQL based databases, SQLite is one I have used many times now due to it's strength in corss-platform development. I took classes which taught me how to navigate the complexities of a large database, as well as how to work with cloud systems such as Azure.",
    link: "https://www.sqlite.org/index.html",
  },
  "Data Science": {
    description:
      "A key focus throughout my major was exploring Big Data and Statistics.",
  },
  "C#/Java": {
    description:
      "Java was the languague I was taught my fundementals in, and is as a result the language I have the most practice in. I have also developed many projects using C, Rust, and other related programming languagues to built stong backend enviroments in a full stack application.",
    link: "https://www.java.com/en/",
  },
  "React/Node.JS": {
    description:
      "While most of my projects are built using React due to its popularity I am familiar with many Javascript and Node.js based tools such as Vue and Angular as well.",
    link: "https://react.dev/",
  },
  Projects: {
    description:
      "I explore new skills through projects both in and out of my classes. Projects made for classes are still built from scratch, and are proposed and built out by myself with the intent to explore particular themes under guidance. This has been vital to learning how to work in team based development enviroments and has equiped me to follow best practices.",
    link: "https://github.com/leejmorel",
  },
  Solala: {
    description:
      "Solala is a mental health management todo and schedualing web app, designed to help develop emotional intelligence skills, track moods and stress levels, and encourage valuable tools to maintain work/life balance and prevent burn out.",
    link: "https://github.com/Solala-App/Solala",
  },
  PathKit: {
    description:
      "An all-in-one GM Screen application for running Pathfinder2e. This project explored the debugging process, Agile best practices, Pull Requests and team development, and is a fully responsive design built for all platforms.",
    link: "https://github.com/LeeJMorel/PathKit",
  },
  MarvelVerse: {
    description:
      "MarvelVerse is an interactive visualization project that explores the Marvel Comics universe through dynamic network graphs. Gain insights into hero teams, their connections, and the evolution of Marvel over time.",
    link: "https://leejmorel.github.io/MarvelVerse/",
  },
  "Morse Code Translator": {
    description:
      "A program that encodes and decodes Morse code files using a binary tree. Morse code is a system that encodes the 26 English letters and 10 numeric digits into sequences of dots, dashes, and spaces. The tree stores the encodings of each letter and number, going left for a dot and right for a dash. The program is designed to translate both directions, inverting the tree",
    link: "https://github.com/LeeJMorel/Morse-Code-Translator",
  },
  "Undergraduate Research": {
    description: "stuff",
    link: "www.google.com",
  },
  Experience: {
    description:
      "Prior to my time as a student I had a sucessful buisness career, where I became a General Manager. I left this feild in hopes to explore my passions deeper, however I bring with me experiance from my previous career. I excell working with teams, communications, and my time management capabilities has been the reason for the sucess of my many personal projects.",
  },
  Classes: {
    description:
      "This is a small collection of my undergraduate classes you may find relavent. During my time at The Allen School I focused on my intrests in AI and Statistics, which ultimitly lead to my published research on NLP Models under the mentorship of Lucille Njoo.",
    link: "https://www.cs.washington.edu/academics/ugrad/current-students/degree",
  },
  "Data Visualization": {
    description:
      "Techniques for creating effective visualizations of data based on principles from graphic design, perceptual psychology, and statistics. Topics include visual encoding models, exploratory data analysis, visualization software, interaction techniques, graphical perception, color, animation, high-dimensional data, cartography, network visualization, and text visualization.",
    link: "https://courses.cs.washington.edu/courses/cse442/23au/",
  },
  Databases: {
    description:
      "The relational data model and the SQL query language. Conceptual modeling: entity/relationships, normal forms. XML, XPath, and XQuery. Transactions: recovery and concurrency control. Implementation of a database system. A medium sized project using a rational database backend",
    link: "https://courses.cs.washington.edu/courses/cse444/23sp/",
  },
  "Data Algorithms": {
    description:
      "Covers abstract data types and structures including dictionaries, balanced trees, hash tables, priority queues, and graphs; sorting; asymptotic analysis; fundamental graph algorithms including graph search, shortest path, and minimum spanning trees; multithreading and parallel algorithms; P and NP complexity classes.",
    link: "https://courses.cs.washington.edu/courses/cse332/23wi/",
  },
  "Intro to CS": {
    description:
      "Year long series that covers the fundementals of Computer Science. Builds in deapth knowledge of basics such as loops, arrays, lists, discrete mathmatics, Big-O, binary trees, clean code principles, and more.",
    link: "https://www.cs.washington.edu/academics/ugrad/nonmajor-options/intro-courses",
  },
  "Software Development Cycle": {
    description:
      "Fundamentals of software engineering using a group project as the basic vehicle. Topics covered include the software crisis, managing complexity, requirements specification, architectural and detailed design, testing and analysis, software process, and tools and environments.",
    link: "https://nigini.github.io/SWEng/offers/CSE403-SP23/",
  },
  "Mobile App Development": {
    description:
      "User interfaces for computing systems, including principles and implementation techniques. Covers key topics and programming paradigms for interactive systems, such as event handling; graphical layout, design, and widgets; undo; accessibility; and context awareness. Provides experience with modern application domains and frameworks (e.g., mobile applications).",
    link: "https://courses.cs.washington.edu/courses/cse340/",
  },
  "Stats & Probability": {
    description:
      "Examines fundamentals of enumeration and discrete probability; applications of randomness to computing; polynomial-time versus NP; and NP-completeness.",
    link: "https://courses.cs.washington.edu/courses/cse312/22wi/",
  },
};
