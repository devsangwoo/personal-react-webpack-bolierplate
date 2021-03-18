import React from 'react';

import styles from './style.module.scss';

import Introduce from '../../components/Introduce';

import Careers from '../../components/Careers';
import Skills from '../../components/Skills';
import Personals from '../../components/Personals';

import Awards from '../../components/Awards';
import Student from '../../components/Student';
import LanguageContextWrapper from '../../context/LanguageContextWrapper';

const Home = () => {
  return (
    <LanguageContextWrapper>
      <div className={styles.container}>
        <Introduce className={styles.item} />
        <Careers className={styles.item} />
        <Student className={styles.item} />
        <Awards className={styles.item} />
        <Skills className={styles.item} />
        <Personals className={styles.item} />
      </div>
    </LanguageContextWrapper>
  );
};

export default Home;
