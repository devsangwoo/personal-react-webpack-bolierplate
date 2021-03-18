import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../context/LanguageContextWrapper';

import styles from './style.module.scss';

const Switch = ({ label, secondLabel }) => {
  const { isChecked, setIsChecked } = useContext(LanguageContext);

  useEffect(() => {
    if (!label) {
      throw new Error('Label is required');
    }
  });

  const onEnterAndClick = cb => {
    return {
      onClick: cb,
      onKeyPress: e => {
        if (e.which === 13 || e.which === 32) {
          cb && cb(e);
        }
      },
    };
  };

  const removeWhiteSpace = value => {
    return value.replace(/ /g, '');
  };

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={styles.switchContainer}>
        <div className={styles.wrapper} {...onEnterAndClick(onChange)}>
          <label
            id={`label-${removeWhiteSpace(label)}`}
            className={styles.checkboxLabel}
            {...onEnterAndClick(onChange)}
          >
            {label}
          </label>
          <div className={`${styles.switch} ${isChecked && styles.isChecked}`}>
            <div
              className={`${styles.circle} ${
                isChecked && styles.isCheckedCircle
              }`}
            />
          </div>
          <label
            id={`label-${removeWhiteSpace(secondLabel)}`}
            className={`${styles.checkboxLabel} ${
              isChecked && styles.isCheckedLabel
            }`}
            {...onEnterAndClick(onChange)}
          >
            {secondLabel}
          </label>
        </div>
      </div>
    </>
  );
};

export default Switch;
