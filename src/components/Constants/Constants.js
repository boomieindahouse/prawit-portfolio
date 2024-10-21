export const skillsData = [
  {
    name: "HTML",
    level: 50,
    icon: "../src/assets/icons/html.png",
  },
  {
    name: "CSS",
    level: 60,
    icon: "../src/assets/icons/css.png",
  },
  {
    name: "JavaScript",
    level: 40,
    icon: "../src/assets/icons/javascript.png",
  },
  {
    name: "React",
    level: 30,
    icon: "../src/assets/icons/react.png",
  },
  {
    name: "PHP",
    level: 30,
    icon: "../src/assets/icons/php.png",
  },
  {
    name: "SQL",
    level: 30,
    icon: "../src/assets/icons/sql.png",
  },
  {
    name: "Flutter",
    level: 30,
    icon: "../src/assets/icons/flutter.png",
  },
  {
    name: "Bootstrap",
    level: 40,
    icon: "../src/assets/icons/bootstrap.png",
  }
];

export const toolsData = [
  {
    name: "Windows",
    icon: "../src/assets/icons/windows.png",
  },
  {
    name: "vsCode",
    icon: "../src/assets/icons/vscode.png",
  },
  {
    name: "Git",
    icon: "../src/assets/icons/git.png",
  },
  {
    name: "Figma",
    level: "Beginner",
    icon: "../src/assets/icons/figma.png",
  },
  {
    name: "Eclipse",
    level: "Beginner",
    icon: "../src/assets/icons/eclipse.png",
  }
];

export const languageSkills = [
  { 
    name: 'Read', 
    level: 80, 
    icon: "../src/assets/icons/reading.png", 
    label: 'Advanced' 
  },
  { 
    name: 'Write', 
    level: 60,
    icon: "../src/assets/icons/write.png",
    label: 'Intermediate' 
  },
  { 
    name: 'Listen', 
    level: 70, 
    icon: "/public/icons/listen.png", 
    label: 'Intermediate' 
  },
  { 
    name: 'Speak', 
    level: 50, 
    icon: "/public/icons/speak.png", 
    label: 'Novice' 
  }
];

export const portfolios = [
  {
    id: 1,
    name: "Ourgram",
    pics: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ],
    dev: ["altorouter php", "Javascript", "CSS", "MySql"],
    functions: [
      "Authentication: Users can sign up, log in, and log out.",
      "Profile Management: Users can update their profile information and profile picture.",
      "Post Creation: Users can create new posts with images and captions.",
      "Viewing Posts: Users can view their own posts and posts from other users.",
      "Follow System: Users can follow and unfollow other users to see their posts in the feed.",
      "Likes and Comments: Users can like and comment on posts.",
      "Real-Time Notifications: Users receive notifications for likes, comments, and follows.",
      "Admin management",
    ],
    desc: `This project is a simple web application developed to mimic some basic functionalities of Instagram. It was created using the AltoRouter framework for routing.`,
    github: "https://github.com/boomieindahouse/ourgram",
  },
  {
    id: 2,
    name: "Movie Recommendation",
    pics: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
    ],
    dev: ["Flutter", "Dart"],
    functions: [
      "Browse Popular Movies: Users can explore a list of popular movies fetched from the TMDb API.",
      "Filter by Genre: Users can filter movies based on their preferred genre using a dropdown menu.",
      "Movie Details: Upon selecting a movie, users can view detailed information such as the title, description, and a movie poster.",
      "Dynamic Movie Data: The app fetches real-time data from the TMDb API, ensuring that users always see the latest popular movies and genres.",
    ],
    desc: `This Movie Recommendation App It is a Flutter application that helps users discover popular movies and filter them by genre.`,
    github: "https://github.com/boomieindahouse/movies_recommend",
  },
  {
    id: 3,
    name: "Resort Management",
    pics: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
    ],
    dev: ["altorouter php", "Javascript", "CSS", "MySql"],
    functions: [
      "Able to book resort rooms.",
      "Capable of managing resort rooms.",
      "Capable of managing resort staff.",
      "Able to make payments for room bookings through the website.",
    ],
    desc: `This project is for resort management. It was created using the AltoRouter framework for routing.`,
    github: "https://github.com/boomieindahouse/resort-main",
  }
];

