import { useAnswerSelectorContext } from '../context/context'
export const Radio = ( { children, id} ) => {
   const {  setAnswerId, questionId } = useAnswerSelectorContext()
   
   const handleChange = () => {
      setAnswerId([id])
   }

   return (
      <label htmlFor={id}>
         <input
            id={id}
            type="radio"
            name={questionId}
            value={id}
            onChange={handleChange}
         />
         {children}
      </label>
   )
}