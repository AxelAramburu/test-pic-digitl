import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-4 space-y-6'>
      <h1>You&apos;re lost, go back to the Home Page</h1>
      <Link href={"/"}>
        <div className="btn w-24 hover">Home</div>
      </Link>
    </div>
  )
}

export default Error