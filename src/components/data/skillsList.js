import frontEndIcon from '../../images/front-end-icon.png'
import backEndIcon from '../../images/back-end-icon.png'
import devOpsIcon from '../../images/dev-ops-icon.png'

export default {
    skills: [
        {
            icon: frontEndIcon,
            name: "Front End",
            statement: "I design custom UI's from the ground up, from pen and paper to deployment on the web",
            experience: "UI, UX, Websites, Mobile, Apps, Logos",
            tools: "HTML, CSS, SASS, BootStrap, Javascript, React, Photoshop, Illustrator"
        },
        {
            icon: backEndIcon,
            name: "Back End",
            statement: "I build secure and reliable API's, that hit online resources or custom built databases",
            experience: "RESTful API's, Authentication, Web Servers",
            tools: "Node, Express, Golang, Jest, Nginx"
        },
        {
            icon: devOpsIcon,
            name: "DevOps",
            statement: "I develop CI/CD pipelines, which make going from production to development a breeze",
            experience: "Static Web Pages, MicroServices, Fullstack Applications",
            tools: "Docker, Terraform, Ansible, AWS, Bash Scripts, Github Actions, Jira"
        },

    ]
};