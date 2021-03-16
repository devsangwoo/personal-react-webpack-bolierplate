import React from 'react';
import classNames from 'classnames';

import useDB from '../../hooks/useDB';

import Card from '../layouts/Card';
import Section from '../layouts/Section';

import styles from './style.module.scss';

const Student = ({ className }) => {
  const classProps = classNames(styles.students, className);
  const { students } = useDB();

  return (
    <Card title="학력" className={classProps}>
      {students.list.map((award, index) => (
        <span className={styles.award} key={`award-${index}`}>
          {award.title}
        </span>
      ))}
    </Card>
  );
};

export default Student;
