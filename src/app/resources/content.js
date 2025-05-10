import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hammadullah",
  lastName: "Nasir",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Pashto", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/18hnasir?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hammadullah-nasir-b9b416142/",
  },
  {
    name: "Email",
    icon: "email",
    link: "",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Hammadullah, a full stack developer at <InlineCode>GridIronIT</InlineCode> where I work on developing applications using 
      <br /> AWS services. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello, and welcome! My journey began in the small city of Danville, Virginia, 
        where I was born and raised. My passion for technology sparked early when I got 
        my first taste of programming through C++. That initial exposure laid the foundation 
        for my decision to pursue a Bachelor of Science in Computer Science at 
        George Mason University, where I honed my skills in areas such as algorithms, 
        software development, databases, and networking.Upon graduation, I began my career 
        as a software developer at CGI Federal, where I gained invaluable experience working 
        on enterprise-level applications. From there, I joined Brightspot, where I expanded 
        my technical knowledge and explored new development methodologies. Currently, I am 
        working at GridIron IT as a full-stack developer, focusing on building dynamic, 
        cloud-based applications powered by AWS services.Throughout my career, I’ve cultivated
        a passion for solving complex problems and creating innovative solutions that enhance 
        user experiences. I’m driven by continuous learning and the ever-evolving world of 
        technology, and I’m excited about the future opportunities this field holds.
        Outside of work, I enjoy staying active, exploring new technologies, and sharing my 
        experiences with others in the tech community. Thanks for visiting, and feel free to 
        reach out if you'd like to connect!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "GridIronIT",
        timeframe: "2023 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed and deployed backend APIs using TypeScript and AWS microservices to modernize the Treasury’s financial crimes search application, improving search performance and scalability.
          </>,
          <>
            Refactored downloads API into an event driven asynchronous service using AWS Lambda, SQS, and DynamoDB allowing users to continue using the application while downloads are processed in the background.
          </>,
          <>
            Led the redesign of our OpenSearch API payloads to support complex queries, enhancing the accuracy of search results by 20% and enabling investigators to uncover fraudulent activities more effectively.
          </>,
          <>
            Automated 3 high effort manual processes, including user data collection, subscriber email notifications, and XML document processing, saving the Treasury analysts over 10 hours per week.
          </>,
          <>
            Implemented 7 frontend features in Angular and TypeScript, integrating seamlessly with our REST APIs to enhance user experience for financial crime analysts.
          </>,
          <>
            Developed Python scripts using Gen AI to extract 1M+ missing payloads from CloudWatch logs after an outage, and automated their reingestion via AWS Lambda, EventBridge, and S3 to restore audit trail integrity for user activities.
          </>,
          <>
            Resolved 100+ critical software bugs, improving system stability and maintaining a 95% SLA compliance for response and resolution times, ensuring uninterrupted access for Treasury investigators.
          </>,
          <>
            Created PostgreSQL procedures in our database to handle expiring searches and downloads.
          </>
        ],
        images: [],
      },
      {
        company: "BrightSpot",
        timeframe: "2022 - 2023",
        role: "Software Engineer",
        achievements: [
          <>
            Collaborated with a cross-functional team to develop and maintain a content management system (CMS) product
            for clients such as Google, Johnson & Johnson, and NVIDIA.
          </>,
          <>
            Built image recognition API using Python, AWS Lambda, and Rekognition to automatically generate image labels, helping publishers create relevant captions and reducing manual workload by 60%.
          </>,
          <>
            Updated client websites by creating various new front end features with React improving the website’s functionality and 15% jump in user engagement metrics.
          </>,
          <>
            Leveraged Docker to run local instances of the CMS for feature development and debugging reducing environment related bugs and speeding up testing cycles.
          </>
        ],
        images: [],
      },
      {
        company: "CGI Federal",
        timeframe: "2020 - 2022",
        role: "Software Developer",
        achievements: [
          <>
            Worked with team of developers to create a web application with Angular that reduced 70% of form complexity
            for passive users.
          </>,
          <>
            Developed a serverless backend using Node JS, AWS Lambda and API Gateway to perform CRUD operations on a PostgreSQL database increasing application scalability and reducing overhead by 30%.
          </>,
          <>
            Modernized reporting system using PowerApps and Power BI providing client with real time data visualization
            and improved data accuracy.
          </>,
          <>
            Followed Agile methodologies by participating in daily stand up, sprint planning, and retrospective
            meetings using JIRA for tracking tickets and backlog refinement.
          </>,
        ],
        images: [],
      },
      {
        company: "George Mason University",
        timeframe: "2019 - 2020",
        role: "Enrollment Technology Intern",
        achievements: [
          <>
            Provided administrative and tech support to the Integrated Enrollment Marketing
            Department at Merten Hall.
          </>,
          <>
            Worked with HTML and Google Analytics to complete project reports as well 
            as analyze traffic to webpages.
          </>,
          <>
            Developed a Python script to extract and transform data
            from CSV files, streamlining office and administrative workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "STEM ExCEL",
        timeframe: "2019 - 2019",
        role: "Instructor/Tutor",
        achievements: [
          <>
            Instructor for kids in STEM related fields such as Computer Science and Game Design.
          </>,
          <>
            Collaborate with other instructors to review data and develop instructional strategies to address student
            learning objectives.
          </>,
          <>
            Provide clear, informative teaching sessions on Python to classes of 20 students.
          </>,
        ],
        images: [],
      },
      {
        company: "Dicks Sporting Goods",
        timeframe: "2018 - 2019",
        role: "Cashier",
        achievements: [
          <>
            Developed a lot of patience handling customers and making sure their needs at checkout were met.
          </>,
        ],
        images: [],
      },
      {
        company: "Institute for Advanced Learning and Research",
        timeframe: "2017 - 2017",
        role: "Research Intern",
        achievements: [
          <>
            Worked alongside Biologist Dr. Lowman and a team of students on the Farmbot.
          </>,
          <>
            Farmbot: An open source precision agriculture farming machine, assembled and programmed.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "George Mason University",
        description: <>Graduated from George Mason University with a Bachelor of Science 
        in Computer Science. The rigorous program provided a comprehensive foundation in 
        both theoretical and practical aspects of computing. Coursework included algorithms 
        and data structures, low-level programming, operating systems, networking, software
        development, databases, comparative programming languages, and computer architectures.</>,
      },
      {
        name: "Academy for Engineering and Technology ",
        description: <>Graduated as the salutatorian of the Academy for Engineering and 
        Technology (AET) dual enrollment program, earning college credits through Danville 
        Community College. The two-year engineering curriculum emphasized theory, design, 
        and hands-on experiential learning, providing a strong foundation in engineering 
        principles and problem-solving skills.</>,
      },
      {
        name: "Galileo Magnet High School",
        description: <>Attended Galileo Magnet High School, a National Blue Ribbon School, 
        where I excelled both academically and athletically. Served as BETA Club President 
        and earned 3rd place in the speech competition at the 2017 state BETA Convention.
        Recognized as the Best Academic Athlete during my freshman and sophomore years, 
        I also received the prestigious William & Mary Leadership Award. In addition to 
        academics, I was a dedicated member of the varsity cross country and varsity 
        soccer teams, showcasing leadership and teamwork on and off the field.</>,
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills and Certifications",
    skills: [
      {
        title: "Programming Languages",
        description: <>NodeJS, Typescript/Javascript, Python, Java, SQL.</>,
        images: [],
      },
      {
        title: "Frameworks",
        description: <>AWS SAM (Serverless Application Model), Angular, React, Next.js, Express.</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>PostgreSQL, DynamoDB, MongoDB, ElasticSearch/OpenSearch.</>,
        images: [],
      },
      {
        title: "Softwares/Tools",
        description: <>AWS (lambda, api gateway, step functions, eventbridge, sqs, cloudformation, cloudwatch, etc.), Git/GitHub/GitLab, Jenkis, PgAdmin, Atlassian, Docker, Windows, Linux, MAC.</>,
        images: [],
      },
      {
        title: "Certifications",
        description: <>AWS Developer Associate, AWS Cloud Practitioner.</>,
        images: [],
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
