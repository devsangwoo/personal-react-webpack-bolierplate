import React from 'react';
import classNames from 'classnames';
import useDB from '../../hooks/useDB';

import Card from '../layouts/Card';

import styles from './style.module.scss';

import EmailIcon from '../../assets/email.svg';
import GithubIcon from '../../assets/github.svg';
import PhoneIcon from '../../assets/phone.svg';
import BlogIcon from '../../assets/blog.svg';

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className);
  const { introduce, config } = useDB();

  return (
    <Card className={classProps} title={config.title} switchBtn={true}>
      <div className={styles.titleWrapper}>
        <div>
          <div className={styles.title1}>{introduce.title}</div>
          <div className={styles.title2}>{introduce.name}</div>
        </div>
      </div>

      <div className={styles.descriptions}>
        {introduce.description.map((des, idx) => {
          return (
            <React.Fragment key={'introduce' + des + idx}>
              <div className={styles.title3}>✅ {des}</div>
              <p className={styles.description}>
                {introduce.subdescription[idx][0]}
                <br />
                {introduce.subdescription[idx][1]}
              </p>
            </React.Fragment>
          );
        })}
      </div>

      <div className={styles.iconWrap}>
        <a className={styles.link} href={`tel:${config.phone}`}>
          <img className={styles.img} src={PhoneIcon} alt="phone-icon" />
        </a>
        <a className={styles.link} href={`mailto:${config.email}`}>
          <img className={styles.img} src={EmailIcon} alt="email-icon" />
        </a>
        <a className={styles.link} href={config.github}>
          <img className={styles.img} src={GithubIcon} alt="github-icon" />
        </a>
        <a className={styles.link2} href={config.blog1}>
          <img className={styles.img} src={BlogIcon} alt="blog-icon" />
        </a>
      </div>
    </Card>
  );
};

export default Introduce;
