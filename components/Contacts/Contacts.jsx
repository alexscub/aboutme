import React, { useState } from 'react';
import axios from 'axios';
import styles from './Contacts.module.css'
import Button from '../Shared/Button/Button'
import Modal from "../Shared/Modal/Modal"
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";

const Contacts = ({ id }) => {
    const initialInputState = { email: "", name: "", message: "" };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [isModalOpened, setOpenModal] = useState(false);
    const [isMessageSent, setMessageSent] = useState(false);
    const [isMessageSending, setMessageSending] = useState(false);
    const closeModal = () => setOpenModal(false);
    const { email, name, message } = eachEntry;
    console.log(email, name, message)
    const handleChange = (e) => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageSending(true);
        axios.post('/api/sendmesage', eachEntry)
            .then(data => {
                setMessageSent(true);
                setOpenModal(true);
                setEachEntry(initialInputState)
                setMessageSending(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <section id={id}>
            <div className="container">
                {isModalOpened && <Modal
                    success={isMessageSent}
                    closeModal={closeModal}
                />}
                <h2 className={styles.title}>Contact with me!</h2>
                <form
                    className={styles.contactsForm}
                    method="POST"
                    id="mainForm"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                >
                    <p className={styles.paragraph}>
                        I am opened for any interesting work/project/collaboration.
                        <br />
                        Have any question? You can easy contact with me, by following form.
                </p>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            required
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            placeholder="Your/company/project name"
                            value={name}
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            className={`${styles.input} ${styles.textarea}`}
                            form="mainForm"
                            name="message"
                            placeholder="Your can input message here"
                            rows="4"
                            value={message}
                            required
                        >
                        </textarea>
                    </div>

                    {!isMessageSending && <Button type="submit" label="Send message" />}
                </form>
                <div className="spinnerWrapper"><HashLoader
                    css={css`
          display: block;
          margin: 0 auto;
        `}
                    size={100}
                    color={"#123abc"}
                    loading={isMessageSending} />
                </div>
            </div>
        </section >
    )
}

export default Contacts;
