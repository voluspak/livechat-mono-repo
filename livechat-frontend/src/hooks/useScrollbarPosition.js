import { useEffect, useRef } from "react"

export function useScrollbarPosition (effectDependencies) {
  const scrollbarContainer = useRef(null)
  useEffect(() => {
    const scrollbarContainerHeight = scrollbarContainer.current.scrollHeight
    scrollbarContainer.current.scrollTop = scrollbarContainerHeight
  
  }, [effectDependencies ?? null])

  return scrollbarContainer
}
