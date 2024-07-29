import Arhar from "../assets/images/arhar.jpg";
import Bajra from "../assets/images/bajra.jpg";
import Barley from "../assets/images/barley.jpg";
import Copra from "../assets/images/copra.jpg";
import Cotton from "../assets/images/cotton.jpg";
import Gram from "../assets/images/gram.jpg";
import Groundnut from "../assets/images/groundnut.jpg";
import Jowar from "../assets/images/jowar.jpg";
import Jute from "../assets/images/jute.jpg";
import Maize from "../assets/images/maize.jpg";
import Masoor from "../assets/images/masoor.jpg";
import Moong from "../assets/images/moong.jpeg";
import Niger from "../assets/images/niger.jpg";
import Paddy from "../assets/images/paddy.jpg";
import Ragi from "../assets/images/ragi.jpg";
import Rape from "../assets/images/rape.jpg";
import Safflower from "../assets/images/safflower.jpg";
import Sesamum from "../assets/images/sesamum.jpg";
import Soyabean from "../assets/images/soyabean.jpg";
import Sugarcane from "../assets/images/sugarcane.jpg";
import Sunflower from "../assets/images/sunflower.jpg";
import Urad from "../assets/images/urad.jpg";
import Wheat from "../assets/images/wheat.jpg";

import SoilImg from "../assets/icons/soilimg.jpg";
// import Diseaseimg from "../assets/icons/diseaseimg.jpg";
import Priceimg from "../assets/icons/priceimg.jpg";
import Home from "../assets/icons/home.jpg";
import Location from "../assets/icons/location.jpg";

