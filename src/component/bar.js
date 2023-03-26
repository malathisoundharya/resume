import React from "react";
const resume=({bgcolor,progress,height})=>{
    const Parentdiv={
        height:height,
        width:'15%',
        backgroundColor:'grey',
        borderRadius:40,
        margin:50
    }

const Childdiv={
    height:'95%',
    width:`${progress}%`,
    backgroundColor:bgcolor,
    borderRadius:60,
    textAlign:'right'
}
const progresstext={
    paddind:10,
    color:'white',
    fontWeight:900,
    fontHeight:200
}
return(
    <div style={Parentdiv}>
        <div style={Childdiv}>
            <span style={progresstext}>{`${progress}%`}</span>
        </div>
    </div>
)
}
export default resume