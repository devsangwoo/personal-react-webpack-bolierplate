import React from 'react';
import classNames from 'classnames';

import useDB from '../../hooks/useDB';

import Card from '../layouts/Card';

import styles from './style.module.scss';

const Awards = ({ className }) => {
  const classProps = classNames(styles.awards, className);
  const { awards } = useDB();

  return (
    <Card title="보유 자격 및 수상 이력" className={classProps}>
      {awards.list.map((award, index) => (
        <span className={styles.award} key={`awards-${index}`}>
          {award.title}
        </span>
      ))}
    </Card>
  );
};

export default Awards;
