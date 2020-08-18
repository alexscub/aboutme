import React from 'react'
import styles from './Skills.module.css'
import Card from './Card/Card'

const sprite = "/assets/images/My-SVG-sprite.svg";

const skillsList = [
    {
        icon:"#css",
        title: "CSS",
        text:"CSS version 3 technology. Flex-box. Position property. Pixel perfect. Mobile-first CSS. CSS box model. Responsive design. CSS libraries. Bootstrap.",
    },
    {
        icon:"#html5",
        title: "HTML",
        text:"Markup language. Document flow. HTML5 version. Semantic elements. Validation",
    },
    {
        icon:"#javascript",
        title: "Javascript",
        text:"ES6. Types of data. Logical Operators. Callback functions. Arrow functions. ES6 Classes. Document Object Model. Events. Asynchronous JS. Fetch API. Error handling. Async/await.",
    },
    {
        icon:"#react",
        title: "React js",
        text:"Properties and lifecycle of components. Component state and events. Client routing. Working with API. React Hooks. 3rd party libraries. REDUX. Next-JS framework.",
    },
    {
        icon:"#json",
        title: "API",
        text:"AJAX. APIes. CRUD principles. REST and restfull APIes usage. GET/POST/PUT/DELETE. HTTP headers and body. Postman usage.",
    },
    {
        icon:"#nodejs",
        title: "Node-js",
        text:"Node.js basics. Express framework. MongoDB basics. Asynchronous methods. SSR. Next-js APIs. Universal applications. Deployment.",
    },
    {
        icon:"#git",
        title: "GIT",
        text:"Version control system. Git basics. Git branches. Cloning and merging branches. Git workflow.",
    },
    {
        icon:"#code",
        title: "Basics",
        text:"Computer science basics. HTTP protocol understanding. Ethernet and domain names principles. ",
    }
]

const Skills = ({ id }) => {

    return (
        <section id={id}>
            <div className="container">
                <h2 className={styles.title}>List of skills</h2>
                <ul className={styles.list}>
                {skillsList.map((el,i)=> <Card key={i} icon={sprite+el.icon} text={el.text} title={el.title}/>)}
                </ul>
            </div>
        </section>
    )
}

export default Skills
