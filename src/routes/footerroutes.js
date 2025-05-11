import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const footerroutes = {
    companyLinks: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
        { name: "Career", path: "/career" }
    ],
    aboutLinks: [
        {name: "Our Story", path:"/about#ourstory"},
        {name: "Mission", path:"/about#mission"},
        {name: "Vision", path:"/about#vision"},
        {name: "Testimonials", path:"/#testimonials"},
        {name: "News & Updates", path:"/blog#news-updates"},
    ],

    supportLinks : [
        {name: "Help Center", path:"/contact#help-center"},
        {name: "FAQs", path:"/about#faqs"},
        {name: "Terms & Conditions", path:"/career#terms-conditions"},
        {name: "Privacy Policy", path:"/career#privacy-policy"},
        {name: "Contact Support", path:"/contact#contact-form"},
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