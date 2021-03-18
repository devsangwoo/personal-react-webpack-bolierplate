import React from 'react';
import classNames from 'classnames';

import useDB from '../../hooks/useDB';

import styles from './style.module.scss';

import Card from '../layouts/Card';
import Section from '../layouts/Section';
import ImageBox from '../ImageBox/ImageBox';
import lapOne from '../../assets/images/lap-analysis.png';
import lapTwo from '../../assets/images/lap-login.png';
import lapThree from '../../assets/images/lap-chart.png';
import rtOne from '../../assets/images/rt-dui.png';
import rtTwo from '../../assets/images/rt-calendar.png';
import rtThree from '../../assets/images/rt-hurusato.png';

const FIRST_IMG_LIST = [lapOne, lapTwo, lapThree];
const SECOND_IMG_LIST = [rtOne, rtTwo, rtThree];

const Careers = ({ className }) => {
  const classProps = classNames(styles.careers, className);

  const { careers } = useDB();

  const Project = ({
    name,
    description,
    startDate,
    endDate,
    which,
    techStacks,
  }) => (
    <Section key={name} className={styles.project}>
      <span className={styles.title}>{name}</span>
      <div className={styles.wrap}>
        <div className={styles.descriptions}>
          {description.map((desc, index) => (
            <span
              className={styles.description}
              key={`description-inner-${index}`}
            >
              {desc}
            </span>
          ))}
        </div>
        <div className={styles.date}>
          <span className={styles.start}>{startDate} ~</span>
          <span className={styles.end}>{endDate}</span>
        </div>
      </div>
      <ul className={styles.whiches}>
        {which.map((w, index) => (
          <li className={styles.which} key={`which-${index}`}>
            {`✅`} &nbsp; {`${w}`}
          </li>
        ))}
      </ul>
      <div className={styles.techStacks}>
        {techStacks.map((ts, index) => (
          <span className={styles.techStack} key={`techStack-${index}`}>
            {`#`} &nbsp; {ts}
          </span>
        ))}
      </div>
    </Section>
  );

  const ProjectWithoutDetail = ({ name, description }) => (
    <Section key={name} className={styles.project}>
      <span className={styles.title}>{name}</span>
      <div className={styles.wrap}></div>
      <ul>
        {description.map((desc, index) => (
          <li className={styles.which} key={`which-without-${index}`}>
            {`✅`} &nbsp; {`${desc}`}
          </li>
        ))}
      </ul>
    </Section>
  );

  const Career = (
    {
      name,
      department,
      position,
      startDate,
      endDate,
      description,
      projects,
      details,
    },
    index,
  ) => (
    <Section key={name} className={styles.career}>
      <div className={styles.headerWrapper}>
        <div className={styles.intro}>
          <span className={styles.title}>{name}</span>
          <span className={styles.department}>{department}</span>
          <span className={styles.position}>{position}</span>
        </div>
        <div className={styles.date}>
          <span className={styles.start}>{startDate} ~</span>
          {!!endDate && <span className={styles.end}>{endDate}</span>}
        </div>
        <div className={styles.descriptions}>
          {description.map((desc, index) => (
            <span
              className={styles.description}
              key={`new-description-${index}`}
            >
              {desc}
            </span>
          ))}
        </div>
      </div>
      <div className={`${projects ? styles.projects : styles.details}`}>
        {projects
          ? projects.map((project, index) => Project(project))
          : details.map((detail, index) => ProjectWithoutDetail(detail))}
        {(index === 0 && (
          <>
            <span className={styles.imgTitle}>🏆 Project List</span>
            <ImageBox images={FIRST_IMG_LIST} />
          </>
        )) ||
          (index === 1 && (
            <>
              <span className={styles.imgTitle}>🏆 Project List</span>
              <ImageBox images={SECOND_IMG_LIST} />
            </>
          ))}
      </div>
    </Section>
  );

  return (
    <Card className={classProps} title={careers.title}>
      {careers.list.map((career, index) => Career(career, index))}
    </Card>
  );
};

export default Careers;
