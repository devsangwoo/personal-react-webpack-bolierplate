import React from 'react'

import styles from './style.module.scss'

import Introduce from '../../components/Introduce'
import Hobby from '../../components/Hobby'
import Careers from '../../components/Careers'
import Skills from '../../components/Skills'
import Personals from '../../components/Personals'
import Activities from '../../components/Activities'
import Awards from '../../components/Awards'
import Student from '../../components/Student'

const Home = () => {
  return (
    <div className={styles.container}>
      <Introduce className={styles.item} />
      <Careers className={styles.item} />
      <Student className={styles.item} /> 
      <Awards className={styles.item} />
      <Skills className={styles.item} />
      <Personals className={styles.item} />
      {/* <Personals className={styles.item} /> */}
      {/* <Hobby className={styles.item} />


*/}
    </div>
  )
}

export default Home
