import { useEffect, useRef } from "react"

 export const useEffectSkipFirstMount = (cb, dp = []) => {
   const mounted = useRef(true)

   useEffect(() => {
      if(!mounted.current){
         cb?.()
      }
      mounted.current = false
   }, dp)
}
