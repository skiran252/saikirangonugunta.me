import { faGithub as FaGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faAngellist } from "@fortawesome/free-brands-svg-icons/faAngellist";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
export default {
  nav: {
    logo: "GSK",
    links: [
      { text: "Projects", to: "/projects" },
      { text: "Blogs", to: "/blogs" },
    ],
  },
  header: {
    img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
    text: ["Hi!", "I am Saikiran Gonugunta", ""],
    typical: [
      "Web Developer. 🖥",
      2000,
      "Currently Software engineer Trainee at IVY COMPTECH",
      1000,
    ],
    btnText: "Discover More",
  },
  projects: [
    {
      title: "1. How well do you know me",
      source: "https://github.com/skiran252/neogmark1",
      preview: "https://replit.com/@saikiran26/neogmark1?embed=true",
      description: "CLI Based Quiz on questions related to me",
    },
    {
      title: "2. A simple quiz on cyber security",
      source: "https://github.com/skiran252/neogmark2",
      preview: "https://replit.com/@saikiran26/neogmark2?embed=true",
      description: "CLI based quiz on cyber security related questions",
    },{
      title: "3. My Portfolio",
      source: "https://github.com/skiran252/saikirangonugunta.me",
      preview: "https://saikirangonugunta.me",
      description: "my portfolio website",
    },
    {
      title: "6. Minion Language Translator",
      source: "https://github.com/skiran252/neogmark6",
      preview: "https://skiran252.github.io/neogmark6/index.html",
      description: "CLI based quiz on cyber security related questions",
    },
    {
      title: "7. Pirate Speak Translator",
      source: "https://github.com/skiran252/neogmark7",
      preview: "https://skiran252.github.io/neogmark7/index.html",
      description: "CLI based quiz on cyber security related questions",
    },
    {
      title: "8. Emoji Interpreter",
      source: "https://github.com/skiran252/neogmark8",
      preview: "https://skiran252-mark8.netlify.app/",
      description: "takes emoji and input and interprets its name",
    },
    {
      title: "9. Recommendation App",
      source: "https://github.com/skiran252/neogmark9",
      preview: "https://skiran252-mark9.netlify.app/",
      description: "shows recommendations for TV Series based on genre",
    },
    {
      title: "10. A Simple Cash Register Interface",
      source: "https://github.com/skiran252/neogmark10",
      preview: "https://skiran252-mark10.netlify.app/",
      description:
        "A Cash Register app which displays how much change to return when bill and change is entered.",
    },
    {
      title: "11. Is Your Birthday lucky? 🤔",
      source: "https://github.com/skiran252/neogmark11",
      preview: "https://skiran252-mark11.netlify.app/",
      description:
        "tells if anumber is your lucky number based on on dob and entered lucky number",
    },
    {
      title: "12. Fun with Triangles",
      source: "https://github.com/skiran252/neogmark12",
      preview: "https://skiran252-mark12.netlify.app/",
      description: "App based on triangles for fun (quiz), calculation(area,hypotenuse), validate properties(if given angles can form a triangle)",
    },
    {
      title: "13. Is your Birthday a Palindrome",
      source: "https://github.com/skiran252/neogmark13",
      preview: "https://skiran252-mark13.netlify.app/",
      description:
        "tells if your birthday is a palindrome and tells next nearest palindromic date from your dob",
    },
    {
      title: "14. Stock Profit/Loss Calculator",
      source: "https://github.com/skiran252/neogmark14",
      preview: "https://skiran252-mark14.netlify.app/",
      description:
        "given initial price,units,current price, displays profit or loss",
    },
  ],
  social: [
    {
      link: "https://github.com/skiran252",
      label: "Github",
      icon: FaGithub,
      color: "black",
    },
    {
      link: "https://facebook.com/saikirangonugunta08",
      label: "Facebook",
      icon: faFacebookF,
      color: "#4968ad",
    },
    {
      link: "https://www.instagram.com/gsk_cool/",
      label: "Instagram",
      icon: faInstagram,
      color: "black",
    },
    {
      link: "https://www.linkedin.com/in/saikiran-gonugunta",
      label: "LinkedIn",
      icon: faLinkedinIn,
      color: "#2867B2",
    },
    {
      link: "https://angel.co/u/saikiran-gonugunta",
      label: "Angel List",
      icon: faAngellist,
      color: "black",
    },
    {
      link: "https://twitter.com/skiran252",
      label: "Twitter",
      icon: faTwitter,
      color: "#49a1eb",
    },
    {
      link: "mailto:skiran252@gmail.com",
      label: "Email",
      icon: faEnvelope,
      color: "red",
    }
  ],
  footer: {
    copyright: "© GSK DEV 2021",
  },
  blogs: [
    {
      title:
        "How to easily integrate Spring Security with existing Spring MVC application.",
      author: "SAIKIRAN GONUGUNTA",
      date: "28 SEPTEMBER, 2021",
      excerpt:
        "Spring security is the easiest way to enable security in your spring application. spring-security enables you to easily frameworks like Spring Web MVC (or Spring Boot), as well as with standards like OAuth2 or SAML it auto-generates login/logout pages and protects against common exploits like CSRF. spring-security is simply a bunch of servlet filters.",
      link: "https://saikiran-gonugunta.hashnode.dev/how-to-easily-integrate-spring-security-with-existing-spring-mvc-application",
      image: "https://miro.medium.com/max/2000/1*3jPSO8IO9r0k0QTnvrTo_Q.jpeg"
    },
    {
      title: "Concepts you must know in javascript",
      author: "SAIKIRAN GONUGUNTA",
      date: "29 SEPTEMBER, 2021",
      excerpt: "Javascript is often considered when asynchronous functionality is required. everyone assumes it's asynchronous.",
      link: "https://saikiran-gonugunta.hashnode.dev/concepts-you-must-know-in-javascript",
      image: "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"
    }
  ],
  stack: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/mongo.png",
        alt: "mongodb",
      },
      {
        img: process.env.PUBLIC_URL + "/logo512.png",
        alt: "react",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/express.png",
        alt: "express",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/node.png",
        alt: "node",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/flask.png",
        alt: "flask",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/spring.png",
        alt: "flask",
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};
