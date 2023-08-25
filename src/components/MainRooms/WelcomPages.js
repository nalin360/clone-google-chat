import React from 'react'

function WelcomPages({effect}) {
    return (
        <div>
            <div className={`${effect && "ml-64 "} 
                min-h-screen
                border border-dashed border-blue-600
                transition-all ease-in-out duration-300
                `}>
                <h1>Welcome,Nalin</h1>
                <p>Ready? Set. Chat! Let's jump right into things.</p>
            
            </div>
        </div>
    )
}

export default WelcomPages