import { GrLinkedin } from "react-icons/gr";
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const content = {
  Crops: [
    { name: "Arhar", icon: Arhar },
    { name: "Bajra", icon: Bajra },
    { name: "Barley", icon: Barley },
    { name: "Copra", icon: Copra },
    { name: "Cotton", icon: Cotton },
    { name: "Gram", icon: Gram },
    { name: "Groundnut", icon: Groundnut },
    { name: "Jowar", icon: Jowar },
    { name: "Jute", icon: Jute },
    { name: "Maize", icon: Maize },
    { name: "Masoor", icon: Masoor },
    { name: "Moong", icon: Moong },
    { name: "Niger", icon: Niger },
    { name: "Paddy", icon: Paddy },
    { name: "Ragi", icon: Ragi },
    { name: "Rape", icon: Rape },
    { name: "Safflower", icon: Safflower },
    { name: "Sesamum", icon: Sesamum },
    { name: "Soyabean", icon: Soyabean },
    { name: "Sugarcane", icon: Sugarcane },
    { name: "Sunflower", icon: Sunflower },
    { name: "Urad", icon: Urad },
    { name: "Wheat", icon: Wheat },
  ],
  landingPage: {
    title: "Ministry of Agriculture & Farmers' Welfare",
    logo: "images/patta.png",
    heading: "KisanCare",
    subheading: "Your Trusted Digital Farming Companion.",
    description:
      "Empowering Farmers with Agricultural Wisdom: KisanCare - Unlock the doors to agricultural enlightenment with KisanCare. Navigate the intricate world of farming effortlessly and empower yourself with agricultural wisdom at your fingertips. From understanding best farming practices to decoding agricultural policies, KisanCare is your go-to source for clarity in the complex world of agriculture.",
    buttons: [
      {
        text: "Signup",
        bgColor: "bg-yellow-500",
        textColor: "text-white",
        hoverColor: "bg-yellow-600",
        focusColor: "focus:ring-yellow-500",
      },
      {
        text: "Farmer",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
      {
        text: "Trader",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
      {
        text: "Inspector",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        hoverColor: "bg-gray-300",
        focusColor: "focus:ring-gray-200",
      },
    ],
    image: "images/lp.jpg",
  },
  hero: {
    firstName: "KisanCare",
    LastName:
      "Empowering Indian Farmers with Cutting-Edge AI & ML: Your Comprehensive Solution for Better Farming Practices, Enhanced Productivity, and Fair Rewards.Feel free to adjust it as needed!",
    btnArray: ["A Programmer", "AI & ML Enthusiast"],
    image: Home,
  },
  about: {
    content:
      "Myself I am Santhosh. A diligent pre-final Computer Science student at VIT Chennai with an immense passion for AI&ML and MERN. Currently I am SAMSUNG PRISM developer. A passionate programmer, highly motivated and quick learner. I am always curious about things and enjoy learning. I like to solve problems and fix errors. I am a detailed oriented person and I keep my goals and tasks organized.",
  },
  aboutus: {
    content1:
      "KisanCare is an innovative project aimed at revolutionizing the way farmers choose crops and make decisions about their farming operations. With the use of cutting-edge technology and machine learning algorithms, KisanCare provides farmers with a comprehensive and accurate picture of their farm's potential. This includes soil analysis, location-based data, and rainfall information, which can be used to determine the most suitable crops for a given area.",
    content2:
      "KisanCare not only provides recommendations on the best crops to plant but also provides farmers with an estimated crop price forecast. This helps farmers make informed decisions about their crop choices, ensuring that they can maximize their profits. Additionally, the crop analytics offered by KisanCare helps farmers track the progress of their crops over time and make adjustments as necessary.",
    content3:
      "The algorithms used by KisanCare are constantly learning and improving, taking into account real-time data and the latest research to provide farmers with the most up-to-date information. This helps to ensure that farmers have access to the most accurate information, reducing the risk of crop failure and increasing the chances of success.",
    content4:
      "KisanCare also offers a user-friendly interface that makes it easy for farmers to access and understand the information they need. Whether you are a seasoned farmer or just starting out, KisanCare has the tools and resources you need to make informed decisions about your crops and farming operations.",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "Report Inaccuracy or Discuss Projects with us",
    social_media: [
      {
        text: "santhosh.raminedi22@gmail.com",
        icon: GrMail,
        link: "mailto:santhosh.raminedi22@gmail.com",
      },
      {
        text: "santhosh.22.11",
        icon: BsInstagram,
        link: "https://www.instagram.com/santhosh.22.11/",
      },
      {
        text: "raminedisanthosh22",
        icon: GrLinkedin,
        link: "https://www.linkedin.com/in/raminedisanthosh22/",
      },
      {
        text: "Santhosh2231",
        icon: BsGithub,
        link: "https://github.com/Santhosh2231",
      },
      {
        text: "Santhosh Raminedi",
        icon: BsFacebook,
        link: "https://www.facebook.com/santhosh.raminedi",
      },
    ],
  },
  predictions: {
    title: "Goals",
    subtitle: "Our Mission",
    solutions_content: [
      {
        org: "Crop prediction based on locality and Seasons",
        logo: Location,
        link: "/cropanalysis",
        work: "Crop prediction based on locality and seasons is a crucial aspect of modern farming. By utilizing local climate data and historical weather patterns, farmers can make informed decisions on which crops to grow, leading to higher yields and improved profitability.",
      },
      {
        org: "Crop prediction based on Soil fertility",
        logo: SoilImg,
        link: "/soilanalysis",
        work: "Agriculture forms a major occupation in countries like India. Hence, achieving good yield in the crops grown by farmers is the major concern. Various environmental factors have a significant impact on the crop yield. One such component that contributes majorly to the crop yield is soil.",
      },
      {
        org: "Crop Price Prediction",
        logo: Priceimg,
        link: "/priceforecast",
        work: "Crop price estimation and evaluation are done to take an intelligent decision before farming a specific type of crop. Predicting the price of a crop will help in taking better decisions which results in minimizing the loss and managing the risk of price fluctuations.",
      },
      {
        org: "Weather-prediction",
        logo: Priceimg,
        link: "/weather",
        work: "Accurate weather predictions are crucial for farmers to make informed decisions on planting and harvesting. By leveraging weather forecasts, farmers can optimize their crop management strategies, reduce the risk of adverse weather conditions, and enhance overall yield and productivity",
      },
      {
        org: "Ai voice Chatbot",
        logo: Priceimg,
        link: "/priceforecast",
        work: "An AI-powered chatbot with voice capabilities offers farmers real-time assistance and expert advice, making it easier to address farming challenges. With natural language processing and voice recognition, farmers can quickly access information, receive personalized recommendations, and manage their agricultural operations more efficiently.",
      },
    ],
  },
};

export default content;
