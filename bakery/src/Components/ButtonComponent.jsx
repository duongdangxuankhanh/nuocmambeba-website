import React from 'react'
import { Link } from 'react-router'

const ButtonComponent = (props) => {
  const { contentButton, to, className = '' } = props
  const sharedClassName = 'inline-flex h-[52px] min-h-[52px] items-center justify-center rounded-full px-5 text-center text-[11px] sm:text-xs font-medium leading-none transition-all duration-200 border'

  if (to) {
    return (
      <Link
        className={`${sharedClassName} bg-black text-white border-black hover:bg-white hover:text-black ${className}`}
        to={to}
      >
        {contentButton}
      </Link>
    )
  }

  return (
    <button
      type='button'
      className={`${sharedClassName} bg-black text-white border-black hover:bg-white hover:text-black ${className}`}
    >
      {contentButton}
    </button>
  )
}

export default ButtonComponent