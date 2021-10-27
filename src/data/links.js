// Home
import Home from "../pages/Home/Home.page";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

// Résumé
import Resume from "../pages/Resume/Resume.page";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

// Portfolio
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";

// Contact
import Contact from "../pages/Contact/Contact.page";
import SendIcon from "@mui/icons-material/Send";

// Github
import GitHubIcon from "@mui/icons-material/GitHub";

// LinkedIn
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = {
  mainNav: [
    {
      name: "Home",
      route: "/",
      icon: HomeOutlinedIcon,
      page: Home,
    },
    {
      name: "Résumé",
      route: "/resume",
      icon: QuestionAnswerOutlinedIcon,
      page: Resume,
    },
    {
      name: "Portfolio",
      route: "/portfolio",
      icon: WebOutlinedIcon,
      // page: Portfolio,
    },
    {
      name: "Contact",
      route: "/contact",
      icon: SendIcon,
      page: Contact,
    },
  ],
  socialNav: [
    {
      name: "GitHub",
      username: "@mattlayton1986",
      icon: GitHubIcon,
      url: "https://github.com/mattlayton1986",
    },
    {
      name: "LinkedIn",
      username: "@mattlayton1986",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/mattlayton1986/",
    },
  ],
  documents: [
    {
      name: "Matthew_Layton_Resume.docx",
      filepath: "/documents/matthew_layton_resume.docx",
      type: "Word Document",
    },
    {
      name: "Matthew_Layton_Resume.pdf",
      filepath: "/documents/matthew_layton_resume.pdf",
      type: "PDF Document",
    },
  ],
};

export default links;
