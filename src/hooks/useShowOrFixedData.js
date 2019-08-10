import { useState, useEffect } from 'react'

<<<<<<< HEAD
// Custom hook
=======
>>>>>>> 5743232f698a0fee7d20d18604c3686a53dde2db
export function useShowOrFixedData () {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return { showFixed }
}
