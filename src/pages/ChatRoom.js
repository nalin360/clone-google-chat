import {useState} from 'react'
import HeaderMain from '../components/header'
import MainMenu from '../components/MainMenu'
import WelcomPages from '../components/MainRooms/WelcomPages'

function ChatRoom() {
  const [toogleSideMEnu, settoogleSideMEnu] = useState(false)
  return (
    <div>
      <HeaderMain toogeSideMenuCallback={settoogleSideMEnu}/>
      <MainMenu effect={toogleSideMEnu}/>
      <WelcomPages effect={toogleSideMEnu}/>
    </div>
  )
}

export default ChatRoom