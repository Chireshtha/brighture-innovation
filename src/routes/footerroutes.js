import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const footerroutes = {
    companyLinks: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
        { name: "Careers", path: "/careers" }
    ],
    aboutLinks: [
        {name: "Our Story", path:"/ourstory"},
        {name: "Mission & Vision", path:"/mission-vission"},
        {name: "Team", path:"/team"},
        {name: "Blog", path:"/blog"},
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
        {icon: <FaFacebook />, path:"https://www.facebook.com/"},
        {icon: <FaTwitter />, path:"https://www.twitter.com/"},
        {icon: <FaLinkedin />, path:"https://www.linkedin.com/"},
        {icon: <FaInstagram />, path:"https://www.instagram.com/"},
        {icon: <FaYoutube />, path:"https://www.youtube.com/"},
        {icon: <FaFacebook />, path:"https://www.facebook.com/"},
     ]
}

export default footerroutes;