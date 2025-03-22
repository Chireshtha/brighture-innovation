const services = [
  {
    id: 1,
    slug:"frontend-development",
    title: "Frontend Development",
    overview:
      "We craft beautiful, responsive, and interactive frontend experiences that engage users and elevate your brand presence.",
    keyBenefits: [
      "Pixel-perfect Designs: Crafted with meticulous attention to detail.",
      "Fast Performance: Optimized for speed and interactivity.",
      "Responsive Layouts: Flawless display across all devices.",
      "Engaging UI/UX: Intuitive and immersive user experiences.",
    ],
    technologies: [
      "React.js, Next.js, Angular, Vue.js",
      "HTML5, CSS3, Bootstrap, Tailwind CSS",
      "JavaScript (ES6+), TypeScript",
      "Material UI, Ant Design",
    ],
    ctaText: "Hire Frontend Experts",
    image: "/Images/image138.jpg",
    para1: "Boost user engagement and conversion rates with dynamic, high-performance, and accessible frontend solutions.",
    para2: "Delivering flawless user experiences with high-speed performance and precision design on every device"
  },
  {
    id: 2,
    slug:"fullstack-development",
    title: "Fullstack Development",
    overview:
      "We offer comprehensive fullstack development services, integrating robust backend systems with compelling frontend designs. Our solutions ensure that your application is scalable, secure, and fully integrated from end to end.",
    keyBenefits: [
      "End-to-End Integration: Seamless connection between frontend and backend.",
      "Scalable Architecture: Built to grow with your business.",
      "Robust Security: Comprehensive protection at every layer.",
      "Efficient Performance: Optimized for speed and reliability.",
    ],
    technologies: [
      "MERN Stack: MongoDB, Express.js, React.js, Node.js",
      "LAMP Stack: Linux, Apache, MySQL, PHP (Laravel)",
      "Python (Flask, Django), GraphQL, REST APIs",
    ],
    ctaText: "Build Your Fullstack App",
    image: "/Images/image143.jpg",
    para1: "Deliver complete, high-performance applications that meet modern business needs and drive efficiency across processes.",
    para2: "Elegant, responsive, and powerful — crafted for modern users and seamless performance."
  },
  {
    id: 3,
    slug:"webapp-development",
    title: "Web App Development",
    overview:
      "Our custom web application development services are designed to build scalable and secure apps that offer an outstanding user experience. We tailor every solution to your unique business requirements.",
    keyBenefits: [
      "Custom Functionality: Tailored solutions that meet your unique needs.",
      "High Performance: Fast, smooth, and reliable applications.",
      "Secure Data Handling: Robust security measures and best practices.",
      "User-Centric Experience: Designed with the end-user in mind.",
    ],
    technologies: [
      "Frontend: React.js, Angular, Vue.js, Bootstrap, Tailwind CSS",
      "Backend: PHP (Laravel), Node.js, Python (Django, Flask)",
      "Database: MySQL, PostgreSQL, MongoDB, Firebase, Redis",
    ],
    ctaText: "Get a Web App Quote",
    image: "/Images/image146.jpg",
    para1: "Transform your business with a powerful web application that grows with your company and adapts to evolving market needs.",
    para2: "Optimized solutions built for agility, reliability, and pixel-perfect responsiveness."
  },
  {
    id: 4,
    slug:"uiux-design",
    title: "UI/UX Design",
    overview:
      "Transform your digital interfaces with our UI/UX design services. We create intuitive, engaging, and user-centric designs that not only look great but also enhance the overall user journey.",
    keyBenefits: [
      "Intuitive Interfaces: Designs that are easy to navigate.",
      "Engaging Visuals: Aesthetically pleasing layouts that capture attention.",
      "User-Centered Approach: Focused on delivering optimal experiences.",
      "Iterative Refinement: Continuous testing and enhancement for perfection.",
    ],
    technologies: [
      "Figma, Adobe XD, Sketch, InVision",
      "Wireframing & Prototyping",
      "User Research & Testing",
      "Accessibility & Usability",
    ],
    ctaText: "Design Your Product",
    image: "/Images/image135.jpg",
    para1: "Enhance user satisfaction and engagement with designs that balance aesthetics with functionality.",
    para2: "Future-proof designs and high-performance apps that adapt beautifully to all screen sizes.",
    background: 'linear-gradient(135deg, #3e4149, #222428)',
    titleClass: 'text-light'
  },
  {
    id: 5,
    slug:"game-development",
    title: "Game Development",
    overview:
      "Bring your gaming vision to life with our immersive and interactive game development services. We combine cutting-edge technology with creative design to produce engaging games across platforms.",
    keyBenefits: [
      "Immersive Experiences: Create captivating, interactive game worlds.",
      "High-Performance Graphics: Optimized for smooth gameplay across platforms.",
      "Innovative Mechanics: Engage users with creative and unique gameplay features.",
      "Cross-Platform Compatibility: Develop games that work on multiple devices.",
    ],
    technologies: [
      "Unity, Unreal Engine, Phaser",
      "2D & 3D Game Design",
      "Multiplayer & Single-player",
      "AR/VR Integration",
    ],
    ctaText: "Build Your Game",
    image: "/Images/image128.jpg",
    para1: "Engage your audience with captivating game experiences that are innovative, interactive, and tailored to your creative vision.",
    para2: "Immersive, high-performance, and cross-platform games that captivate players across devices",
    background: '#1F4E6C',
    titleClass: 'text-light'
  },
  {
    id: 6,
    slug:"ecommerce-solutions",
    title: "E-commerce Solutions",
    overview:
      "Launch an online store that is both visually appealing and functionally robust. Our e-commerce solutions are designed to deliver smooth shopping experiences, secure transactions, and scalable growth.",
    keyBenefits: [
      "Conversion-Optimized Design: Engaging interfaces that drive sales.",
      "Seamless Checkout: Smooth and secure payment processes.",
      "Scalable Infrastructure: Ready to support growing product catalogs.",
      "User-Friendly Navigation: Intuitive shopping experiences for all users.",
    ],
    technologies: [
      "Platforms: WooCommerce, Shopify, Magento",
      "Custom Storefronts: React.js, Next.js",
      "Payment Gateways: Stripe, Razorpay, PayPal",
    ],
    ctaText: "Launch Your Store",
    image: "/Images/image133.jpg",
    para1: "Drive online sales and provide a secure, engaging shopping experience that turns visitors into loyal customers.",
    para2: "Smart, user-first solutions that combine beauty, speed, and accessibility."
  },
  {
    id: 7,
    slug:"seo-optimization",
    title: "SEO Optimization",
    overview:
      "Improve your search engine rankings with our proven SEO optimization services. We focus on both technical and content strategies to enhance your website’s visibility and drive organic traffic.",
    keyBenefits: [
      "Higher Search Rankings: Boost your visibility on search engines.",
      "Increased Organic Traffic: Attract more visitors naturally.",
      "Comprehensive On-Page Optimization: Fine-tune every aspect for SEO.",
      "Continuous Improvement: Regular audits and updates for sustained success.",
    ],
    technologies: [
      "On-Page & Off-Page SEO",
      "Technical SEO & Speed Optimization",
      "Keyword Research, Content Strategy",
      "Local SEO & Google My Business",
    ],
    ctaText: "Optimize Your Site",
    image: "/Images/image121.jpeg",
    para1: "Boost your online presence, drive organic growth, and convert visitors into customers through expert SEO techniques.",
    para2: "Seamless functionality blended with stunning design, built to perform effortlessly."
  },
  {
    id: 8,
    slug:"digital-marketing",
    title: "Digital Marketing",
    overview:
      "Grow your brand and reach your target audience with our comprehensive digital marketing strategies. We combine data-driven insights with creative campaigns to maximize your online presence.",
    keyBenefits: [
      "Data-Driven Strategies: Targeted campaigns for maximum ROI.",
      "Multi-Channel Outreach: Engage audiences across social, search, and email.",
      "Measurable Results: Clear analytics to track performance.",
      "Brand Growth: Enhance visibility and build lasting customer relationships.",
    ],
    technologies: [
      "Google Ads, Facebook Ads, LinkedIn Marketing",
      "SEO Tools: SEMrush, Ahrefs, Moz",
      "Analytics: Google Analytics, Search Console",
    ],
    ctaText: "Boost Your Brand",
    image: "/Images/image126.jpg",
    para1: "Achieve measurable results and a higher return on investment (ROI) by driving targeted traffic and conversions.",
    para2: "Modern, secure, and scalable — engineered for excellence on any device."
  },
  {
    id: 9,
    slug:"cloud-solutions",
    title: "Cloud Solutions",
    overview:
      "Harness the power of the cloud with our scalable and secure cloud solutions. We design and implement cloud architectures that improve agility, reduce costs, and ensure business continuity.",
    keyBenefits: [
      "Scalable Infrastructure: Cloud setups that grow with your needs.",
      "Cost Efficiency: Optimized for performance and budget.",
      "Secure Deployment: Robust security and compliance.",
      "Agile Management: Fast and flexible cloud operations.",
    ],
    technologies: [
      "AWS, Google Cloud, Microsoft Azure",
      "Cloud Migration & Architecture",
      "DevOps & CI/CD Pipelines",
      "Cloud Security & Monitoring",
    ],
    ctaText: "Get Cloud Ready",
    image: "/Images/image130.jpg",
    para1: "Modernize your IT infrastructure and achieve greater flexibility and efficiency with robust cloud solutions.",
    para2: "Crafting visually stunning and technically superior experiences across all devices.",
    background: 'linear-gradient(135deg, #03257c, #031863)',
    borderRadius: '300px',
    titleClass:"text-light"
  },
  {
    id: 10,
    slug:"devops-services",
    title: "DevOps Services",
    overview:
      "Streamline your software delivery with our DevOps services. We bring automation, continuous integration, and continuous deployment practices to enhance software delivery and reliability.",
    keyBenefits: [
      "Automated Pipelines: Streamline deployment with CI/CD.",
      "Rapid Deployment: Accelerate time-to-market.",
      "Consistent Releases: Reliable, repeatable software delivery.",
      "Proactive Monitoring: Continuous oversight and performance tuning.",
    ],
    technologies: [
      "Jenkins, GitHub Actions, GitLab CI/CD",
      "Docker, Kubernetes",
      "Terraform, Ansible",
      "Monitoring: Grafana, Prometheus",
    ],
    ctaText: "Automate Deployment",
    image: "/Images/image149.jpg",
    para1: "Accelerate your time-to-market while ensuring high-quality, consistent software releases through modern DevOps practices.",
    para2: "Seamless deployments, automated workflows, and secured infrastructures to accelerate innovation and growth."
  },
  {
    id: 11,
    slug:"api-integration",
    title: "API Integration",
    overview:
      "Enhance your system’s functionality with our API integration services. We ensure seamless communication between your application and third-party services, creating a unified digital ecosystem.",
    keyBenefits: [
      "Seamless Connectivity: Effortless integration with third-party services.",
      "Real-Time Data Exchange: Fast and reliable information flow.",
      "Secure Integrations: Authentication and encryption built-in.",
      "Rapid Implementation: Quick and efficient setup and customization.",
    ],
    technologies: [
      "REST, GraphQL",
      "OAuth, JWT Authentication",
      "Payment APIs, CRM, ERP Integrations",
      "Monitoring Tools (Grafana, Prometheus)",
    ],
    ctaText: "Integrate Your API",
    image: "/Images/image136.jpg",
    para1: "Streamline workflows and expand your application’s capabilities by connecting to the best services and data sources available.",
    para2: "Streamlined workflows, real-time data synchronization, and custom integrations to boost operational efficiency.",
    background: 'linear-gradient(135deg, #1e3b73 ,rgb(9, 31, 90))',
    titleClass:"text-light",
    borderRadius: "300px"
  },
  {
    id: 12,
    slug:"ai-machine-learning",
    title: "AI & Machine Learning",
    overview:
      "Transform your business with AI and machine learning solutions that drive automation, predictive analytics, and data-driven decision-making. Our tailored AI strategies bring cutting-edge technology to your fingertips.",
    keyBenefits: [
      "Intelligent Automation: Use AI to streamline complex processes.",
      "Predictive Analytics: Gain insights and forecast trends.",
      "Customized Models: Tailored machine learning solutions for your business.",
      "Innovative Solutions: Leverage cutting-edge technology for competitive advantage.",
    ],
    technologies: [
      "Python, TensorFlow, PyTorch, Scikit-learn",
      "Natural Language Processing, Computer Vision",
      "AI Chatbots, Recommendation Systems",
    ],
    ctaText: "Build AI Solutions",
    image: "/Images/image151.jpg",
    para1: "Unlock valuable insights and automate complex processes to boost efficiency and innovation across your business.",
    para2: "Compelling designs combined with optimized functionality to enhance user satisfaction.",
    background: '#0B203D',
    titleClass:"text-light",
    borderRadius: '300px'
  },
  {
    id: 13,
    slug:"iot-solutions",
    title: "IoT Solutions",
    overview:
      "Connect the physical and digital worlds with our IoT solutions. We design and implement systems that enable real-time data collection, monitoring, and automation across devices.",
    keyBenefits: [
      "Real-Time Monitoring: Seamlessly connect devices for instant data.",
      "Interconnected Systems: Integrated solutions for smart automation.",
      "Scalable Integration: Expandable systems that grow with your business.",
      "Enhanced Efficiency: Optimize operations through data-driven insights.",
    ],
    technologies: [
      "MQTT, AWS IoT, Google IoT Core",
      "Sensor Integration, IoT App Development",
      "Security & Compliance",
    ],
    ctaText: "Build IoT Systems",
    image: "/Images/image152.jpg",
    para1: "Enhance operational efficiency and decision-making by leveraging data from connected devices.",
    para2: "Intelligent device integration, secure data flow, and real-time analytics to optimize business operations.",
    borderRadius: '300px'
  },
  {
    id: 14,
    slug:"automation-scripting",
    title: "Automation & Scripting",
    overview:
      "Boost productivity by automating repetitive tasks and workflows with our custom scripting and automation solutions. We help you streamline operations, reduce errors, and save time.",
    keyBenefits: [
      "Process Optimization: Automate repetitive tasks for greater efficiency.",
      "Error Reduction: Minimize manual errors with robust scripts.",
      "Time-Saving Solutions: Free up valuable resources with automation.",
      "Seamless Integration: Connect various systems and workflows effortlessly.",
    ],
    technologies: [
      "Python, Shell, PowerShell",
      "Task & Workflow Automation",
      "Web Scraping, Data Extraction, ETL Pipelines",
      "Robotic Process Automation (RPA)",
    ],
    ctaText: "Automate Tasks",
    image: "/Images/image153.png",
    para1: "Increase operational efficiency and free up valuable resources by automating routine processes.",
    para2: "Automated workflows, custom scripts, seamless integrations, and improved efficiency for modern businesses.",
    background:'#19294B',
    titleClass:'text-light',
    borderRadius: '300px'
  },
  {
    id: 15,
    slug:"qa-testing",
    title: "QA & Testing",
    overview:
      "Ensure your software is reliable, high-performing, and bug-free with our comprehensive QA and testing services. We employ both manual and automated testing methods for complete coverage.",
    keyBenefits: [
      "Rigorous Testing: Ensure your software is bug-free and high-performing.",
      "Automated Testing: Leverage tools for faster, more reliable results.",
      "Performance Optimization: Identify and fix performance bottlenecks.",
      "User Satisfaction: Deliver quality products that exceed expectations.",
    ],
    technologies: [
      "Manual & Automated Testing",
      "API Testing (Postman, Swagger)",
      "Performance Testing (JMeter, LoadRunner)",
      "Security & Compliance Testing",
    ],
    ctaText: "Test Your Software",
    image: "/Images/image154.jpeg",
    para1: "Deliver robust, user-ready software with a focus on quality, performance, and user satisfaction.",
    para2: "Bug-free software, enhanced performance, security validation, and user-friendly experiences",
  },
  {
    id: 16,
    slug:"cyber-security-solutions",
    title: "Cybersecurity Solutions",
    overview:
      "Protect your digital assets with our advanced cybersecurity services. We implement comprehensive security measures to detect vulnerabilities, mitigate risks, and ensure compliance with industry standards.",
    keyBenefits: [
      "Comprehensive Protection: Guard against evolving threats.",
      "Proactive Risk Management: Continuous monitoring and rapid response.",
      "Data Privacy Assurance: Secure handling of sensitive information.",
      "Compliance-Driven: Meets industry standards and regulations.",
    ],
    technologies: [
      "Penetration Testing, Vulnerability Assessments",
      "Firewall, Network Security, SSL",
      "Data Encryption, GDPR Compliance",
      "Cloud Security Solutions",
    ],
    ctaText: "Secure Your Business",
    image: "/Images/image155.png",
    para1: "Safeguard your business, build customer trust, and maintain compliance with robust and proactive cybersecurity strategies.",
    para2: "Balancing form and function with designs that perform exceptionally on all devices."
  },
  {
    id: 17,
    slug:"freelance",
    title: "Freelance",
    overview:
      "Access top-tier freelance talent and dedicated remote teams for flexible and scalable development solutions. Our network of experts covers a wide range of domains to meet your project needs.",
    keyBenefits: [
      "Flexible Engagement: Hire experts on-demand.",
      "Cost-Effective Solutions: High-quality work without long-term overhead.",
      "Diverse Expertise: Access to a broad range of skill sets.",
      "Rapid Scalability: Quickly adjust team size based on project needs.",
    ],
    technologies: [
      "Full-stack Development, UI/UX Design, Digital Marketing",
      "Web & Mobile App Development",
      "API Integration, Cloud Services",
    ],
    ctaText: "Hire Developers",
    image: "/Images/image157.png",
    para1: "Scale your team quickly and efficiently without the overhead of full-time hires, ensuring expert support when you need it most.",
    para2: "Tailored for impact — blending aesthetics with unmatched performance and responsiveness."
  },
  {
    id: 18,
    slug:"it-consultation",
    title: "IT Consultation",
    overview:
      "Gain expert insights and strategic guidance with our IT consultation services. We help you navigate complex technology decisions and align your IT strategy with your business objectives.",
    keyBenefits: [
      "Expert Guidance: Strategic advice from industry professionals.",
      "Tailored Solutions: Custom recommendations for your business.",
      "Clear Roadmaps: Actionable plans for digital transformation.",
      "Innovative Insights: Stay ahead with the latest tech trends.",
    ],
    technologies: [
      "Business Analysis, Tech Consultation",
      "Architecture Design, Roadmapping",
      "Digital Transformation Strategy",
    ],
    ctaText: "Get a Free Consultation",
    image: "/Images/image158.png",
    para1: "Empower your business with clear, actionable advice that drives technology adoption and enhances overall efficiency.",
    para2: "Innovative designs paired with cutting-edge tech to deliver seamless user experiences."
  }
];

export default services;
