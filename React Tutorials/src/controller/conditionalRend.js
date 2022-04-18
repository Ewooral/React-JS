import React from 'react'


const RedButton = () => {
  return (
    <>
      <button className='red'>Red</button>
    </>
  )
}

const GreenButton = () => {
  return (
    <>
      <button className='green'>Green</button>
    </>
  )
}



const conditionalRend = ({allowed}) => {
  return (
    <>
    <section>
      { allowed ? <GreenButton /> : <RedButton />}
    </section>
    </>
  )
}

export default conditionalRend
