import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const footerroutes = {
    companyLinks: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
        { name: "Career", path: "/career" }
    ],
    aboutLinks: [
        {name: "Our Story", path:"/ourstory"},
        {name: "Mission & Vision", path:"/mission-vission"},
        {name: "Team", path:"/team"},
        {name: "Testimonials", path:"/testimonials"},
        {name: "News & Updates", path:"/news-updates"},
    ],

    supportLinks : [
        {name: "Help Center", path:"/helpcenter"},
        {name: "FAQs", path:"/faqs"},
        {name: "Terms & Conditions", path:"/terms-conditions"},
        {name: "Privacy Policy", path:"/privacy-policy"},
        {name: "Refund Policy", path:"/refund-policy"},
        {name: "Contact Support", path:"/contact-support"},
     ],

     addressLink : [
        {icon: <FaFacebook />, path:"https://www.facebook.com/", color:"#3b5998"},
        {icon: <FaTwitter />, path:"https://www.twitter.com/", color:"#1da1f2"},
        {icon: <FaLinkedin />, path:"https://www.linkedin.com/", color:"#0077b5"},
        {icon: <FaInstagram />, path:"https://www.instagram.com/", color:"#e1306c"},
        {icon: <FaYoutube />, path:"https://www.youtube.com/", color:"#ff0000"},
     ]
}

export default footerroutes;