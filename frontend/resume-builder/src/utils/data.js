import TEMPLATE_ONE_IMG from "../assets/template-one.png";
import TEMPLATE_TWO_IMG from "../assets/template-two.png";
import TEMPLATE_THREE_IMG from "../assets/template-three.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2Fb", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    profilePreviewUrl: "",
    fullName: "John Doe",
    designation: "Senior Software Engineer",
    summary:
      "Passionate and results-driven developer with + years of experience building full-stack web applications using modern technologies like Reoct. Node js. and MongoDB",
  },
  contactInfo: {
    email: "johndoe@example.com",
    phone: "+1234567890",
    location: "#12 Anywhere, Any City. Any Country",
    linkedin: "https://inkedin.com/timetoprogram",
    github: "https://github.com/timetopprogram",
    website: "https://timetoprogram.com",
  },
  workExperience: [
    {
      company: "Tech Solutions",
      role: "Senior Frontend Engineer",
      startDate: "Mar 2022",
      endDate: "Apr 2025",
      description:
        "Leading the frontend team to bulld scalable enterprise applications using React. Tailwind CSS, and TypeScript.",
    },
    {
      company: "Coding Dev",
      role: "Full Stack Developer",
      startDate: "Jan 2020",
      endDate: "Feb 2022",
      description:
        "Worked on cross-functional tears developing full-stock solutions with React. Node js, and MongoDB. improved performance by 30% through code optimization",
    },
    {
      company: "Startup Company",
      role: "Junior Web Developer",
      startDate: "Jun 2018",
      endDate: "Dec 2019",
      description:
        "Built responsive websites for startups and small businesses. Maintained legacy code and collaborated with designers to enhance UX/Ul",
    },
  ],
  education: [
    {
      degree: "M.Sc. Software Engineering",
      institution: "Tech University",
      startDate: "Aug 2021",
      endDate: "Jun 2023",
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "State University",
      startDate: "Aug 2017",
      endDate: "May 2021",
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      startDate: "Jun 2015",
      endDate: "May 2017",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      progress: 5,
    },
    {
      name: "React",
      progress: 5,
    },
    {
      name: "Node.js",
      progress: 5,
    },
    {
      name: "TypeScript",
      progress: 4,
    },
    {
      name: "MongoDB",
      progress: 4,
    },
  ],
  projects: [
    {
      title: "Project Manager App",
      discription:
        "A task and team management app built with MERN stack. Includes user roles. real-time notifications, and drag-and-drop task boards",
      github: "https://github.com/timetoprogram/project-manager-app",
      liveDemo: "",
    },
    {
      title: "E-Commerce Platform",
      discription:
        "An e-commerce site built with Next.js and Stripe integration. Supports cart. payments, order history. and admin dashboard",
      github: "",
      liveDemo: "https://ecommerce-demo.timetoprogram.com",
    },
    {
      title: "Blog CMS",
      discription:
        "A custom CMS for blogging using Express and Reoct. Includes WYSIWYG editor, markdown support, and user management.",
      github: "https://github.com/timetoprogram/blog-cms",
      liveDemo: "https://blogcms.timetoprogram.dev",
    },
  ],
  certifications: [
    {
      title: "Full Stack Web Developer",
      issuer: "Udemy",
      year: "2023",
    },
    {
      title: "React Advanced Certification",
      issuer: "Coursera",
      year: "2022",
    },
  ],
  languages: [
    {
      name: "English",
      progress: 5,
    },
    {
      name: "Spanish",
      progress: 4,
    },
    {
      name: "French",
      progress: 2,
    },
  ],
  interests: ["Reading", "Adventure Sports"],
};
