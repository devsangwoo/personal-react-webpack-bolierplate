import { useState } from 'react'

import DB from '../../DB.json'

function useDB() {
  const [ careers ] = useState(DB.careers)
  const [ config ] = useState(DB.config)
  const [ skills ] = useState(DB.skills)
  const [ personals ] = useState(DB.personals)
  const [ hobby ] = useState(DB.hobby)
  const [ speaker ] = useState(DB.speaker)
  const [ activities ] = useState(DB.activities)
  const [ awards ] = useState(DB.awards)
  const [ students ] = useState(DB.students)

  return {
    careers,
    config,
    skills,
    personals,
    hobby,
    speaker,
    activities,
    awards,
    students
  }
}

export default useDB
