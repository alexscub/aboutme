import React from 'react'
import styles from './Projects.module.css'

const Projects = ({id}) => {
    return (
        <section id={id}>
            <div className="container">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.galery}>
        <div className={styles.card}>
            <div className={styles.cardImage}>
            <img src="/assets/images/banner-photo.jpg"/>
            <h3 className={styles.cardTitle}>Wallet app</h3>
            </div>
            <p className={styles.cardContent}> Single page React application for budget planning and managing expenses and incomes. All transactions saves to back-end. Developed in team, using scrum methodology. Used Redux for state managment.</p>
            <div className={styles.cardActions}>
            <a className={styles.link} href="https://app-wallet-14.herokuapp.com/#/login" target="blanc">Link to app</a>
            <a className={styles.link} href="https://github.com/VitaliiKalinbet/wallet_app_frontend" target="blanc">Link to github</a>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.cardImage}>
            <img src="/assets/images/banner-photo.jpg"/>
            <h3 className={styles.cardTitle}>about me app</h3>
            </div>
            <p className={styles.cardContent}>Small Next-js application-CV , in which you can easy read my CV and send me messages. I used Node-mailer for sending e-mail from website. Personal auth-data stored in environment.</p>
            <div className={styles.cardActions}>
            <a className={styles.link} href="https://imrad.vercel.app/" target="blanc">Link to app</a>
            <a className={styles.link} href="https://github.com/alexscub/mouserNextjs" target="blanc">Link to github</a>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.cardImage}>
            <img src="/assets/images/banner-photo.jpg"/>
            <h3 className={styles.cardTitle}>imrad-buyer app</h3>
            </div>
            <p className={styles.cardContent}>Small application for buyers department, which get stock from global supplier thru API and calculates current price. <br/>I used Next js api ability and store api key in environment for security.</p>
            <div className={styles.cardActions}>
            <a className={styles.link} href="https://imrad.vercel.app/" target="blanc">Link to app</a>
            <a className={styles.link} href="https://github.com/alexscub/mouserNextjs" target="blanc">Link to github</a>
            </div>
        </div>

        </div>
        </div>
        </section>
    )
}

export default Projects;
