import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import signUpCar from "@/assets/images/signup-car.png";

export const images = {
    onboarding1,
    onboarding2,
    onboarding3,
    getStarted,
    signUpCar,
    check,
    noResult,
    message,
};

export const icons = {
    arrowDown,
    arrowUp,
    backArrow,
    chat,
    checkmark,
    close,
    dollar,
    email,
    eyecross,
    google,
    home,
    list,
    lock,
    map,
    marker,
    out,
    person,
    pin,
    point,
    profile,
    search,
    selectedMarker,
    star,
    target,
    to,
};

export const onboarding = [
    {
        id: 1,
        title: "The perfect ride is just a tap away!",
        description:
            "Your journey begins with Ryde. Find your ideal ride effortlessly.",
        image: images.onboarding1,
    },
    {
        id: 2,
        title: "Best car in your hands with Ryde",
        description:
            "Discover the convenience of finding your perfect ride with Ryde",
        image: images.onboarding2,
    },
    {
        id: 3,
        title: "Your ride, your way. Let's go!",
        description:
            "Enter your destination, sit back, and let us take care of the rest.",
        image: images.onboarding3,
    },
];

export const data = {
    onboarding,
};

export const jobs = [
    {
      id: 1,
      title: 'Truck Driver',
      company: 'Coca-Cola',
      location: 'Villanueva',
      experience: '2 years exp.',
      type: 'Fulltime',
      description: 'The Truck Driver is responsible for delivering products to valued clients on time...',
      salary: '₱18K/mo',
      logo: 'https://as2.ftcdn.net/v2/jpg/03/99/31/55/1000_F_399315507_x1WHoGNGPRSpGgtSfFn0UnTSRiLUF3E3.jpg',
      posted: '2 days ago',
      
    },
    {
      id: 2,
      title: 'Service Crew',
      company: 'Jollibee',
      location: 'Villanueva',
      experience: 'H.S Grad.',
      type: 'Part-time',
      description: 'The service crew will execute the basic store operations such as food preparation...',
      salary: '₱500/day',
      logo: 'https://th.bing.com/th/id/OIP.5E_p0iG1x7_rU-5uBX3U6AHaGT?rs=1&pid=ImgDetMain',
      posted: '5 days ago',
      skills: [
        'Able to work well under pressure and multitask',
        'At least high school or senior high school graduate',
        'Customer service oriented. Friendly and pleasing personality.',
      ],
      role: 'The Service Crew is responsible for presenting menus to patrons. He/She takes orders and answers questions on meal items. He/She makes recommendations and serves orders to customers. He/She also performs cashiering duties. He/She may also be required to assist with preparation and inventory.',
    
    },
    {
      id: 3,
      title: 'Mechanical Technician',
      company: 'Steag State Power Inc.',
      location: 'Villanueva',
      experience: '3 years exp.',
      type: 'Fulltime',
      description: 'The Mechanical Technician ensures the plant’s mechanical systems function efficiently...',
      salary: '₱20K/mo',
      logo: 'https://th.bing.com/th/id/OIP.iNEURLkQY7WJek7QQO235AHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7',
      posted: '1 week ago',
    },
    {
      id: 4,
      title: "Customer Service Representative",
      company: "Concentrix",
      location: "Cagayan de Oro, Misamis Oriental",
      experience: "No experience required",
      type: "Part-time",
      description: "Handle customer queries, provide solutions, and ensure high levels of customer satisfaction in a call center environment.",
      salary: "₱750/day",
      logo: "https://th.bing.com/th?id=OIP.rb1racvKFzi72ZYt6NZzkgHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      posted: "1 week ago",
      skills: [
        "Excellent communication skills",
        "Problem-solving abilities",
        "Able to work in shifts"
      ],
      role: "Assists customers via phone, chat, or email, addressing inquiries and providing product or service support."
    },
    {
      id: 5,
      title: "Warehouse Worker",
      company: "LBC Express",
      location: "Villanueva, Misamis Oriental",
      experience: "No experience required",
      type: "Fulltime",
      description: "Responsible for sorting and packing parcels in the warehouse and preparing them for shipment.",
      salary: "₱600/day",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/LBC_Express_2013_Logo.svg/1200px-LBC_Express_2013_Logo.svg.png",
      posted: "4 days ago",
      skills: [
        "Able to lift heavy objects",
        "Attention to detail",
        "Ability to work in a fast-paced environment"
      ],
      role: "Sorts and packs parcels and products, ensuring timely dispatch and proper handling of items."
    },
    {
      id: 6,
      title: "Sales Associate",
      company: "SM Supermalls",
      location: "Cagayan de Oro, Misamis Oriental",
      experience: "No experience required",
      type: "Part-time",
      description: "Responsible for assisting customers in finding products, handling cash transactions, and ensuring customer satisfaction.",
      salary: "₱500/day",
      logo: "https://th.bing.com/th/id/OIP.EyIByDsbNbE36mI90GdvzwHaHa?rs=1&pid=ImgDetMain",
      posted: "2 days ago",
      skills: [
        "Good communication skills",
        "Sales experience (preferred)",
        "Customer-oriented"
      ],
      role: "Greets and assists customers, provides product recommendations, and handles customer payments."
    },
    {
      id: 7,
      title: "Housekeeper",
      company: "Red Planet Hotels",
      location: "Cagayan de Oro, Misamis Oriental",
      experience: "No experience required",
      type: "Contract",
      description: "Maintain cleanliness and order in guest rooms and common areas of the hotel.",
      salary: "₱550/day",
      logo: "https://th.bing.com/th/id/OIP.O1oqBHyoWgqN1977nlK1QQHaEy?w=307&h=199&c=7&r=0&o=5&pid=1.7",
      posted: "3 days ago",
      skills: [
        "Attention to detail",
        "Time management skills",
        "Able to work independently"
      ],
      role: "Cleans and organizes hotel rooms and public areas, ensuring they meet the hotel’s cleanliness standards."
    },
    {
      id: 8,
      title: "Graphic Designer",
      company: "Freelance",
      location: "Cagayan de Oro, Misamis Oriental",
      experience: "1+ years",
      type: "Contract",
      description: "Design marketing materials, branding assets, and other visual content for various clients.",
      salary: "₱20,000/month",
      logo: "https://th.bing.com/th/id/OIP.1a2Ls2PlGhlS_7_OwFIDyAHaHa?w=146&h=180&c=7&r=0&o=5&pid=1.7",
      posted: "1 week ago",
      skills: [
        "Proficiency in Adobe Creative Suite",
        "Creative and artistic skills",
        "Ability to work with clients' specifications"
      ],
      role: "Creates visual concepts to communicate ideas that inspire, inform, or captivate consumers."
    },
    {
      id: 9,
      title: "Cook",
      company: "The Coffee Bean & Tea Leaf",
      location: "Cagayan de Oro, Misamis Oriental",
      experience: "No experience required",
      type: "Part-time",
      description: "Prepare and cook food items according to restaurant standards and customer preferences.",
      salary: "₱500/day",
      logo: "https://th.bing.com/th/id/R.c5060833853231e12e9c5e0e81f82ec9?rik=G9Rt3%2bDhSKSpxg&riu=http%3a%2f%2fwww.ranklogos.com%2fwp-content%2fuploads%2f2012%2f09%2fThe-coffee-bean-and-tea-leaf-logo.jpg&ehk=w534Wp1uTNvYHwM1rs1H%2bB%2bUv57AfL1647yoNYNM66k%3d&risl=&pid=ImgRaw&r=0",
      posted: "6 hours ago",
      skills: [
        "Ability to follow recipes and instructions",
        "Time management skills",
        "Teamwork and communication skills"
      ],
      role: "Prepares meals and ensures food quality, cleanliness, and safety standards are followed."
    },
    {
      id: 10,
      title: "IT Support Technician",
      company: "iSupport Worldwide",
      location: "Cagayan de Oro, Misamis Oriental",
      experience: "1+ years",
      type: "Fulltime",
      description: "Provide technical support and troubleshooting for hardware and software issues to internal and external customers.",
      salary: "₱15,000/month",
      logo: "https://th.bing.com/th/id/OIP.-5bj49gb7j4cPTtfLhJ9NgAAAA?w=132&h=150&c=7&r=0&o=5&pid=1.7",
      posted: "4 days ago",
      skills: [
        "Technical troubleshooting skills",
        "Strong knowledge of computer systems",
        "Excellent communication skills"
      ],
      role: "Assists with diagnosing and resolving hardware and software problems, ensuring systems run efficiently."
    },

        {
          id: 11,
          title: "Service Crew",
          company: "Jollibee",
          location: "Cagayan de Oro, Misamis Oriental",
          experience: "H.S Grad.",
          type: "Part-time",
          description: "The service crew will execute basic store operations such as food preparation and customer service",
          salary: "₱500/day",
          logo: "https://th.bing.com/th/id/OIP.yx5o7qgUHMI0CdPLW1UYnwHaFj?w=208&h=180&c=7&r=0&o=5&pid=1.7",
          posted: "5 days ago",
          skills: [
            "Able to work well under pressure and multitask",
            "At least high school graduate",
            "Customer service oriented. Friendly and pleasing personality."
          ],
          role: "Responsible for presenting menus to patrons, taking orders, and assisting with food preparation and inventory."
        },
        {
          id: 12,
          title: "Cashier",
          company: "Gaisano Mall",
          location: "Villanueva, Misamis Oriental",
          experience: "No experience required",
          type: "Part-time",
          description: "The cashier is responsible for scanning items, handling payments, and ensuring customer satisfaction during transactions",
          salary: "₱600/day",
          logo: "https://th.bing.com/th/id/OIP.qy_kuxkAGTZ21GhmxZ9DnAHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7",
          posted: "3 days ago",
          skills: [
            "Cash handling skills",
            "Attention to detail",
            "Customer service skills"
          ],
          role: "Handles cash and card transactions efficiently while ensuring a positive customer experience."
        },
        {
          id: 13,
          title: "Store Assistant",
          company: "7-Eleven",
          location: "El Salvador, Misamis Oriental",
          experience: "No experience required",
          type: "Contract",
          description: "Store Assistants are responsible for managing inventory, organizing shelves, and assisting customers with their purchases",
          salary: "₱450/day",
          logo: "https://th.bing.com/th/id/OIP.AB5zDhtv7-J_oDOCCuSqLwHaEK?w=281&h=180&c=7&r=0&o=5&pid=1.7",
          posted: "1 week ago",
          skills: [
            "Stocking and organizing products",
            "Good communication skills",
            "Ability to work in a fast-paced environment"
          ],
          role: "Ensures the store is clean, organized, and well-stocked, and assists customers in a friendly manner."
        },
        {
          id: 14,
          title: "Delivery Rider",
          company: "Lalamove",
          location: "Cagayan de Oro, Misamis Oriental",
          experience: "No experience required",
          type: "Part-time",
          description: "Delivery Riders are responsible for delivering packages to customers in a safe and timely manner",
          salary: "₱700/day + incentives",
          logo: "https://th.bing.com/th/id/OIP.NLxNMKZF0ECqhbUKNGmTqAAAAA?w=184&h=184&c=7&r=0&o=5&pid=1.7",
          posted: "2 days ago",
          skills: [
            "Must have a motorcycle and valid driver’s license",
            "Knowledge of routes and good time management",
            "Good communication skills"
          ],
          role: "Pick up and deliver packages to various locations within the area, ensuring timely and accurate deliveries."
        },
        {
          id: 15,
          title: "Maintenance Technician",
          company: "CDO Housing",
          location: "Tagoloan, Misamis Oriental",
          experience: "2+ years",
          type: "Fulltime",
          description: "The Maintenance Technician will handle basic repairs and maintenance of housing units and facilities",
          salary: "₱800/day",
          logo: "https://th.bing.com/th/id/OIP.i7YqDralgO_IYKzR9zrepQHaF0?w=217&h=180&c=7&r=0&o=5&pid=1.7",
          posted: "4 days ago",
          skills: [
            "Knowledge of plumbing, electrical, and carpentry work",
            "Troubleshooting skills",
            "Ability to work independently"
          ],
          role: "Handles repairs and ensures that residential and commercial units are maintained properly."
        },
        {
          id: 16,
          title: "Security Guard",
          company: "Securitas",
          location: "Magsaysay, Misamis Oriental",
          experience: "No experience required",
          type: "Part-time",
          description: "Security Guards are responsible for monitoring the premises, ensuring safety, and handling emergency situations",
          salary: "₱500/day",
          logo: "https://th.bing.com/th/id/OIP.mUgSy04VufBmAQw7RIVDSwHaEo?w=257&h=180&c=7&r=0&o=5&pid=1.7",
          posted: "2 days ago",
          skills: [
            "Alertness and attention to detail",
            "Ability to respond quickly to emergencies",
            "Basic knowledge of security protocols"
          ],
          role: "Patrols and monitors the assigned premises, ensuring the safety of individuals and property."
        },
        {
          id: 17,
          title: "Waiter/Waitress",
          company: "Mang Inasal",
          location: "Gingoog, Misamis Oriental",
          experience: "No experience required",
          type: "Part-time",
          description: "The waiter/waitress will serve food and beverages to customers, ensuring a pleasant dining experience",
          salary: "₱400/day",
          logo: "https://th.bing.com/th/id/OIP.d2OUbMXCJMyFqdIrmySCZwAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7",
          posted: "1 day ago",
          skills: [
            "Good communication skills",
            "Customer service skills",
            "Able to work under pressure"
          ],
          role: "Takes food and drink orders, serves food, and ensures that customers are satisfied."
        },
        {
          id: 18,
          title: "Barista",
          company: "Starbucks",
          location: "Cagayan de Oro, Misamis Oriental",
          experience: "No experience required",
          type: "Fulltime",
          description: "Baristas are responsible for preparing coffee, tea, and other beverages, while maintaining high standards of cleanliness and customer service",
          salary: "₱600/day",
          logo: "data:image/jpeg;base64,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",
          posted: "3 hours ago",
          skills: [
            "Customer service skills",
            "Ability to work in a fast-paced environment",
            "Basic knowledge of coffee preparation"
          ],
          role: "Prepares and serves drinks, assists customers with their orders, and maintains the cleanliness of the store."
        },
        {
          id: 19,
          title: "Factory Worker",
          company: "Del Monte Philippines",
          location: "Tagoloan, Misamis Oriental",
          experience: "No experience required",
          type: "Contract",
          description: "Factory workers assist in the production and packaging of food products",
          salary: "₱550/day",
          logo: "data:image/jpeg;base64,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",
          posted: "2 days ago",
          skills: [
            "Ability to work in a factory setting",
            "Attention to detail",
            "Ability to follow instructions"
          ],
          role: "Assists with the production process, packaging, and ensuring quality control in the factory."
        },
        {
          id: 20,
          title: "Customer Service Representative",
          company: "Teleperformance",
          location: "Cagayan de Oro, Misamis Oriental",
          experience: "No experience required",
          type: "Part-time",
          description: "Customer service reps handle customer inquiries, complaints, and provide information about products or services",
          salary: "₱700/day",
          logo: "https://th.bing.com/th/id/OIP.2j68ZIAdaIxkd0ddA1fZsQHaHa?rs=1&pid=ImgDetMain",
          posted: "5 days ago",
          skills: [
            "Excellent communication skills",
            "Problem-solving abilities",
            "Customer service experience (preferred)"
          ],
          role: "Assists customers by providing solutions to their inquiries and ensures a high level of customer satisfaction."
        },
        {
          id: 21,
          title: "Driver",
          company: "ACG Logistics",
          location: "Magsaysay, Misamis Oriental",
          experience: "2+ years",
          type: "Fulltime",
          description: "Responsible for transporting goods and products from one location to another in a timely manner",
          salary: "₱800/day",
          logo: "https://th.bing.com/th/id/OIP._Vloo0-RanYgfojJ5vwL6QHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7",
          posted: "3 days ago",
          skills: [
            "Valid driver's license",
            "Safe driving record",
            "Knowledge of routes"
          ],
          role: "Delivers products in a safe and timely manner, ensuring that all necessary documentation is completed."
        }
      
      
  ];
