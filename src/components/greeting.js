import React, { useState, useEffect } from "react"

const greetings = ['Hello!', 'Hi!', 'Hey there!', 'Moin!'];

const Greeting = () => {
  const [greeting, setGreeting] = useState('...')
  useEffect(() => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]

    setGreeting(randomGreeting)
  }, [])

  return (
    <span className="has-background-dark has-text-white-ter px-3">
      {greeting}
    </span>
  )
}

export default Greeting
