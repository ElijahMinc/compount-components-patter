import {  useState } from "react"
import {AnswerSelectorContext} from './context/context'
import { Radio } from './Radio/Radio' 
import {Question} from './Question/Question'
import { Checkbox } from "./Checkbox/Checkbox"
import {useEffectSkipFirstMount} from '../../hooks/useEffectSkipFirstMount'


export const AnswerSelector = ({ children, onChange, questionId }) => {
   const [ answerId, setAnswerId ] = useState([])

   useEffectSkipFirstMount(() => {
      onChange({
         questionId,
         answerId
      })
   }, [answerId])

   const value = {
      answerId,
      setAnswerId,
      questionId
   }

   return <AnswerSelectorContext.Provider value={value}>
      {children}
   </AnswerSelectorContext.Provider>

}

AnswerSelector.Question = Question
AnswerSelector.Radio = Radio
AnswerSelector.Checkbox = Checkbox