import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import CareersPage from '../pages/CareersPage';
import ServicePage from '../pages/ServicePage';
import ApplyJob from '../pages/ApplyJob';



const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/services/:slug", element: <ServicePage /> },
    { path: "/portfolio", element: <PortfolioPage /> },
    { path: "/blog", element: <BlogPage /> },
    { path: "/career/", element: <CareersPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/applyjob/:slug", element: <ApplyJob />}
]

export default routes