import React from 'react'

function QuestionCard({data}) {
  return (
    <div className='QuestionCard'>
        <p className='userName'>{data?.userName}</p>
        <p>Lorem ipsum dolor sit amet</p>

        <div className='userDetails'>
            
        </div>
    </div>
  )
}

export default QuestionCard