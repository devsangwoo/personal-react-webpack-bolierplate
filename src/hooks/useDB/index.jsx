import { useContext, useEffect, useState } from 'react';

import translationJA from '../../../public/locales/jp/DB.json';
import translationKO from '../../../public/locales/ko/DB.json';

import { LanguageContext } from '../../context/LanguageContextWrapper';

function useDB() {
  const { isChecked } = useContext(LanguageContext);

  const [DB, setDB] = useState(translationJA);

  useEffect(() => {
    isChecked ? setDB(translationKO) : setDB(translationJA);
  }, [isChecked]);

  const {
    careers,
    introduce,
    personals,
    config,
    skills,
    awards,
    students,
  } = DB;

  const [hobby] = useState(DB.hobby);
  const [speaker] = useState(DB.speaker);
  const [activities] = useState(DB.activities);

  return {
    careers,
    introduce,
    config,
    skills,
    personals,
    hobby,
    speaker,
    activities,
    awards,
    students,
  };
}

export default useDB;
