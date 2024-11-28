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
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/LBC_Express_logo.svg",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/SM_Supermalls_logo.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Red_Planet_Hotels_logo.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_design.svg",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Coffee_Bean_&_Tea_Leaf_logo.png",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/ISupport_Worldwide_Logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Jollibee_logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Gaisano_logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/7-Eleven_logo.svg/1200px-7-Eleven_logo.svg.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Lalamove_logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/CDO_Logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Securitas_logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Mang_inasal_logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Starbucks_logo_2011.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Del_Monte_Foods_logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Teleperformance_logo.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/ACG_logo.png",
          posted: "3 days ago",
          skills: [
            "Valid driver's license",
            "Safe driving record",
            "Knowledge of routes"
          ],
          role: "Delivers products in a safe and timely manner, ensuring that all necessary documentation is completed."
        }
      
      
  ];
