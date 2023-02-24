import React from "react";
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import video1 from './video/legend.mp4'
import video2 from './video/Ashes.mp4'
import video3 from './video/Soul.mp4'
import video4 from './video/Best.mp4'

const Player = ()=>{
    return (
        <div className="App">
             <div>
    <h1>Images|<span>videos</span></h1>
    </div>
    <form>
      Search:<select names="images">
    <option>recent</option>
    <option>video1</option>
    <option>video2</option>
    <option>video3</option>
    <option>video4</option>
      </select>Videos
      <div className="showed">
      Show:<select names="images">
    <option>4</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
      </select>Videos
      </div>
    </form>
    <div className="images">
      <div>
      <Video src={video1} controls/>
      <p>place: Play ground <br/>taken:22/02/2023 16:00 PM</p>
      </div>
      <div>
      <Video src={video2} controls/>
      <p>place: Domitory<br/>taken:22/02/2023 16:00 PM</p>
      </div>
      <div>
      <Video src={video3} controls/>
      <p>place: Domitory <br/>taken:22/02/2023 16:00 PM</p>
      </div>
      <div>
      <Video src={video4} controls/>
      <p>place: Class A <br/>taken:22/02/2023 17:00 PM</p>
      </div>
      </div>
      <a href="#">load more</a>
        </div>
      ); 
}

export default Player;