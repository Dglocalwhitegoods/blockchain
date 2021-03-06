import { useEffect, useState } from 'react'
import { createVeriffFrame } from '@veriff/incontext-sdk'

function Success({ handleVeriffMessage, url }) {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    if (!isActive && !document.getElementById('veriffFrame')) {
      createVeriffFrame({
        onEvent: handleVeriffMessage,
        url
      })
      setIsActive(true)
    }
  }, [isActive])

  return null
}

export default Success
