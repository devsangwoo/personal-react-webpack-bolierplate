import React from 'react'
import classNames from 'classnames'

import useDB from '../../hooks/useDB'

import Card from '../layouts/Card'
import Section from '../layouts/Section'

import styles from './style.module.scss'

const Personals = ({ className }) => {
  const classProps = classNames(styles.personals, className)
  const { personals } = useDB()

  const Description = ({ title, subTitle }) => (
    <ul className={styles.description}>
      <li className={styles.title}>{title}</li>
      <div className={styles.subTitles}>
        {subTitle.map((st, index) => (
          <span className={styles.subTitle} key={`subtitle-${index}`}>
            {st}
          </span>
        ))}
      </div>
    </ul>
  )

  const Personal = ({ title, descriptions }) => (
    <Section className={styles.skill}>
      <span className={styles.title}>{title}</span>
      <div className={styles.descriptions}>{descriptions.map((description) => Description(description))}</div>
    </Section>
  )

  return (
    <Card className={classProps} title={personals.title}>
      {personals.list.map((skill) => Personal(skill))}
    </Card>
  )
}

export default Personals
