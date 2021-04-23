import Header from './components/Header'
import Login from './components/Login'
import VolumeSlider from './components/Dashboard/Volume'
import QualitySelect from './components/Dashboard/Audio'
import CompCard from './components/Card/Card'
import Switches from './components/Dashboard/Online'

import { useState, useEffect } from "react";
import { Typography } from '@material-ui/core';

function App() {
  // For handling State
  const [loggedIn, setLoggedIn] = useState(false)

  const [online, setOnline] = useState({
       isOnline: true,
   })

  const [volume, setVolume] = useState(30)

  const [quality, setQuality] = useState('2')
  

  //Login Functionality 
  const handleLogin = () => {
    setLoggedIn(true)
  }

  return (

    <div className="App">
      <Header />
      {loggedIn === true ? (
        <div className="cards">
          <CompCard>
            <Switches online={online} setOnline={setOnline}/>
          </CompCard>
          <CompCard>
            <VolumeSlider volume={volume} setVolume={setVolume}/>
          </CompCard>
          <CompCard>
            <QualitySelect quality={quality} setQuality={setQuality}/>
          </CompCard>
         
        </div>
      ) : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} handleLogin={() => handleLogin()}/>
      )}
      {/* Notification messages */}
      <div className="notifications">
        {loggedIn === true && <Typography>System Notifications:</Typography>}
        {online.isOnline === false && <p>Your application is offline. You won't be able to share or stream music to other devices.</p>}
        {volume >= 80 && <p>Listening to music at a high volume can cause long term hearing loss!</p>}
        {quality =='1' && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}
      </div>
    </div>
  );
}

export default App;
