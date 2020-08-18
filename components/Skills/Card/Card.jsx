import React from 'react'
import styles from './Card.module.css'

const Card = ({icon,text,title}) => {
    return (
        <li className={styles.card}>
            <h3>{title}</h3>
        <svg className={styles.icon}>
            <use href={icon}></use>
        </svg>
        <p className={styles.description}>{text}</p>
        </li>
    )
}

export default Card;
