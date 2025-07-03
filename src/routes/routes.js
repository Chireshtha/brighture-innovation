import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import CareersPage from '../pages/CareersPage';
import ServicePage from '../pages/ServicePage';
import ApplyJob from '../components/forms/ApplyJob';
import SubscribePageForm from '../components/forms/SubscribePageForm';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';



const routes = createBrowserRouter([
    {
        path: "/", element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/services/:slug", element: <ServicePage /> },
            { path: "/blog", element: <BlogPage /> },
            { path: "/career/", element: <CareersPage /> },
            { path: "/contact", element: <ContactPage /> },
            { path: "/applyjob/:slug", element: <ApplyJob /> },
            { path: "/subscribe", element: <SubscribePageForm /> }
        ]
    }
]);





export default routes