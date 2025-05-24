// Define the structure of our translations
export interface Translations {
  [key: string]: {
    [key: string]: string | string[] | Record<string, any> | any[]
  }
}

// Define the Project interface used in the ProjectsSection
export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

// Define the Reference interface used in the FooterSection
export interface Reference {
  name: string;
  title: string;
  contact: string;
}

// Define all the translations for both languages
export const translations: Translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      volunteer: "Volunteer",
      contact: "Contact",
    },

    // Hero section
    hero: {
      title: "Obai Ahmed",
      subtitle: "Data Scientist | Machine Learning Engineer | AI Enthusiast",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      stats: {
        languages: "Programming Languages",
        internships: "Internships",
        projects: "Projects",
        leadership: "Leadership Roles",
      },
    },

    // About section
    about: {
      title: "About Me",
      subtitle: "Transforming Data into Actionable Insights",
      paragraph1:
        "I'm a Data Scientist with a Bachelor's in Computer Science (Honours) specializing in Data Science from Multimedia University.",
      
      paragraph2: "With professional experience at Brithol Michcoma and INVWSTORS GP LDA, I've developed expertise in data analysis, system optimization, and network infrastructure. My work spans from analyzing networking data patterns to developing comprehensive dashboards for logistics operations.",
      paragraph3: "I'm passionate about applying machine learning and AI to solve real-world problems, with a proven track record in implementing CNNs, LSTMs, and developing predictive models.",
      sectionHeadings: {
        journey: "My Journey",
        careerHighlights: "Career Highlights",
        techStack: "Tech Stack",
        careerGoals: "Career Goals",
        personalAttributes: "Personal Attributes"
      },
      highlights: [
        {
          id: "education",
          title: "Academic Excellence",
          description: "Second Class Honours in Computer Science with Data Science specialization from Multimedia University."
        },
        {
          id: "professional",
          title: "Professional Experience",
          description: "Data Analyst at Brithol Michcoma and IT System Analyst at INVWSTORS GP LDA, with hands-on experience in data analysis and system optimization."
        },
        {
          id: "skills",
          title: "Technical Expertise",
          description: "Proficient in Python, Java, C++, R, JavaScript, and various data analysis & visualization tools including TensorFlow, PyTorch, and scikit-learn."
        }
      ],
      careerGoals: [
        "Lead innovative data science projects in AI and machine learning",
        "Develop cutting-edge solutions for complex business problems",
        "Contribute to the advancement of Arabic Sign Language recognition technology"
      ],
      personalAttributes: {
        analyticalThinker: {
          title: "Analytical Thinker",
          description: "Strong ability to analyze complex data patterns and derive meaningful insights"
        },
        multilingual: {
          title: "Multilingual",
          description: "Fluent in Arabic and English, Intermediate in Portuguese"
        },
        technicalExpert: {
          title: "Technical Expert",
          description: "Extensive experience with multiple programming languages and tools"
        },
        problemSolver: {
          title: "Problem Solver",
          description: "Proven track record in implementing effective solutions"
        }
      },
      contactCTA: "Let's connect and discuss potential collaborations"
    },

    // Skills section
    skills: {
      title: "Skills",
      subtitle: "Comprehensive expertise in Data Science and Software Development",
      tabs: {
        technical: "Technical Skills",
        soft: "Soft Skills",
      },
      categories: {
        technicalSkills: "Technical Skills",
        programmingLanguages: "Programming Languages",
        toolsFrameworks: "Tools & Frameworks",
      },
      softSkills: {
        communication: {
          name: "Communication",
          description: "Effective multilingual communication in Arabic, English, and Portuguese",
        },
        criticalThinking: {
          name: "Critical Thinking",
          description: "Analytical approach to problem-solving and decision-making",
        },
        timeManagement: {
          name: "Time Management",
          description: "Efficient prioritization and delivery of multiple concurrent projects",
        },
        creativity: {
          name: "Creative Problem Solving",
          description: "Innovative approaches to technical and analytical challenges",
        },
        leadership: {
          name: "Leadership",
          description: "Experience in leading technical teams and mentoring junior developers",
        },
        problemSolving: {
          name: "Problem Solving",
          description: "Strong analytical and solution-oriented approach",
        },
        adaptability: {
          name: "Adaptability",
          description: "Quick learner with experience in diverse technical environments",
        },
        teamwork: {
          name: "Teamwork",
          description: "Proven ability to collaborate in cross-functional teams",
        },
      },
      hoverMessage: "Hover over skill bars for more details",
    },

    // Projects section
    projects: {
      title: "Projects",
      subtitle: "Innovative solutions with measurable impact",
      showMore: "Show More",
      showLess: "Show Less",
      overview: "Overview",
      challenges: "Challenges",
      solutions: "Solutions",
      results: "Results",
      featuredProject: "Featured Project",
      
      projectList: [
        {
          id: "arabic-sign-language",
          title: "Arabic Sign Language Comparative Analysis",
          badge: "Deep Learning",
          description: "Advanced sign language recognition system using CNNs and LSTMs with transfer learning.",
          tags: ["CNNs", "LSTMs", "Transfer Learning", "Image Processing", "Deep Learning"],
          detailedDescription: "Developed a sophisticated system for Arabic sign language recognition using deep learning techniques. The project focused on improving recognition accuracy through the application of Convolutional Neural Networks (CNNs) and Long Short-Term Memory networks (LSTMs).",
          challenges: [
            "Complex gesture recognition in real-time",
            "Limited dataset availability for Arabic sign language",
            "Need for high accuracy in diverse lighting conditions"
          ],
          solutions: [
            "Implemented transfer learning to leverage pre-trained models",
            "Enhanced model architecture with combined CNN-LSTM approach",
            "Applied advanced image processing techniques for better feature extraction"
          ],
          results: [
            "Significantly improved recognition accuracy",
            "Robust performance across different environmental conditions",
            "Created a scalable solution for sign language recognition"
          ],
          githubUrl: "https://github.com/yourusername/arabic-sign-language"
        },
        {
          id: "fifa-prediction",
          title: "FIFA 2022 Player Release Clause Prediction",
          badge: "Machine Learning",
          description: "Predictive modeling system for FIFA player release clauses using multi-linear regression.",
          tags: ["Regression Analysis", "Python", "Data Wrangling", "Statistical Analysis"],
          detailedDescription: "Built a sophisticated prediction model using multi-linear regression to accurately forecast FIFA player release clauses. The project involved extensive feature engineering and data analysis.",
          challenges: [
            "Complex feature relationships",
            "Data quality and consistency issues",
            "Multiple dependent variables affecting predictions"
          ],
          solutions: [
            "Implemented advanced feature engineering techniques",
            "Developed robust data cleaning pipelines",
            "Created comprehensive statistical analysis framework"
          ],
          results: [
            "High prediction accuracy for player valuations",
            "Identified key factors influencing release clauses",
            "Created reusable prediction framework"
          ],
          githubUrl: "https://github.com/yourusername/fifa-prediction"
        },
        {
          id: "car-detection",
          title: "Real-Time Car Detection System",
          badge: "Computer Vision",
          description: "Implementation of YOLO algorithm for real-time car detection in video streams.",
          tags: ["YOLO", "OpenCV", "Python", "Object Detection"],
          detailedDescription: "Developed a real-time car detection system using the YOLO (You Only Look Once) algorithm and OpenCV. The system processes video streams to identify and track vehicles in real-time.",
          challenges: [
            "Real-time processing requirements",
            "Accuracy in various lighting conditions",
            "Multiple object tracking"
          ],
          solutions: [
            "Optimized YOLO implementation for real-time performance",
            "Enhanced detection accuracy through model fine-tuning",
            "Implemented efficient tracking algorithms"
          ],
          results: [
            "Achieved real-time detection performance",
            "High accuracy in various environmental conditions",
            "Successful multiple vehicle tracking"
          ],
          githubUrl: "https://github.com/yourusername/car-detection"
        },
        {
          id: "covid-forecast",
          title: "COVID-19 Seasonal Impact Forecasting",
          badge: "Data Science",
          description: "Predictive modeling for COVID-19 infection trends using supervised learning techniques.",
          tags: ["Machine Learning", "Time Series Analysis", "Python", "Predictive Modeling"],
          detailedDescription: "Developed predictive models to forecast COVID-19 infection trends considering seasonal factors. The project utilized supervised learning techniques to analyze and predict infection patterns.",
          challenges: [
            "Complex temporal dependencies",
            "Multiple influencing factors",
            "Data reliability and consistency"
          ],
          solutions: [
            "Implemented advanced time series analysis",
            "Developed comprehensive feature engineering pipeline",
            "Created robust data validation framework"
          ],
          results: [
            "Accurate prediction of infection trends",
            "Identified key seasonal factors",
            "Provided valuable insights for healthcare planning"
          ],
          githubUrl: "https://github.com/yourusername/covid-forecast"
        },
        {
          id: "sentiment-analysis",
          title: "Sentiment Analysis Tool for E-commerce",
          badge: "NLP",
          description: "Advanced sentiment analysis system for e-commerce platforms using RNNs and NLP.",
          tags: ["RNNs", "NLP", "Sentiment Classification", "Deep Learning", "Python"],
          detailedDescription: "Developed a sophisticated sentiment analysis tool for e-commerce platforms to analyze customer feedback and reviews. The system utilizes Recurrent Neural Networks (RNNs) and Natural Language Processing techniques for accurate sentiment classification.",
          challenges: [
            "Processing large volumes of customer reviews and feedback",
            "Handling multiple languages and dialects",
            "Real-time sentiment analysis requirements"
          ],
          solutions: [
            "Implemented RNN architecture for sequential text processing",
            "Applied advanced NLP techniques for text preprocessing",
            "Developed efficient classification algorithms"
          ],
          results: [
            "Achieved high accuracy in sentiment classification",
            "Successfully processed multilingual feedback",
            "Improved customer experience through real-time insights"
          ],
          githubUrl: "https://github.com/yourusername/sentiment-analysis"
        },
        {
          id: "adult-diet-analysis",
          title: "Adult Diet Analysis",
          badge: "Data Analysis",
          description: "Comprehensive analysis of adult health patterns in the USA using Tableau for visualization and insights.",
          tags: ["Tableau", "Data Visualization", "Healthcare Analytics", "Statistical Analysis"],
          detailedDescription: "Analyzed dataset from data.world focusing on adults' diet, physical activity, and weight status from the Behavioural Risk Factor Surveillance System. The project examined obesity patterns in the United States and their correlation with various factors.",
          challenges: [
            "Complex multi-variable health data integration",
            "Identifying meaningful correlations between lifestyle factors",
            "Creating clear visualizations for complex health relationships"
          ],
          solutions: [
            "Developed comprehensive Tableau dashboards for data visualization",
            "Implemented statistical analysis to identify key patterns",
            "Created interactive filters for demographic exploration"
          ],
          results: [
            "Identified key patterns in obesity distribution",
            "Discovered correlations between diet and physical activity",
            "Generated actionable insights for health interventions"
          ]
        },
        {
          id: "eurovision-analysis",
          title: "Eurovision Song Contest Visualization (1998-2012)",
          badge: "Data Visualization",
          description: "Interactive Tableau dashboard analyzing Eurovision Song Contest trends and patterns from 1998 to 2012.",
          tags: ["Tableau", "Time Series Analysis", "Music Analytics", "Interactive Dashboard"],
          detailedDescription: "Created a comprehensive visualization project analyzing Eurovision Song Contest data, exploring musical trends, regional competitiveness, and success factors across European countries.",
          challenges: [
            "Complex time series data analysis",
            "Multiple regional comparisons",
            "Identifying success factors across different years"
          ],
          solutions: [
            "Built interactive dashboards with multiple worksheets",
            "Implemented advanced table calculations",
            "Created regional comparison visualizations"
          ],
          results: [
            "Revealed musical trend changes over the decade",
            "Identified home ground advantage patterns",
            "Mapped regional success distribution"
          ]
        },
        {
          id: "tobacco-demographics",
          title: "Tobacco Use Demographics Analysis in USA",
          badge: "Geographic Analysis",
          description: "Geographical analysis of tobacco use patterns across US states using advanced visualization techniques.",
          tags: ["Tableau", "Geographic Visualization", "Demographics", "Health Analytics"],
          detailedDescription: "Conducted an in-depth analysis of tobacco use demographics across the United States, focusing on cigarette smoking status, prevalence by demographics, smoking frequency, and quit attempts.",
          challenges: [
            "Complex demographic data integration",
            "Regional pattern identification",
            "Creating clear geographic visualizations"
          ],
          solutions: [
            "Developed interactive geographical maps",
            "Implemented Shaffer's 4Cs design principles",
            "Created comprehensive state-by-state comparisons"
          ],
          results: [
            "Identified high tobacco use regions (Kentucky, Wyoming, Wisconsin, West Virginia)",
            "Discovered regional patterns showing higher usage in Southern states",
            "Created insightful geographical visualizations following design principles"
          ]
        }
      ],

      // Project details
      sportsAnalytics: {
        description:
          "Comprehensive sports analytics dashboard for football match analysis and player performance tracking.",
        detailedDescription:
          "Implemented an interactive Power BI dashboard for the Asian Football Confederation (AFC) to analyze football match statistics, player performance, and team metrics. The solution aggregates data from multiple API endpoints, transforming and visualizing it in user-friendly, dynamic reports.",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiOTBkZTJmYTgtYzNlOC00YmY0LWJmN2ItNjY2ODU0NzM4MDQyIiwidCI6IjdlMGI1ZmNmLTEyYzQtNGVmZi05NmI2LTQ2NjRmMjVkYzdkYSIsImMiOjEwfQ%3D%3D",
        challenges: {
          1: "Multiple Data Sources & Formats: Needed to integrate and transform data from different API endpoints (Fixtures, Players) with varying structures.",
          2: "Manual Refresh Process: Required a secure, manual refresh approach due to network constraints and API access limitations.",
          3: "Security Constraints: Dashboard needed to be publicly accessible, yet the underlying data source had to remain protected within the organization's network.",
          4: "Data Consistency & Accuracy: Ensuring that team, player, and match information remained synchronized across various tables and pages.",
        },
        solutions: {
          1: "Robust ETL & Data Modeling: Created a well-defined schema and used Power Query to clean, transform, and unify match/players data into structured tables (Fixtures, Teams, Opponents, Players).",
          2: "Interactive Visualizations: Built dedicated pages (Results, Goals, Positions, Teams Map, Players Map, Tables) with custom filters (Matches, Teams, Players) for granular data exploration.",
          3: "Security & Access Control: Deployed a public dashboard link while restricting API/data source access to the internal network, striking a balance between openness and security.",
          4: "Documentation & Maintenance Plan: Provided clear project documentation, including data schemas, transformation steps, and a manual refresh procedure to maintain data integrity.",
        },
        results: {
          1: "Enhanced Decision-Making: AFC stakeholders can easily explore performance trends, player statistics, and match outcomes, leading to more informed strategic decisions.",
          2: "Improved Data Accessibility: The dashboard centralizes key metrics and allows for quick, intuitive filtering and analysis across teams, tournaments, and timeframes.",
          3: "Scalable Foundation: The modular data model and clear documentation enable future expansions (e.g., automated refresh with a data gateway, adding more competitions).",
          4: "Positive Stakeholder Feedback: The dashboard's user-friendly interface and comprehensive coverage of AFC data garnered strong acceptance among non-technical and technical users alike.",
        },
      },

      financialReporting: {
        description: "Automated financial reporting system using Python and Microsoft Fabric for streamlined data processing.",
        detailedDescription:
          "Built an end-to-end automation solution for financial reporting that extracts data from multiple sources, processes it, and generates standardized reports.",
        challenges: {
          1: "Manual reporting process was time-consuming and error-prone",
          2: "Data needed to be validated and transformed before reporting"
        },
        solutions: [
          "Implemented Python scripts to automate data extraction and transformation",
          "Used Microsoft Fabric for workflow orchestration and scheduling"
        ],
        results: [
          "Reduced reporting time from 2 days to 2 hours",
          "Eliminated manual errors and improved data accuracy"
        ],
      },

      customerSegmentation: {
        description: "Machine learning model for customer segmentation to identify distinct customer groups for targeted marketing.",
        detailedDescription:
          "Developed a clustering model to segment customers based on purchasing behavior, demographics, and engagement metrics.",
        challenges: {
          1: "Identifying the optimal number of customer segments",
          2: "Dealing with missing data and outliers in the customer dataset"
        },
        solutions: [
          "Used silhouette analysis and elbow method to determine optimal cluster count",
          "Implemented robust preprocessing techniques to handle missing values and outliers"
        ],
        results: [
          "Identified 5 distinct customer segments with unique characteristics",
          "Targeted marketing campaigns resulted in 25% higher conversion rates"
        ],
      },

      sentimentAnalysis: {
        description: "NLP-based sentiment analysis tool for analyzing customer feedback and social media mentions.",
        detailedDescription:
          "Created a sentiment analysis system that processes customer reviews and social media posts to determine sentiment and extract key themes.",
        challenges: {
          1: "Handling context-specific language and sarcasm in text data",
          2: "Processing large volumes of unstructured text efficiently"
        },
        solutions: [
          "Implemented a hybrid approach combining lexicon-based and machine learning methods",
          "Used parallel processing to handle large datasets efficiently"
        ],
        results: [
          "Achieved 85% accuracy in sentiment classification",
          "Identified key customer pain points that informed product improvements"
        ],
      },
    },

    // Experience section
    experience: {
      title: "Experience & Education",
      subtitle: "My professional journey and academic background",
      timeline: [
        {
          title: "Data Analyst",
          company: "Brithol Michcoma",
          period: "07/2024 - 11/2024",
          description: [
            "Analysed networking data to identify patterns and optimization opportunities",
            "Performed exploratory data analysis (EDA) to uncover actionable insights",
            "Configured and deployed over 200 Microtek routers across Mozambique client locations",
            "Deployed and configured PBX and VoIP systems utilizing Ylink and Cisco phones for 200+ employees, decreasing internal communication latency by 60% and saving approximately 10 hours per employee annually",
            "Monitored device performance using syslog-server tools and assisted in VSAT installations for remote connectivity",
            "Collaborated with interdisciplinary teams to support data-driven decision-making"
          ],
          type: "work",
          location: "Maputo, Mozambique",
          skills: ["Data Analysis", "Network Configuration", "EDA", "VoIP Systems", "VSAT"],
        },
        {
          title: "IT System Analyst",
          company: "INVWSTORS GP LDA",
          period: "05/2022 - 05/2024",
          description: [
            "Monitored system performance and analysed real-time logistics data to support operational efficiency",
            "Developed dashboards for tracking vehicle deployment, fuel consumption, and delivery schedule",
            "Collaborated with procurement and IT teams to improve data accuracy and reporting workflows"
          ],
          type: "work",
          location: "Maputo, Mozambique",
          skills: ["System Analysis", "Dashboard Development", "Data Analytics", "Logistics"],
        },
        {
          title: "Bachelor of Computer Science (Honours)",
          institution: "Multimedia University",
          period: "2020 - 2024",
          description: [
            "Specialization in Data Science",
            "Second Class Honours",
            "Relevant coursework: Machine Learning, Data Mining, Statistical Analysis"
          ],
          type: "education",
          location: "Cyberjaya, Malaysia",
          skills: ["Data Science", "Machine Learning", "Statistical Analysis"],
        }
      ],
    },

    // Volunteer section
    volunteer: {
      title: "Volunteer Experience",
      subtitle: "Leadership and community engagement roles",
      responsibilities: "Responsibilities",
      keyAchievements: "Key Achievements",
      leadershipExperience: "Leadership Experience",
      roles: [
        {
          title: "Co-founder and Adviser",
          organization: "Sudanese Culture Society - MMU",
          period: "08/2023 - 10/2024",
          description: [
            "Provided strategic guidance for cultural and charity events, enhancing community engagement",
            "Represented MMU's Sudanese community at conferences and national-level meetings",
            "Contributed to fundraising efforts for displaced Sudanese communities"
          ],
          achievements: [
            "Advised on 5+ successful cultural events with 100+ attendees",
            "Helped raise funds for humanitarian causes",
            "Established partnerships with other cultural organizations"
          ]
        },
        {
          title: "IT Volunteer",
          organization: "Al Maktoum Foundation",
          period: "06/2023 - 12/2023",
          description: [
            "Assisted in printer configuration and maintenance",
            "Provided support for Microsoft Excel and other Microsoft Office applications",
            "Helped streamline office automation processes"
          ],
          achievements: [
            "Improved office efficiency through better printer management",
            "Trained staff on Microsoft Excel features",
            "Implemented automated spreadsheet solutions"
          ]
        }
      ]
    },

    // Contact section
    contact: {
      title: "Contact Me",
      subtitle: "Let's discuss your next project",
      email: "Email",
      emailAddress: "obaialid45@gmail.com",
      phone: "Phone",
      phoneNumber: "+971561647714",
      linkedin: "LinkedIn",
      linkedinHandle: "obai-ahmed",
      linkedinUrl: "https://www.linkedin.com/in/obai-ahmed-b7697433a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjbNrwsaJSG2SnQizJU%2B18g%3D%3D",
      github: "GitHub",
      githubHandle: "obaiahmed",
      githubUrl: "https://github.com/obaiahmed",
      getInTouch: "Get in Touch",
      sendMessage: "Send Me a Message",
      responseTime: "Quick Response Time",
      responseMessage: "I typically respond to messages within 24-48 hours. For urgent matters, consider reaching out via phone or LinkedIn.",
      messageSent: "Message Sent Successfully!",
      thankYouMessage: "Thank you for your message. I'll get back to you as soon as possible.",
      form: {
        name: "Your Name",
        namePlaceholder: "Enter your full name",
        email: "Your Email",
        emailPlaceholder: "Enter your email address",
        subject: "Subject",
        subjectPlaceholder: "What is this regarding?",
        message: "Message",
        messagePlaceholder: "Tell me about your project, requirements, or any questions you have...",
        submit: "Send Message"
      }
    },

    // Footer
    footer: {
      description: "Data Scientist specializing in machine learning and AI solutions.",
      quickLinks: "Quick Links",
      references: "References",
      copyright: "© 2025 Obai Ahmed. All rights reserved.",
      referenceList: [
        {
          name: "Mr. Chadreque",
          title: "IT Department, Satcome, Brithol Michcoma",
          contact: "+258 84 302 0123"
        },
        {
          name: "Mr. Mohammed Manni",
          title: "INVWSTORS GP LDA",
          contact: "+258 84 292 9475"
        }
      ],
      socialLinks: {
        twitter: "https://twitter.com/obaiahmed",
        github: "https://github.com/obaiahmed",
        linkedin: "https://www.linkedin.com/in/obai-ahmed-b7697433a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjbNrwsaJSG2SnQizJU%2B18g%3D%3D"
      }
    },

    // Language switcher
    language: {
      en: "English",
      ar: "العربية",
    },
  },

  ar: {
    // Navigation
    nav: {
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرة",
      education: "التعليم",
      volunteer: "العمل التطوعي",
      contact: "اتصل بي",
    },

    // Hero section
    hero: {
      title: "أبي احمد",
      subtitle: "عالم بيانات | مهندس تعلم آلي | مهتم بالذكاء الاصطناعي",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
      stats: {
        languages: "لغات البرمجة",
        internships: "التدريب العملي",
        projects: "المشاريع",
        leadership: "أدوار قيادية",
      },
    },

    // About section
    about: {
      title: "نبذة عني",
      subtitle: "تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ",
      paragraph1:
        "أنا عالم بيانات طموح حاصل على بكالوريوس في علوم الكمبيوتر متخصص في علوم البيانات. لدي خبرة شاملة في تحليل البيانات والتعلم الآلي والتصور.",
      paragraph2:
        "متمكن في تطوير ونشر حلول قائمة على البيانات، وإنشاء لوحات معلومات تفاعلية، وتطبيق تقنيات التعلم العميق. لقد أظهرت مهارات القيادة ورواية القصص والعرض من خلال قيادة مبادرات ومشاريع المجتمع.",
      paragraph3: "اشتعلت شغفي بعلوم البيانات خلال سنوات الجامعة، حيث اكتشفت قوة استخراج أنماط ذات معنى من مجموعات البيانات المعقدة. أتناول كل مشروع بفضول وتحليل منهجي، سعياً لتقديم حلول توفر قيمة عملية ملموسة.",
      sectionHeadings: {
        journey: "مسيرتي",
        careerHighlights: "أبرز الإنجازات المهنية",
        techStack: "المهارات التقنية",
        careerGoals: "الأهداف المهنية",
        personalAttributes: "السمات الشخصية"
      },
      highlights: [
        {
          id: "education",
          title: "التميز الأكاديمي",
          description: "تخرجت بتفوق في علوم الكمبيوتر متخصصاً في علوم البيانات، مع التركيز على تقنيات التعلم الآلي والتحليل الإحصائي."
        },
        {
          id: "internship",
          title: "مشروع بيانات الاتحاد الآسيوي",
          description: "طورت لوحة معلومات شاملة لتحليلات الرياضة للاتحاد الآسيوي لكرة القدم حولت بيانات المباريات الخام إلى رؤى قابلة للتنفيذ."
        },
        {
          id: "skills",
          title: "الكفاءة التقنية",
          description: "أتقنت مجموعة متنوعة من التقنيات بما في ذلك Python و R و TensorFlow وأدوات تصور البيانات مع توسيع المعرفة باستمرار في مجالات الذكاء الاصطناعي الناشئة."
        }
      ],
      careerGoals: [
        "أن أصبح عالم بيانات رئيسي متخصص في التحليلات التنبؤية",
        "السعي للحصول على شهادات متقدمة في التعلم الآلي والذكاء الاصطناعي",
        "المساهمة في مشاريع مفتوحة المصدر في مجتمع علوم البيانات"
      ],
      personalAttributes: {
        analyticalThinker: {
          title: "مفكر تحليلي",
          description: "معالجة المشكلات بشكل منهجي ومنظم"
        },
        continuousLearner: {
          title: "متعلم مستمر",
          description: "البحث باستمرار عن المعرفة والمهارات الجديدة"
        },
        detailOriented: {
          title: "مهتم بالتفاصيل",
          description: "اهتمام دقيق بدقة البيانات وجودتها"
        },
        adaptable: {
          title: "قابل للتكيف",
          description: "التكيف السريع مع التقنيات والتحديات الجديدة"
        }
      },
      contactCTA: "دعنا نناقش كيف يمكنني المساهمة في فريقك"
    },

    // Skills section
    skills: {
      title: "المهارات",
      subtitle: "خبرة في مختلف مجالات علوم البيانات",
      tabs: {
        technical: "المهارات التقنية",
        soft: "المهارات الشخصية",
      },
      categories: {
        technicalSkills: "المهارات التقنية",
        programmingLanguages: "لغات البرمجة",
        toolsFrameworks: "الأدوات والأطر",
      },
      softSkills: {
        communication: {
          name: "التواصل",
          description: "التواصل الفعال متعدد اللغات بالعربية والإنجليزية والبرتغالية",
        },
        criticalThinking: {
          name: "التفكير النقدي",
          description: "نهج تحليلي في حل المشكلات واتخاذ القرارات",
        },
        timeManagement: {
          name: "إدارة الوقت",
          description: "تحديد أولويات وتنفيذ المشاريع المتعددة بكفاءة",
        },
        creativity: {
          name: "حل المشكلات بإبداع",
          description: "نهج مبتكر للتحديات التقنية والتحليلية",
        },
        leadership: {
          name: "القيادة",
          description: "خبرة في قيادة الفرق التقنية وتوجيه المطورين المبتدئين",
        },
        problemSolving: {
          name: "حل المشكلات",
          description: "نهج تحليلي وموجه نحو الحلول",
        },
        adaptability: {
          name: "القدرة على التكيف",
          description: "سرعة التعلم مع خبرة في بيئات تقنية متنوعة",
        },
        teamwork: {
          name: "العمل الجماعي",
          description: "قدرة مثبتة على التعاون في الفرق متعددة التخصصات",
        },
      },
      hoverMessage: "ضع المؤشر فوق المهارات لمزيد من التفاصيل",
    },

    // Projects section
    projects: {
      title: "المشاريع",
      subtitle: "حلول مبتكرة ذات تأثير قابل للقياس",
      showMore: "عرض المزيد",
      showLess: "عرض أقل",
      overview: "نظرة عامة",
      challenges: "التحديات",
      solutions: "الحلول",
      results: "النتائج",
      featuredProject: "مشروع مميز",
      
      projectList: [
        {
          id: "arabic-sign-language",
          title: "تحليل مقارن لللغة الإشارية العربية",
          badge: "تعلم عميق",
          description: "نظام تعرف اللغة الإشارية العربية باستخدام CNNs وLSTMs مع تعلم التحويل.",
          tags: ["CNNs", "LSTMs", "تعلم التحويل", "معالجة الصور", "تعلم عميق"],
          detailedDescription: "تطوير نظام تعرف اللغة الإشارية العربية باستخدام تقنيات تعلم عميقة لتحسين دقة التعرف عبر تطبيق شبكات عصرية عميقة (CNNs) وأجهزة ذاكرة طويلة المدى (LSTMs).",
          challenges: [
            "تعرف اللغة الإشارية في الوقت الحقيقي",
            "حدود مجموعة البيانات المتاحة لللغة الإشارية العربية",
            "حاجة إلى دقة مرتفعة في ظروف الإضاءة المختلفة"
          ],
          solutions: [
            "تنفيذ تعلم التحويل للاستفادة من نماذج مدربة مسبقاً",
            "تحسين بنية النموذج باستخدام نهج CNN-LSTM متوحد",
            "تطبيق تقنيات معالجة الصور المتقدمة لتحسين استخراج الميزات"
          ],
          results: [
            "تحسين دقة التعرف بشكل كبير",
            "أداء موثوق بشكل جيد عبر ظروف البيئة المختلفة",
            "إنشاء حل متكرر لتعرف اللغة الإشارية"
          ],
          githubUrl: "https://github.com/yourusername/arabic-sign-language"
        },
        {
          id: "fifa-prediction",
          title: "تنبؤ سعر إطلاق لاعب FIFA 2022",
          badge: "تعلم آلي",
          description: "نظام تنبؤي لسعر إطلاق لاعب FIFA باستخدام الانحدار الخطي المتعدد.",
          tags: ["تحليل الانحدار", "Python", "تنظيف البيانات", "تحليل إحصائي"],
          detailedDescription: "بناء نموذج تنبؤي معقد باستخدام الانحدار الخطي المتعدد لتنبؤ سعر إطلاق لاعب FIFA بدقة مرتفعة. تشمل المشروع تطوير الميزات المتقدم وتحليل البيانات.",
          challenges: [
            "علاقات ميزة معقدة",
            "مشاكل الجودة وتناسق البيانات",
            "عوامل متعددة مؤثرة على التنبؤات"
          ],
          solutions: [
            "تنفيذ تقنيات ميزة متقدمة",
            "تطوير أنابيب تنظيف البيانات الموثوقة",
            "إنشاء منظومة تحليل إحصائي موثوقة"
          ],
          results: [
            "دقة تنبؤ عالية لقيمة اللاعب",
            "تحديد عوامل مؤثرة على سعر الإطلاق",
            "إنشاء منظومة تنبؤية معادة قابلة للاستخدام"
          ],
          githubUrl: "https://github.com/yourusername/fifa-prediction"
        },
        {
          id: "car-detection",
          title: "نظام تكويد سيارة حقيقية الزمن",
          badge: "رؤية حاسوبية",
          description: "تنفيذ خوارزمية YOLO لتكويد سيارة حقيقية الزمن في تدفقات الفيديو.",
          tags: ["YOLO", "OpenCV", "Python", "تكويد الكائن"],
          detailedDescription: "تطوير نظام تكويد سيارة حقيقية الزمن باستخدام خوارزمية YOLO (You Only Look Once) وOpenCV. تعالج النظام تدفقات الفيديو لتحديد وتتبع المركبات في الوقت الحقيقي.",
          challenges: [
            "متطلبات معالجة الوقت الحقيقي",
            "دقة في ظروف الإضاءة المختلفة",
            "تتبع الكائنات المتعددة"
          ],
          solutions: [
            "تحسين تنفيذ YOLO لأداء الوقت الحقيقي",
            "تحسين دقة التكويد من خلال تصحيح نموذج",
            "تنفيذ خوارزميات تتبع موثوقة"
          ],
          results: [
            "تحقيق أداء تكويد الوقت الحقيقي",
            "دقة مرتفعة في ظروف البيئة المختلفة",
            "تنفيذ تتبع الكائنات المتعددة بنجاح"
          ],
          githubUrl: "https://github.com/yourusername/car-detection"
        },
        {
          id: "covid-forecast",
          title: "تنبؤ تأثير موسمي لفيروس COVID-19",
          badge: "علوم البيانات",
          description: "تنبؤ باستخدام تقنيات التعلم المشارك لتحليل اتجاهات الإصابة بفيروس COVID-19.",
          tags: ["تعلم آلي", "تحليل السلاسل الزمنية", "Python", "تنبؤ"],
          detailedDescription: "تطوير نماذج تنبؤية لتحليل اتجاهات الإصابة بفيروس COVID-19 بأخذ بعين الاعتبار عوامل الموسمية. تم استخدام تقنيات التعلم المشارك لتحليل وتنبؤ على نمط الإصابات.",
          challenges: [
            "علاقات زمنية معقدة",
            "عوامل مؤثرة متعددة",
            "موثوقية البيانات"
          ],
          solutions: [
            "تنفيذ تحليل السلاسل الزمنية المتقدم",
            "تطوير أنابيب ميزة متقدم",
            "إنشاء منظومة تحقق بيانات موثوقة"
          ],
          results: [
            "تنبؤ دقيق لاتجاهات الإصابة",
            "تحديد عوامل الموسمية الرئيسية",
            "توفير مفادات قيمة لتخطيط الصحة العامة"
          ],
          githubUrl: "https://github.com/yourusername/covid-forecast"
        },
        {
          id: "sentiment-analysis",
          title: "أداة تحليل المشاعر للتجارة الإلكترونية",
          badge: "NLP",
          description: "أداة تحليل المشاعر الذي تعالج مراجعات العملاء ومنشورات وسائل التواصل الاجتماعي لتحديد المشاعر واستخراج المواضيع الرئيسية.",
          tags: ["NLP", "Sentiment Analysis", "Python"],
          detailedDescription: "تطوير أداة تحليل المشاعر الذي يعالج مراجعات العملاء ومنشورات وسائل التواصل الاجتماعي لتحديد المشاعر واستخراج المواضيع الرئيسية.",
          challenges: [
            "معالجة كميات كبيرة من النص غير المنظم",
            "التعامل مع اللغة المحددة بالسياق والسخرية في بيانات النص",
            "تحقيق دقة 85٪ في تصنيف المشاعر"
          ],
          solutions: [
            "تنفيذ نهج هجين يجمع بين الطرق المستندة إلى المعجم وطرق التعلم الآلي",
            "استخدام المعالجة المتوازية للتعامل مع مجموعات البيانات الكبيرة بكفاءة",
            "تحقيق دقة 85٪ في تصنيف المشاعر"
          ],
          results: [
            "تحقيق دقة 85٪ في تصنيف المشاعر",
            "تحديد نقاط الألم الرئيسية للعملاء التي أبلغت عن تحسينات المنتج",
            "توفير مفادات قيمة لتحليل المشاعر"
          ],
          githubUrl: "https://github.com/yourusername/sentiment-analysis"
        },
        {
          id: "adult-diet-analysis",
          title: "تحليل النظام الغذائي",
          badge: "تحليل البيانات",
          description: "تحليل شامل لأنماط الصحة للبالغين في الولايات المتحدة باستخدام Tableau للتصور والرؤى.",
          tags: ["Tableau", "تصور البيانات", "تحليلات الرعاية الصحية", "التحليل الإحصائي"],
          detailedDescription: "تحليل مجموعة بيانات من data.world تركز على النظام الغذائي للبالغين والنشاط البدني وحالة الوزن من نظام مراقبة عوامل الخطر السلوكية. درس المشروع أنماط السمنة في الولايات المتحدة وعلاقتها بعوامل مختلفة.",
          challenges: [
            "دمج بيانات صحية متعددة المتغيرات",
            "تحديد العلاقات المهمة بين عوامل نمط الحياة",
            "إنشاء تصورات واضحة للعلاقات الصحية المعقدة"
          ],
          solutions: [
            "تطوير لوحات معلومات شاملة في Tableau لتصور البيانات",
            "تنفيذ تحليل إحصائي لتحديد الأنماط الرئيسية",
            "إنشاء مرشحات تفاعلية لاستكشاف البيانات الديموغرافية"
          ],
          results: [
            "تحديد الأنماط الرئيسية في توزيع السمنة",
            "اكتشاف العلاقات بين النظام الغذائي والنشاط البدني",
            "توليد رؤى قابلة للتنفيذ للتدخلات الصحية"
          ]
        },
        {
          id: "eurovision-analysis",
          title: "تحليل مسابقة يوروفيجن (1998-2012)",
          badge: "تصور البيانات",
          description: "لوحة معلومات تفاعلية في Tableau لتحليل اتجاهات وأنماط مسابقة يوروفيجن من 1998 إلى 2012.",
          tags: ["Tableau", "تحليل السلاسل الزمنية", "تحليلات الموسيقى", "لوحة معلومات تفاعلية"],
          detailedDescription: "إنشاء مشروع تصور شامل لتحليل بيانات مسابقة يوروفيجن، واستكشاف الاتجاهات الموسيقية والتنافسية الإقليمية وعوامل النجاح عبر الدول الأوروبية.",
          challenges: [
            "تحليل بيانات السلاسل الزمنية المعقدة",
            "مقارنات إقليمية متعددة",
            "تحديد عوامل النجاح عبر السنوات المختلفة"
          ],
          solutions: [
            "بناء لوحات معلومات تفاعلية مع أوراق عمل متعددة",
            "تنفيذ حسابات جدولية متقدمة",
            "إنشاء تصورات للمقارنة الإقليمية"
          ],
          results: [
            "كشف تغيرات الاتجاهات الموسيقية على مدى العقد",
            "تحديد أنماط ميزة الأرض المحلية",
            "رسم خريطة التوزيع الإقليمي للنجاح"
          ]
        },
        {
          id: "tobacco-demographics",
          title: "تحليل استخدام التبغ في الولايات المتحدة",
          badge: "تحليل جغرافي",
          description: "تحليل جغرافي لأنماط استخدام التبغ عبر الولايات الأمريكية باستخدام تقنيات التصور المتقدمة.",
          tags: ["Tableau", "التصور الجغرافي", "التركيبة السكانية", "تحليلات الصحة"],
          detailedDescription: "إجراء تحليل معمق للتركيبة السكانية لاستخدام التبغ في الولايات المتحدة، مع التركيز على حالة تدخين السجائر والانتشار حسب التركيبة السكانية وتكرار التدخين ومحاولات الإقلاع.",
          challenges: [
            "دمج بيانات سكانية معقدة",
            "تحديد الأنماط الإقليمية",
            "إنشاء تصورات جغرافية واضحة"
          ],
          solutions: [
            "تطوير خرائط جغرافية تفاعلية",
            "تنفيذ مبادئ تصميم شافر الأربعة",
            "إنشاء مقارنات شاملة بين الولايات"
          ],
          results: [
            "تحديد مناطق استخدام التبغ المرتفع (كنتاكي، وايومنغ، ويسكونسن، فيرجينيا الغربية)",
            "اكتشاف أنماط إقليمية تظهر ارتفاع الاستخدام في الولايات الجنوبية",
            "إنشاء تصورات جغرافية مفيدة تتبع مبادئ التصميم"
          ]
        }
      ],

      // Project details
      sportsAnalytics: {
        description: "لوحة تحليلات رياضية شاملة لتحليل مباريات كرة القدم وتتبع أداء اللاعبين.",
        detailedDescription:
          "تنفيذ لوحة معلومات تفاعلية في Power BI للاتحاد الآسيوي لكرة القدم (AFC) لتحليل إحصائيات مباريات كرة القدم وأداء اللاعبين ومقاييس الفريق. يجمع الحل البيانات من نقاط نهاية API متعددة، ويحولها ويصورها في تقارير ديناميكية سهلة الاستخدام.",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiOTBkZTJmYTgtYzNlOC00YmY0LWJmN2ItNjY2ODU0NzM4MDQyIiwidCI6IjdlMGI1ZmNmLTEyYzQtNGVmZi05NmI2LTQ2NjRmMjVkYzdkYSIsImMiOjEwfQ%3D%3D",
        challenges: {
          1: "مصادر وتنسيقات بيانات متعددة: الحاجة إلى دمج وتحويل البيانات من نقاط نهاية API مختلفة (المباريات، اللاعبين) بهياكل متنوعة.",
          2: "عملية تحديث يدوية: تطلب نهج تحديث آمن ويدوي بسبب قيود الشبكة وقيود الوصول إلى API.",
          3: "قيود الأمان: كانت لوحة المعلومات بحاجة إلى أن تكون متاحة للجمهور، ولكن يجب أن يظل مصدر البيانات الأساسي محميًا داخل شبكة المنظمة.",
          4: "اتساق ودقة البيانات: ضمان بقاء معلومات الفريق واللاعب والمباراة متزامنة عبر مختلف الجداول والصفحات.",
        },
        solutions: {
          1: "Robust ETL & Data Modeling: Created a well-defined schema and used Power Query to clean, transform, and unify match/players data into structured tables (Fixtures, Teams, Opponents, Players).",
          2: "Interactive Visualizations: Built dedicated pages (Results, Goals, Positions, Teams Map, Players Map, Tables) with custom filters (Matches, Teams, Players) for granular data exploration.",
          3: "Security & Access Control: Deployed a public dashboard link while restricting API/data source access to the internal network, striking a balance between openness and security.",
          4: "Documentation & Maintenance Plan: Provided clear project documentation, including data schemas, transformation steps, and a manual refresh procedure to maintain data integrity.",
        },
        results: {
          1: "Enhanced Decision-Making: AFC stakeholders can easily explore performance trends, player statistics, and match outcomes, leading to more informed strategic decisions.",
          2: "Improved Data Accessibility: The dashboard centralizes key metrics and allows for quick, intuitive filtering and analysis across teams, tournaments, and timeframes.",
          3: "Scalable Foundation: The modular data model and clear documentation enable future expansions (e.g., automated refresh with a data gateway, adding more competitions).",
          4: "Positive Stakeholder Feedback: The dashboard's user-friendly interface and comprehensive coverage of AFC data garnered strong acceptance among non-technical and technical users alike.",
        },
      },

      financialReporting: {
        description: "نظام تقارير مالية آلي باستخدام Python و Microsoft Fabric لمعالجة البيانات بسلاسة.",
        detailedDescription:
          "بناء حل أتمتة شامل للتقارير المالية يستخرج البيانات من مصادر متعددة ويعالجها وينتج تقارير موحدة.",
        challenges: {
          1: "كانت عملية إعداد التقارير اليدوية تستغرق وقتًا طويلاً وعرضة للأخطاء",
          2: "كانت البيانات بحاجة إلى التحقق منها وتحويلها قبل إعداد التقارير",
        },
        solutions: {
          1: "تنفيذ نصوص Python لأتمتة استخراج البيانات وتحويلها",
          2: "استخدام Microsoft Fabric لتنظيم سير العمل والجدولة",
        },
        results: {
          1: "تقليل وقت إعداد التقارير من يومين إلى ساعتين",
          2: "القضاء على الأخطاء اليدوية وتحسين دقة البيانات",
        },
      },

      customerSegmentation: {
        description: "نموذج تعلم آلي لتقسيم العملاء لتحديد مجموعات العملاء المميزة للتسويق المستهدف.",
        detailedDescription:
          "تطوير نموذج تجميع لتقسيم العملاء بناءً على سلوك الشراء والتركيبة السكانية ومقاييس المشاركة.",
        challenges: {
          1: "تحديد العدد الأمثل لشرائح العملاء",
          2: "التعامل مع البيانات المفقودة والقيم المتطرفة في مجموعة بيانات العملاء",
        },
        solutions: [
          "استخدام تحليل السيلويت وطريقة الكوع لتحديد العدد الأمثل للمجموعات",
          "تنفيذ تقنيات معالجة مسبقة قوية للتعامل مع القيم المفقودة والقيم المتطرفة",
        ],
        results: {
          1: "تحديد 5 شرائح عملاء متميزة ذات خصائص فريدة",
          2: "أدت حملات التسويق المستهدفة إلى زيادة معدلات التحويل بنسبة 25٪",
        },
      },

      sentimentAnalysis: {
        description:
          "أداة تحليل المشاعر القائمة على معالجة اللغة الطبيعية لتحليل تعليقات العملاء وذكرهم على وسائل التواصل الاجتماعي.",
        detailedDescription:
          "إنشاء نظام تحليل المشاعر الذي يعالج مراجعات العملاء ومنشورات وسائل التواصل الاجتماعي لتحديد المشاعر واستخراج المواضيع الرئيسية.",
        challenges: {
          1: "التعامل مع اللغة المحددة بالسياق والسخرية في بيانات النص",
          2: "معالجة كميات كبيرة من النص غير المنظم بكفاءة",
        },
        solutions: {
          1: "تنفيذ نهج هجين يجمع بين الطرق المستندة إلى المعجم وطرق التعلم الآلي",
          2: "استخدام المعالجة المتوازية للتعامل مع مجموعات البيانات الكبيرة بكفاءة",
        },
        results: {
          1: "تحقيق دقة 85٪ في تصنيف المشاعر",
          2: "تحديد نقاط الألم الرئيسية للعملاء التي أبلغت عن تحسينات المنتج",
        },
      },
    },

    // Experience section
    experience: {
      title: "الخبرة والتعليم",
      subtitle: "رحلتي المهنية وخلفيتي الأكاديمية",
      timeline: [
        {
          title: "محلل بيانات",
          company: "Brithol Michcoma",
          period: "07/2024 - 11/2024",
          description: [
            "تحليل بيانات الشبكات لتحديد الأنماط وفرص التحسين",
            "إجراء تحليل استكشافي للبيانات (EDA) لاكتشاف رؤى قابلة للتنفيذ",
            "تكوين ونشر أكثر من 200 موجه Microtek عبر مواقع العملاء في موزمبيق",
            "نشر وتكوين أنظمة PBX وVoIP باستخدام هواتف Ylink وCisco لأكثر من 200 موظف، مما قلل زمن الاتصال الداخلي بنسبة 60٪ ووفر حوالي 10 ساعات لكل موظف سنوياً",
            "مراقبة أداء الأجهزة باستخدام أدوات syslog-server والمساعدة في تركيبات VSAT للاتصال عن بعد",
            "التعاون مع فرق متعددة التخصصات لدعم اتخاذ القرارات المستندة إلى البيانات"
          ],
          type: "work",
          location: "مابوتو، موزمبيق",
          skills: ["تحليل البيانات", "تكوين الشبكات", "EDA", "أنظمة VoIP", "VSAT"],
        },
        {
          title: "محلل نظم تقنية المعلومات",
          company: "INVWSTORS GP LDA",
          period: "05/2022 - 05/2024",
          description: [
            "مراقبة أداء النظام وتحليل بيانات الخدمات اللوجستية في الوقت الفعلي لدعم كفاءة العمليات",
            "تطوير لوحات معلومات لتتبع نشر المركبات واستهلاك الوقود وجدول التسليم",
            "التعاون مع فرق المشتريات وتقنية المعلومات لتحسين دقة البيانات وسير عمل التقارير"
          ],
          type: "work",
          location: "مابوتو، موزمبيق",
          skills: ["تحليل النظم", "تطوير لوحات المعلومات", "تحليلات البيانات", "الخدمات اللوجستية"],
        },
        {
          title: "بكالوريوس علوم الكمبيوتر (مع مرتبة الشرف)",
          institution: "جامعة الوسائط المتعددة",
          period: "2020 - 2024",
          description: [
            "تخصص في علوم البيانات",
            "مرتبة الشرف الثانية",
            "المقررات ذات الصلة: التعلم الآلي، تنقيب البيانات، التحليل الإحصائي"
          ],
          type: "education",
          location: "سيبرجايا، ماليزيا",
          skills: ["علوم البيانات", "التعلم الآلي", "التحليل الإحصائي"],
        }
      ],
    },

    // Volunteer section
    volunteer: {
      title: "الخبرة التطوعية",
      subtitle: "أدوار القيادة المشاركة المجتمعية",
      responsibilities: "المسؤوليات",
      keyAchievements: "الإنجازات الرئيسية",
      leadershipExperience: "خبرة قيادية",
      roles: [
        {
          title: "مؤسس مشارك ومستشار",
          organization: "جمعية الثقافة السودانية - جامعة الوسائط المتعددة",
          period: "08/2023 - 10/2024",
          description: [
            "قيادة وتنظيم الفعاليات الثقافية والخيرية، مما عزز بشكل كبير المشاركة المجتمعية",
            "تمثيل مجتمع السودانيين في جامعة الوسائط المتعددة في المؤتمرات واللقاءات الوطنية",
            "المساهمة في جهود جمع التبرعات للمجتمعات السودانية النازحة",
          ],
          achievements: [
            "تنظيم أكثر من 5 فعاليات ثقافية ناجحة بحضور أكثر من 100 شخص",
            "جمع الأموال للقضايا الإنسانية",
            "إقامة شراكات مع منظمات ثقافية أخرى",
          ],
        },
        {
          title: "IT Volunteer",
          organization: "Al Maktoum Foundation",
          period: "06/2023 - 12/2023",
          description: [
            "Assisted in printer configuration and maintenance",
            "Provided support for Microsoft Excel and other Microsoft Office applications",
            "Helped streamline office automation processes"
          ],
          achievements: [
            "Improved office efficiency through better printer management",
            "Trained staff on Microsoft Excel features",
            "Implemented automated spreadsheet solutions"
          ]
        }
      ],
    },

    // Contact section
    contact: {
      title: "اتصل بي",
      subtitle: "لنناقش مشروعك القادم",
      email: "البريد الإلكتروني",
      emailAddress: "obaialid45@gmail.com",
      phone: "الهاتف",
      phoneNumber: "+971561647714",
      linkedin: "لينكد إن",
      linkedinHandle: "obai-ahmed",
      linkedinUrl: "https://www.linkedin.com/in/obai-ahmed-b7697433a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjbNrwsaJSG2SnQizJU%2B18g%3D%3D",
      github: "جيتهب",
      githubHandle: "obaiahmed",
      githubUrl: "https://github.com/obaiahmed",
      getInTouch: "تواصل معي",
      sendMessage: "أرسل لي رسالة",
      responseTime: "سرعة وقت الاستجابة",
      responseMessage: "عادة ما أرد على الرسائل خلال 24-48 ساعة. للأمور العاجلة، يُفضل التواصل عبر الهاتف أو لينكد إن.",
      messageSent: "تم إرسال الرسالة بنجاح!",
      thankYouMessage: "شكراً لرسالتك. سأرد عليك في أقرب وقت ممكن.",
      form: {
        name: "الاسم",
        namePlaceholder: "أدخل اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        subject: "الموضوع",
        subjectPlaceholder: "ماذا يتعلق هذا؟",
        message: "الرسالة",
        messagePlaceholder: "أخبرني عن مشروعك، متطلباتك، أو أي أسئلة لديك...",
        submit: "إرسال الرسالة"
      }
    },

    // Footer
    footer: {
      description: "عالم بيانات متخصص في حلول التعلم الآلي والذكاء الاصطناعي.",
      quickLinks: "روابط سريعة",
      references: "المراجع",
      copyright: "© 2025 Obai Ahmed. All rights reserved.",
      referenceList: [
        {
          name: "Mr. Chadreque",
          title: "IT Department, Satcome, Brithol Michcoma",
          contact: "+258 84 302 0123"
        },
        {
          name: "Mr. Mohammed Manni",
          title: "INVWSTORS GP LDA",
          contact: "+258 84 292 9475"
        }
      ],
      socialLinks: {
        twitter: "https://twitter.com/obaiahmed",
        github: "https://github.com/obaiahmed",
        linkedin: "https://www.linkedin.com/in/obai-ahmed-b7697433a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjbNrwsaJSG2SnQizJU%2B18g%3D%3D"
      }
    },

    // Language switcher
    language: {
      en: "English",
      ar: "العربية",
    },
  },
}

