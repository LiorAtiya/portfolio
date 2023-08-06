import { RiComputerLine } from 'react-icons/ri'
import { BsCircleFill } from 'react-icons/bs'
import { IProject, IService, ISkill } from './type'
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { GiLampreyMouth } from "react-icons/gi";

// import { RiComputerLine } from "react-icons/ri";
// import { IProject, Service, Skill } from "./types";
export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    },
    {
        Icon: FaServer,
        title: "Backend Development",
        about:
            "handle database, server, api using <b>Express, REST API</b> & other popular frameworks",
    },
    {
        Icon: GiLampreyMouth,
        title: "Machine Learning Development",
        about: "Integrates the use of <b>BigML</b> in the projects to data analysis and drawing conclusions",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
    },
]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'JAVA',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'C',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'C++',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'TypeScript',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'Node.js',
        level: '100%',
        Icon: BsCircleFill
    },
]

export const tools: ISkill[] = [
    {
        name: 'Firebase',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'MongoDB',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'Redis',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'MySQL',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'PostgreSQL',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'Docker',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'Kafka',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'Linux',
        level: '100%',
        Icon: BsCircleFill
    },
    {
        name: 'BigML',
        level: '100%',
        Icon: BsCircleFill
    }
]

export const projects: IProject[] = [
    {
        id: 0,
        name: 'OtterBeat',
        description: 'OtterBeat is a new music platform that allows people to search for their favorite artists’ songs catalog.',
        image_path: '/images/OtterBeat.png',
        deployed_url: 'https://otterbeat.vercel.app',
        github_url: 'https://github.com/LiorAtiya/OtterBeat',
        category: ['javascript'],
        key_techs: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Cloudinary', 'Docker', 'Tailwind', 'Vite'],
    },
    {
        id: 1,
        name: 'Bizweb',
        description: 'Bizweb platform give business owners access to various services including publishing information about their company, uploading photos, products & services, online shop, as well as managing a virtual meeting scheduler.',
        image_path: '/images/bizweb.png',
        deployed_url: 'https://bizweb-israel.netlify.app',
        github_url: 'https://github.com/LiorAtiya/Bizweb',
        category: ['javascript'],
        key_techs: ['React', 'Node.js', 'Firebase', 'MongoDB', 'Cloudinary', 'Bing Maps', 'BigML', 'Material UI'],
    },
    {
        id: 2,
        name: 'SmartBrain',
        description: 'AI face recognition React application 🧠',
        image_path: '/images/smartbrain.png',
        deployed_url: 'https://smart-brain-israel.netlify.app',
        github_url: 'https://github.com/LiorAtiya/SmartBrain',
        category: ['javascript'],
        key_techs: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Clarifai API'],
    },
    {
        id: 3,
        name: 'Rick and Morty',
        description: 'A comparison application between the characters of the series and use via API',
        image_path: '/images/rickandmorty.png',
        deployed_url: 'https://rick-and-morty-lioratiya.vercel.app/',
        github_url: 'https://github.com/LiorAtiya/Rick-And-Morty',
        category: ['javascript'],
        key_techs: ['React', 'Bootstrap', 'Tachyons'],
    },
    {
        id: 4,
        name: 'Pokemon',
        description: 'Weighted graph algorithms implementations and game simulation using a GUI',
        image_path: '/images/pokemon.gif',
        deployed_url: '',
        github_url: 'https://github.com/LiorAtiya/Pokemon-Game',
        category: ['java'],
        key_techs: ['OOP', 'GUI', 'JunitTest', 'JSON', 'Graph algorithms'],
    },
    {
        id: 5,
        name: 'TeamBall',
        description: 'Application for arranging neighborhood sports games.',
        image_path: '/images/teamball.png',
        deployed_url: '',
        github_url: 'https://github.com/LiorAtiya/TeamBall',
        category: ['java'],
        key_techs: ['Android Studio', 'Firebase'],
    },
    {
        id: 6,
        name: 'Call Center',
        description: 'A system consisting of 3 parts – receiving incoming calls, displaying RT data in a dashboard view, saving the call history in DB and using it to predict calls with machine learning.',
        image_path: '/images/callcenter.jpeg',
        deployed_url: '',
        github_url: 'https://github.com/OfirOvadia96/BigData_Final-Project',
        category: ['javascript'],
        key_techs: ['EJS', 'Express', 'Docker', 'Kafka', 'BigML', 'MySQL', 'MongoDB', 'Redis', 'WebSocket'],
    },
    {
        id: 7,
        name: 'SMS Phishing Detection',
        description: 'A generative adversarial network which relies on limited set of labeled data as well as unlabeled data for opinion spam detection.',
        image_path: '/images/sms-phishing.jpeg',
        deployed_url: '',
        github_url: 'https://github.com/LiorAtiya/SMS-Phishing-Detection-Semi-Supervised',
        category: ['python'],
        key_techs: ['Jupyter Notebook', 'TensorFlow', 'sklearn', 'pandas', 'GPT2', 'SpamGAN'],
    },
    {
        id: 8,
        name: 'Directed Weighted Graph',
        description: 'This project deals with the construction of directed weighted graph starting from the creation of the nodes in the graph, continues with the creation of the graph itself (such as connecting the nodes in the graph and more) and basic algorithms related to the graph',
        image_path: '/images/graph.png',
        deployed_url: '',
        github_url: 'https://github.com/shiloeli/Directed_Weighted_Graph',
        category: ['python'],
        key_techs: ['NetworkX', 'Matplotlib', 'Shortest path algorithms'],
    },
    {
        id: 9,
        name: 'Evil Twin',
        description: 'An evil twin is a fraudulent Wi-Fi access point that appears to be legitimate but is set up to eavesdrop on wireless communications.The evil twin is the wireless LAN equivalent of the phishing scam.',
        image_path: '/images/evil-twin.png',
        deployed_url: '',
        github_url: 'https://github.com/LiorAtiya/Evil-Twin-Project',
        category: ['python'],
        key_techs: ['Cyber', 'Linux Kali', 'scapy', 'Threads'],
    },
    {
        id: 10,
        name: 'Pandemic',
        description: 'Board game for 2 to 4 players, playing together to cure diseases and discover cures.',
        image_path: '/images/pandemic.jpeg',
        deployed_url: '',
        github_url: 'https://github.com/LiorAtiya/Pandemic',
        category: ['c++'],
        key_techs: ['OOP', 'Makefile'],
    },
    {
        id: 11,
        name: 'Clone semi Shell',
        description: 'Development of Shell as part of the operating systems course.',
        image_path: '/images/shell.jpeg',
        deployed_url: '',
        github_url: 'https://github.com/LiorAtiya/Advanced-Programming/tree/main/HW2_Build_Shell',
        category: ['c'],
        key_techs: [],
    },
]
