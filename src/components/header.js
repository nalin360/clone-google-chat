import {useState} from 'react'

function HeaderMain({toogeSideMenuCallback}) {
  const [clickToogleSidebarCount, setclickToogleSidebarCount] = useState(0)
  const handleMenuClick = () =>{
    // TODO try accesing effects to solve error 
    if (clickToogleSidebarCount === 1) {
      setclickToogleSidebarCount(0)
      return false
    } 
    setclickToogleSidebarCount(1)
    return true

  }
  return (
    <div>
      <div>
        <button onClick={() => toogeSideMenuCallback(handleMenuClick)}>M-B</button>
        
      </div>
      <div>

      </div>
      <div>

      </div>

    </div>
  )
}

export default HeaderMain