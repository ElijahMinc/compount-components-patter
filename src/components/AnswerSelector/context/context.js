import { createContext, useContext } from "react";

export const AnswerSelectorContext = createContext(null)

export const useAnswerSelectorContext = () => useContext(AnswerSelectorContext)