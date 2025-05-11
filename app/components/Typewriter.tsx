import React, { useEffect, useState } from 'react'

type TypewriterProps = {
  words: string[]
  loop?: boolean
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentWord = words[wordIndex % words.length]

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, deletingSpeed)
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex(prev => (prev + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ])

  useEffect(() => {
    if (
      !loop &&
      wordIndex === words.length - 1 &&
      text === words[words.length - 1] &&
      !isDeleting
    ) {
      // Stop animation if not looping
      return
    }
  }, [loop, wordIndex, words, text, isDeleting])

  return (
    <span>
      {text}
      {/* Cursor */}
      {/* <span className="animate-pulse">|</span> */}
    </span>
  )
}

export default Typewriter
