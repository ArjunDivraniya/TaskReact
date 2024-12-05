import { useState } from 'react'

import './App.css'
import logo from './assets/Spotifylogo.png'
import imag1 from './assets/Home.png'
import imag2 from './assets/Search.png'
import imag3 from './assets/your library.png'
import imag4 from './assets/Create.png'
import imag5 from './assets/Liked.png'
import imag6 from './assets/your episodes.png'
import imag7 from './assets/top arrow navigation.png'
import imag8 from './assets/image4.png'
import imag9 from './assets/image3.png'

import imag10 from './assets/image1.png'
import imag11 from './assets/image2.png'
import imag12 from './assets/image9.png'
import imag13 from './assets/image8.png'
import imag14 from './assets/image7.png'
import imag15 from './assets/image6.png'
import imag16 from './assets/image5.png'
import imag17 from './assets/image10.png'
import imag18 from './assets/User.png'
import imag19 from './assets/image11.png'
import imag20 from './assets/heart.png'
import imag21 from  './assets/Music Player Options.png'
import imag22 from  './assets/Right options.png'





function App() {
  

  return (
    <>
    <div className="main">
    <div className="spotify">
    <div className="sidebar">
      
      <div className="section">
         <div className="icon"></div> <div className="logo"><img src={logo}alt=""/></div>
    <div className="image"><img src={imag1} alt=""/><b>home </b> </div>
<div className="image"><img src={imag2} alt=""/><b>Search</b></div>   
<div className="image"><img src={imag3} alt="" />Your Library</div>
</div>
<div className="section">
   <div className="image"><img src={imag4} alt="" />Create Playlist</div> 
   <div className="image"><img src={imag5} alt=""/>Like Songs</div>
   <div className="image"><img src={imag6} alt=""/> Youre pisodes</div>
</div>
<div className="section">
    <div className="image"> FAV</div>
    <div className="image">Daily Mix 1</div>
    <div className="image">Discover Weekly</div>
    <div className="image">Malayalam</div>
    <div className="image">Dance/Electronic Mix</div>
    <div className="image">EDM/Popular</div>
    <div className="image"></div>


</div></div>


<div className="songs">
<div className="navbar">
    <div><img  src={imag7} alt=""/></div>
    <div><img src={imag18}  alt=""/></div>
</div>
<b className="text">Good morning</b>
<div className="box">
    <div className="song1" >
    <div><img src={imag6} alt=""/></div>
    <div className="songtext">Like songs</div>
</div>

    <div className="song1" >
    <div><img src= {imag8} alt=""/></div>
    <div className="songtext">Netfeex Playlist</div>
</div>

    <div className="song1" >
    <div><img src={imag9} alt=""/></div>
    <div className="songtext">K/ DA</div>
</div>

    <div className="song1" >
    <div><img src={imag10}alt=""/></div>
    <div className="songtext">Like songs</div>
</div>

    <div className="song1" >
    <div><img src= {imag11} alt=""/></div>
    <div className="songtext">Dance/ Electronic mix</div>
</div>
</div>
<b className="text">Shows you might like</b>
<div className="artist">
    <div className="artistname">
        <div className="artistimage"><img src= {imag12} alt=""/></div>
        <div className="playlistname">Weekly Motivatio...</div>
        <div className="subname">Ren ina Scott</div>

    </div>

<div className="artistname">
    <div className="artistimage"><img src= {imag13} alt=""/></div>
    <div className="playlistname">MEDITATION SELF</div>
    <div className="subname">Ren ina Scott</div>

</div>

<div className="artistname">
    <div className="artistimage"><img src= {imag14} alt=""/></div>
    <div className="playlistname">Words beyond act...</div>
    <div className="subname">Ren ina Scott</div>


</div>
<div className="artistname">
    <div className="artistimage"><img src= {imag15} alt=""/></div>
    <div className="playlistname">The Alexa Show</div>
    <div className="subname">Ren ina Scott</div>


</div>
<div className="artistname">
    <div className="artistimage"><img src={imag16} alt=""/></div>
    <div className="playlistname">The Stories of Ma...</div>
    <div className="subname">Ren ina Scott</div>


</div>
<div className="artistname">
    <div className="artistimage"><img src={imag17} alt=""/></div>{}
    <div className="playlistname">Motivation Daily b...</div>
    <div className="subname">Ren ina Scott</div>

</div>
</div>
</div>
</div>
<div className="playbar">
    <div className="now" >
        <div className='now-image'><img src={imag19} alt=""/></div>
   <div className="name"><div>Dreming on</div>
   <div>NEFFEX</div></div>
   <div><img className='last' src={imag20} alt=""/></div>
    </div>
    <div className="playoption"><img src={imag21} alt="" /></div>
    <div className="lastimage"><img src={imag22} alt="" /></div>
</div>
<div className="green"><b>Listening on Asus Tuf Gaming F17</b></div>
    </div>
    </>
  )
}

export default App;
