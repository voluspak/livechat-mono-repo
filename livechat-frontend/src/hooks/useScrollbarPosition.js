import { useEffect, useRef } from "react"

export function useScrollbarPosition (effectDependencies) {
  const scrollbarContainer = useRef(null)
  useEffect(() => {
    scrollbarContainer.current.scrollTop = 1389
  
  }, [effectDependencies ?? null])

  return scrollbarContainer
}
