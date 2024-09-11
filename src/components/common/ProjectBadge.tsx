import React from 'react'

interface ProjectBadgeProps {
    tagName : string
}
const ProjectBadge = ({tagName} : ProjectBadgeProps) => {
  return (
    <div className='px-3 py-[2px] font-bold text-white bg-secondary text-xs rounded-2xl'>{tagName}</div>
  )
}

export default ProjectBadge