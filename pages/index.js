import Head from 'next/head'
import { scroller } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Heading from '../components/Heading/Heading'
import About from '../components/ArticleWithIlustration/About'
import Education from '../components/ArticleWithIlustration/Education'
import WorkExperience from '../components/ArticleWithIlustration/WorkExperience'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'


export default function Home() {
 const goToSignUp = () => {
    scroller.scrollTo('contacts', {
      duration: 500,
      smooth: true,
    });
  };
  return (
    <div >
      <Head>
        <title>AlexScub React js developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="description" content="Oleksandr Skubachevskyi - maybe the best React-JS developer in Kyiv"/>
      </Head>
      <Header/>
      <main >
      <Heading CTA={goToSignUp} id="requirments" />
      <About CTA={goToSignUp} id="about" />
      <Education CTA={goToSignUp} id="education" />
      <WorkExperience CTA={goToSignUp} id="experience" />
      <Skills id="skills"/>
      <Projects id="projects" />
      <Contacts id="contacts" />
      </main>
      <Footer/>
    </div>
  )
}
