import React from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';
import Switch from '../../Switch/Switch';

const Card = ({ title, children, className, switchBtn }) => {
  const classProps = classNames(styles.default, className);
  const headerProps = classNames(styles.header, !!title && styles.blank);

  return (
    <div className={classProps}>
      <div className={headerProps}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.point}>.</h1>
        {switchBtn && (
          <h1 className={styles.switch}>
            <Switch label={'JP'} secondLabel={'KR'} />
          </h1>
        )}
      </div>
      <div className={styles.contents}>{children}</div>
    </div>
  );
};

export default Card;
