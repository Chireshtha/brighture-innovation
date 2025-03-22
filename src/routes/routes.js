import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import CareersPage from '../pages/CareersPage';
import ServicePage from '../pages/ServicePage';
 


const routes = [
    {path:"/", element:<HomePage />},
    {path:"/about", element:<AboutPage />},
    {path:"/services/:slug", element:<ServicePage />},
    {path:"/portfolio", element:<PortfolioPage />},
    {path:"/blog", element:<BlogPage />},
    {path:"/contact", element:<ContactPage />},
    {path:"/career", element:<CareersPage />}
]



export default routes