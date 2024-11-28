import web from "../assets/web.jpg";
import robotics from "../assets/robotics.jpg";
import frontend from "../assets/frontend.jpg";
import react from "../assets/react.png";
import background from "../assets/background.jpg";
import secondary from "../assets/secondary.jpg";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const aboutContent = 

    {
      mainText: "I love exploring and trying new projects.",
      secondaryText: "I'm very flexible with time zone communications.",
      techStackText: "I constantly try to improve my tech stack.",
      techStackItems: ["ReactJS", "JavaScript", "Typescript", "NextJS","HTML","PHP"],
      mainImage: background, // replace with actual path to the main image
      secondaryImage: secondary,
    };

  
  export const projects = [
    {
      id: 1,
      title: "Food Donation Portal",
      des: "Donate the excess food to needy.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "/ui.earth.com",
    },
    {
      id: 2,
      title: "Krishi Nepal",
      des: "Find out the productive crops that give maximum yield for particular soil type.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "Lung Cancer Prediction",
      des: "To detect the lung cancer.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Responsive Ecommerce Website",
      des: "Ecommerce website using React and TailwindCSS",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Shushrusha has been an immense pleasure and joy. If you want to build a better brand with responsive website, Shushrusha is the professional developer that you would want to work with",
      name: "Anish Maharjan",
      title: "CEO of ABMSoft Pvt. Ltd.",
    },
    {
      quote:
        "Working with Shushrusha has been an immense pleasure and joy. If you want to build a better brand with responsive website, Shushrusha is the professional developer that you would want to work with",
      name: "Anish Maharjan",
      title: "CEO of ABMSoft Pvt. Ltd.",
    },
    {
      quote:
        "Working with Shushrusha has been an immense pleasure and joy. If you want to build a better brand with responsive website, Shushrusha is the professional developer that you would want to work with",
      name: "Anish Maharjan",
      title: "CEO of ABMSoft Pvt. Ltd.",
    },
    {
      quote:
        "Working with Shushrusha has been an immense pleasure and joy. If you want to build a better brand with responsive website, Shushrusha is the professional developer that you would want to work with",
      name: "Anish Maharjan",
      title: "CEO of ABMSoft Pvt. Ltd.",
    },
    {
      quote:
        "Working with Shushrusha has been an immense pleasure and joy. If you want to build a better brand with responsive website, Shushrusha is the professional developer that you would want to work with",
      name: "Anish Maharjan",
      title: "CEO of ABMSoft Pvt. Ltd.",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cPanel",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "React Intern at Webpoint Solutions",
      desc: "Built an ecommerce website, Ecobazar using React and Tailwind CSS",
      className: "md:col-span-2",
      thumbnail: react,
    },
    {
      id: 2,
      title: "KEC Robotics Club",
      desc: "Built Crop Recommendation System which predicts the best yielding crop for particular soil type",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: robotics,
    },
    
  ];
  
