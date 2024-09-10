import React from 'react'

interface HighlightTextProps {
  children: React.ReactNode
}

const HighlightText = ({children} : HighlightTextProps) => {
  return <span className="font-extrabold text-pureWhite">{children}</span>
}

export default HighlightText