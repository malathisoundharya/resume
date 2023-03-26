import Image from './component/Image.js' 
import Personal from './component/Personal.js';
import { AiFillLock } from "react-icons/ai";
import { BsGeoAltFill } from "react-icons/bs";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import {BsFillTelephoneFill  } from "react-icons/bs";
import Progressbar from "./component/bar.js";
import { BsFillPenFill } from "react-icons/bs";
function App() {
  return (
    <div>
        <h1><center>RESUME</center></h1>
        <img src="malathi.jpg"/>
        <h2>MALATHI M</h2>
        <Personal Icon={AiFillLock} label='FrontEnd Developer'/>
        <Personal Icon={BsGeoAltFill} label='Maraimalai Nagar,Chennai'/>
        <Personal Icon={BsFillEnvelopeOpenFill} label='malathim85266@gmail.com'/>
        <Personal Icon={BsFillTelephoneFill} label='7094681800'/>
        {/*<h2><BsFillMortarboardFill size='1rem'/>  Skills</h2>*/}
        <h3>Javascript</h3>
        <Progressbar bgcolor="blue" progress='80' height={15}/>
        <h3>HTML&CSS</h3>
        <Progressbar bgcolor="blue" progress='75' height={15}/>
        <h3>React</h3>
        <Progressbar bgcolor="blue" progress='60' height={15}/>
        <h3>Bootstrap</h3>
        <Progressbar bgcolor="blue" progress='40' height={15}/>
        <h2><BsFillPenFill size='1rem'/>  Languages</h2>
        <h3>Tamil</h3>

        
        
    </div>
  );
}

export default App;