import React from "react";
import images from './images/ground1.png'
import Images from './images/dom1.jfif'
import image from './images/dom2.jfif'
import imagese from './images/class1.jfif'
import mages from './images/class2.jfif'
import mage from './images/class3.jfif'

const Player = ()=>{
    return (
        <div className="App">
          <div>
    <h1>Images<span>|videos</span></h1>
    </div>
    <form>
      Search:<select names="images">
    <option>recent</option>
    <option>domitory1</option>
    <option>domitory2</option>
    <option>classA</option>
    <option>classB</option>
    <option>classC</option>
      </select>
      <div className="showed">
      Show:<select names="images">
    <option>6</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
      </select>Images
      </div>
    </form>
    <div className="images">
      <div>
      <img src={images} height={220} width={270}/>
      <p>place: Play ground <br/>taken:22/02/2023 16:00 PM</p>
      </div>
      <div>
      <img src={Images} height={220} width={270}/>
      <p>place: Domitory<br/>taken:22/02/2023 16:00 PM</p>
      </div>
      <div>
      <img src={image} height={220} width={270}/>
      <p>place: Domitory <br/>taken:22/02/2023 16:00 PM</p>
      </div>
      <div>
      <img src={imagese} height={220} width={270}/>
      <p>place: Class A <br/>taken:22/02/2023 17:00 PM</p>
      </div>
      <div>
      <img src={mages} height={220} width={270}/>
      <p>place: Class B<br/>taken:22/02/2023 17:00 PM</p>
      </div>
      <div>
      <img src={mage} height={220} width={270}/>
      <p>place: Class C <br/>taken:22/02/2023 17:00 PM</p>
      </div>
      </div>
      <a href="#">load more</a>
    </div>
      );
}

export default Player;