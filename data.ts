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
        name: 'JavaScript',
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
        id: 1,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 2,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 3,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 4,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 5,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 6,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 7,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 8,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 9,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
    {
        id: 10,
        name: 'Bizweb',
        description: 'bla bla',
        image_path: '/images/background.png',
        deployed_url: '',
        github_url: '',
        category: ['react'],
        key_techs: ['React', 'Material UI'],
    },
]
