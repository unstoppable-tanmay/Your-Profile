import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { IconType } from "react-icons";

export const techArray: string[] = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "Redux",
  "Angular",
  "Vue.js",
  "TypeScript",
  "GraphQL",
  "Webpack",
  "Babel",
  "MongoDB",
  "Firebase",
  "Django",
  "Flask",
  "Ruby on Rails",
  "Java",
  "Spring Boot",
  "ASP.NET",
  "C#",
  "Python",
  "Flask",
  "Ruby",
  "PHP",
  "Laravel",
  "Swift",
  "Kotlin",
  "Flutter",
  "Dart",
  "TensorFlow",
  "PyTorch",
  "JavaFX",
  "Unity",
  "C++",
  "C",
  "Go",
  "Rust",
  "Vue.js",
  "jQuery",
  "Bootstrap",
  "Sass",
  "LESS",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud Platform",
  "Heroku",
  "Jenkins",
  "Git",
  "GitHub",
  "Bitbucket",
  "Jira",
  "Confluence",
  "Slack",
  "GraphQL",
  "RESTful API",
  "JSON",
  "XML",
  "OAuth",
  "JWT",
  "WebSockets",
];

export function findMostMatchingWord(input: string): string {
  // Convert input to lowercase for case-insensitive comparison
  const lowerInput: string = input.toLowerCase();

  // Find the word with the maximum similarity
  const mostMatchingWord = techArray.reduce(
    (mostMatching, currentWord) => {
      const lowerCurrentWord = currentWord.toLowerCase();

      // Only consider matches from the left of the input string
      const leftMatch = lowerCurrentWord.startsWith(lowerInput);

      if (leftMatch && currentWord.length > mostMatching.word.length) {
        return { word: currentWord };
      }

      return mostMatching;
    },
    { word: "" }
  );

  return mostMatchingWord.word;
}

export function CheckSocialProfiles(input: string): string {
  if (input.includes("github")) return "github";
  else if (input.includes("linkedin")) return "linkedin";
  else if (input.includes("twitter")) return "twitter";
  else if (input.includes("instagram")) return "instagram";
  else if (
    input.includes("google") ||
    input.includes("gmail") ||
    input.includes("@")
  )
    return "google";
  else return "";
}

export function isLinkValid(link: string): boolean {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  return urlPattern.test(link);
}
