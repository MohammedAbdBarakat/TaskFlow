import React, { useEffect, useState } from 'react'

const ChallengeItem = ({challenge , handleComplete}) => {
    let [challengeContent,setChallengeContent]=useState(<></>);
    
    useEffect(()=>{
        if (challenge.isDone){
            setChallengeContent(
            <section className='h-[20vh] backdrop-blur-[1px] flex flex-col justify-around items-center'>
                <div className='text-[--text2]'>
                    {challenge.description}
                </div>
                <div className='flex justify-around w-2/3'>
                    Completed at: <p className='text-[--text2]'>{challenge.completeDate}</p>
                </div>
            </section>)
        }else {
            setChallengeContent(
            <section className='h-[20vh] backdrop-blur-[1px] flex flex-col w-full justify-center items-center gap-2'>
                <div className='text-[--text2]'>
                    {challenge.description}
                </div>
                <button className={`lg:Body_05 xl:Body_04 whitespace-nowrap   rounded-xl p-3 active:bg-green-400 active:text-white bg-[--text] hover:bg-green-600 duration-150 hover:scale-110 hover:text-green-100 `}  onClick={handleComplete}>
                    Complete Challenge
                </button>
            </section>)
        }


    },[challenge])
  
    
  
    return (
        <section className='duration-200 hover:scale-105  '>
                <details className='Details bg-Noise2 bg-[--secondary] rounded-t-3xl rounded-b-xl'>
                {/* Challenge Title */}
                <summary className='Summary text-[--text3]'>
                    {challenge.title}
                </summary>
                {challengeContent}
            </details>
        </section>
    )
}

export default ChallengeItem