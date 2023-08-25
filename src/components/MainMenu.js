import React from 'react'

function MainMenu({ effect }) {
  // console.log(effect);

  return (
    
      <div className={`${effect && "w-64"
        } fixed left-0 z-40 w-10   
    h-screen p-4 overflow-y-auto 
    border border-dashed border-blue-600
    gap-0
    ${"hover:w-64"}
    transition-all ease-in-out duration-300`}>
        <h2>ChatRoom</h2>
        {/* chat */}
        <div className='flex'>
          <button className='flex-none '>arrow</button>
          <svg xmlns="http://www.w3.org/2000/svg" className="bfv" height="24" width="24" fill="currentColor"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"></path></svg>
          <h3 className='flex-initial ' >chat</h3>
          <button className='flex-initial  '>+</button>
        </div>
        {/* Space */}
        <div className='flex'>
          <button className='flex-none w-0'>arrow</button>
          <h3 className='flex-initial w-64' >Space</h3>
          <button className='flex-initial w-32 '>+</button>
        </div>
        {/* meet */}
        <div className='flex'>
          <button className='flex-none w-0'>arrow</button>
          <h3 className='flex-initial w-64' >meet</h3>

        </div>

      </div>
    

  )
}

export default MainMenu