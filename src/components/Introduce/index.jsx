import React from 'react';
import classNames from 'classnames';
import useDB from '../../hooks/useDB';

import Card from '../layouts/Card';

import styles from './style.module.scss';

import EmailIcon from '../../assets/email.svg';
import GithubIcon from '../../assets/github.svg';
import PhoneIcon from '../../assets/phone.svg';
import BlogIcon from '../../assets/blog.svg';
import logoImage from '../../assets/logoImage.png';

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className);
  const { config } = useDB();

  return (
    <Card className={classProps} title="이력서">
      <div className={styles.titleWrapper}>
        <div>
          <div className={styles.title1}>웹 프론트엔드 엔지니어</div>
          <div className={styles.title2}>조상우</div>
        </div>
      </div>

      <div className={styles.descriptions}>
        <div className={styles.title3}>
          ✅ 엔드 유저 입장에서 UI/UX를 고려하는 프론트엔드 엔지니어
        </div>
        <p className={styles.description}>
          유저 입장에서 만족할 수 있는 UI 설계를 목표하고 있습니다.
        </p>
        <div className={styles.title3}>
          ✅ 비즈니스 로직과 가치를 이해하려고 노력하는 엔지니어
        </div>
        <p className={styles.description}>
          다양한 분야와 규모의 회사에서의 경험을 통해 비지니스를 신속히
          이해하고,
          <br />
          주도적으로 프로덕트를 개선하는것을 목표로 하고 있습니다
        </p>
        <div className={styles.title3}>✅ 성장을 위해 멈추지 않는 엔지니어</div>
        <p className={styles.description}>
          개발자의 커리어를 시작한 이후로 한번도 쉬지 않고 개발을 하면서,
          <br />
          개발자로서의 성장을 끊임없이 도전하고 있습니다.
        </p>
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
