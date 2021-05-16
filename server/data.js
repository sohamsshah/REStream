const data = {
    categories:[
        {
            name:"Computer Science",
            category_name: "computer-science",
            thumbnail: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=969&q=80",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            redirect: "/categories/computer-science", 
            tags:["Computing", "Programming", "Data Structures"]
        },
        {
            name:"Renewable Energy",
            category_name: "renewable-energy",
            thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            redirect: "/categories/renewable-energy",
            tags:["Solar", "Wind", "Sustainable Tech"]
        },
        {
            name:"Artificial Intelligence",
            category_name: "artificial-intelligence",
            redirect: "/categories/artificial-intelligence",
            thumbnail: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            tags:["Computer Vision", "Machine Learning", "Neural Networks"]
        },
        {
            name:"Electrical Enginnering" ,
            category_name: "electrical-engineering",
            redirect: "/categories/electrical-engineering",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            thumbnail: "https://images.unsplash.com/photo-1536418376156-ce59f73aa838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            tags:["Power Systems", "Industrial"]
        }
    ],

    creators: [
        {
            // creator_id: "1",
            redirect: "/instructors/",
            isChannel: false,
            name:"Derek Banas",
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwnjUAaFsikVB8U9VFt_TE6w074PwyaM48yC3HobDbQ=s176-c-k-c0x00ffffff-no-rj",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        },
        {
            // creator_id: "2",
            redirect: "/channels/",
            name:"MIT OpenCourseWare",
            isChannel: true,
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwniz0cQuf5DkaTMFcOleJYHcLL2eepERIVkj7wX5=s176-c-k-c0x00ffffff-no-rj",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        },
        {
            // creator_id: "3",
            isChannel: true,
            redirect: "/channels/",
            name:"Google Developers",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwngOju7AKiAvKEs1wtsZN366tyNPyMq3nD8eFkMF7bE=s176-c-k-c0x00ffffff-no-rj",
        },
        {
            // creator_id: "4",
            name:"Code Bullet",
            isChannel: false,
            redirect: "/instructors/",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwnhG70hoc2gsqGaYrXDU1J31FfG_eW4NXeuN18R-XA=s176-c-k-c0x00ffffff-no-rj",
        },
        {
            // creator_id: "5",
            isChannel: true,
            redirect: "/channels/",
            name:"Stanford University",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwnikgyranRGD0C6YI2WbXOSiuNU8qBNxbDTuwOt-eQ=s176-c-k-c0x00ffffff-no-rj",
        },
        {
            // creator_id: "6",
            isChannel: false,
            redirect: "/instructors/",
            name:"Sentdex",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwniWY0KJZhfkhAau-e_5OEeWxXabgPObQVGTL6adyw=s176-c-k-c0x00ffffff-no-rj",
        },
        {
            // creator_id: "7",
            isChannel: true,
            redirect: "/channels/",
            name:"Microsoft Research",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwnj1ivtTbvGoI28ustHjS78JRKh2WzeGBmEMev3Chw=s88-c-k-c0x00ffffff-no-rj",
        },
        {
            // creator_id: "8",
            isChannel: true,
            redirect: "/channels/",
            name:"ComputerPhile",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            thumbnail: "https://yt3.ggpht.com/ytc/AAUvwnh2alWTD-FGJ2UuFblD_B4f4t9q_fibfjUIRxuFzQ=s176-c-k-c0x00ffffff-no-rj",
        },

    ],
    videos: [
        {
            _id: "Wo5dMEP_BbI",
            name: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
            thumbnail: "https://img.youtube.com/vi/Wo5dMEP_BbI/hqdefault.jpg",
            category_name:"artificial-intelligence",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            creator_id: "60a0e9d3382b93055becc89f"
        },
        {
            _id: "F_Riqjdh2oM",
            name: "Quantum Computing for Computer Scientists",
            thumbnail: "https://img.youtube.com/vi/F_Riqjdh2oM/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"computer-science",
            
            creator_id: "60a0e9d3382b93055becc8a0"
        },
        {
            _id: "vNHpsC5ng_E",
            name: "Design Patterns Video Tutorial",
            thumbnail: "https://img.youtube.com/vi/vNHpsC5ng_E/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"computer-science",
            
            creator_id: "60a0e9d3382b93055becc89a"
        },
        {
            _id: "r63f51ce84A",
            name: "Git Video Tutorial",
            thumbnail: "https://img.youtube.com/vi/r63f51ce84A/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"computer-science",
            
            creator_id: "60a0e9d3382b93055becc89a"
        },
        {
            _id: "C_zFhWdM4ic",
            name: "How Blurs & Filters Work - Computerphile",
            thumbnail: "https://img.youtube.com/vi/C_zFhWdM4ic/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            
            category_name:"artificial-intelligence",
            creator_id: "60a0e9d3382b93055becc8a1"
        },
        {
            _id: "nykOeWgQcHM",
            name: "What is Computation?",
            thumbnail: "https://img.youtube.com/vi/nykOeWgQcHM/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            
            category_name:"computer-science",
            creator_id: "60a0e9d3382b93055becc89b"
        },
        {
            _id: "C_pgH5QhIZ8",
            name: "Getters and Setters",
            thumbnail: "https://img.youtube.com/vi/C_pgH5QhIZ8/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            
            category_name:"computer-science",
            creator_id: "60a0e9d3382b93055becc89b"
        },
        {
            _id: "LOVZE9WalRE",
            name: "MIT-Fundamentals of PhotoVoltaics Introduction",
            thumbnail: "https://img.youtube.com/vi/LOVZE9WalRE/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"renewable-energy",
            
            creator_id: "60a0e9d3382b93055becc89b"
        },
        {
            _id: "y4uc4t5vcdI",
            name: "Wind and Micro-Hydro Power; Trip Planning",
            thumbnail: "https://img.youtube.com/vi/y4uc4t5vcdI/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"renewable-energy",
            
            creator_id: "60a0e9d3382b93055becc89b"
        }, 
        {
            _id: "ZU63upQQOlE",
            name: "Stanford Certificate - Electronic Circuits",
            thumbnail: "https://img.youtube.com/vi/ZU63upQQOlE/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"electrical-engineering",
            
            creator_id: "60a0e9d3382b93055becc89e"
        },
        {
            _id: "qUQNORiToRI",
            name: "Stanford Electrical Engineering Professor Thomas Lee and the Internet of Everything",
            thumbnail: "https://img.youtube.com/vi/qUQNORiToRI/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"electrical-engineering",
            
            creator_id: "60a0e9d3382b93055becc89e"
        },
        {
            _id: "ZZNb1NOPTp8",
            name: "Build your mobile app with Google Cloud Platform",
            thumbnail: "https://img.youtube.com/vi/ZZNb1NOPTp8/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"computer-science",
            
            creator_id: "60a0e9d3382b93055becc89c"
        },
        {
            _id: "-8XmD2zsFBI",
            name: "Machine Learning Foundations: Ep #10 - Using NLP to build a sarcasm classifier",
            thumbnail: "https://img.youtube.com/vi/-8XmD2zsFBI/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"artificial-intelligence",
            
            creator_id: "60a0e9d3382b93055becc89c"
        },
        {
            _id: "JeVDjExBf7Y",
            name: "What are Neural Networks || How AIs think",
            thumbnail: "https://img.youtube.com/vi/-8XmD2zsFBI/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"artificial-intelligence",
            
            creator_id: "60a0e9d3382b93055becc89c"
        },
        {
            _id: "BOZfhUcNiqk",
            name: "How AIs learn part 2 || Coded example",
            thumbnail: "https://img.youtube.com/vi/BOZfhUcNiqk/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"artificial-intelligence",
            
            creator_id: "60a0e9d3382b93055becc89d"
        },
        {
            _id: "5LdrEla49Nw",
            name: "Terminal tutorial. How to get a basic algorithm working",
            thumbnail: "https://img.youtube.com/vi/5LdrEla49Nw/hqdefault.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            category_name:"artificial-intelligence",
            creator_id: "60a0e9d3382b93055becc89d"
        }  
          
    ]

}

module.exports = {videos: data.videos, creators: data.creators, categories: data.categories} 