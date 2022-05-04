import { useState } from "react"
import {useAnswerSelectorContext} from '../context/context'

export const Checkbox = ( { children, id } ) => {
   const [checked, setChecked] = useState(false)

   const { answerId, setAnswerId, questionId } = useAnswerSelectorContext()
   console.log(id)
   const onChange = () => {
      debugger
      const currentChecked = !checked
      setChecked(currentChecked)

      currentChecked ? 
         setAnswerId(prev => [...prev, {
            questionId,
            answerId: id
         }])
       : setAnswerId(answerId.filter(({answerId}) => answerId !== id))


   }

   return (
      <label htmlFor={id}>
         <input
            id={id}
            type='checkbox'
            name={questionId}
            value={checked}
            onChange={onChange}
         />
         {children}
      </label>
   )
}