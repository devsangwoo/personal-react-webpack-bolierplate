import React from 'react';
import classNames from 'classnames';

import useDB from '../../hooks/useDB';

import Card from '../layouts/Card';
import Section from '../layouts/Section';

import styles from './style.module.scss';

const Personals = ({ className }) => {
  const classProps = classNames(styles.personals, className);
  const { personals } = useDB();

  const Description = ({ title, subTitle }) => (
    <ul key={title} className={styles.description}>
      {title.length > 1 ? (
        <>
          <div className={styles.title}>{title[0]}</div>
          <div className={styles.title}>{title[1]}</div>
        </>
      ) : (
        <li className={styles.title}>{title}</li>
      )}

      {subTitle.length > 1 ? (
        <>
          <div className={styles.subTitles}>
            <span className={styles.subTitle}>{subTitle[0]}</span>
          </div>
          <div className={styles.subTitles}>
            <span className={styles.subTitle}>{subTitle[1]}</span>
          </div>
        </>
      ) : (
        subTitle.map((st, index) => (
          <div key={st} className={styles.subTitles}>
            <span className={styles.subTitle} key={`subtitle-${index}`}>
              {st}
            </span>
          </div>
        ))
      )}
    </ul>
  );

  const Personal = ({ title, descriptions }) => (
    <Section key={title} className={styles.skill}>
      <span className={styles.title}>{title}</span>
      <div className={styles.descriptions}>
        {descriptions.map(description => Description(description))}
      </div>
    </Section>
  );

  return (
    <Card className={classProps} title={personals.title}>
      {personals.list.map(skill => Personal(skill))}
    </Card>
  );
};

export default Personals;
