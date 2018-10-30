import React from "react";

function DesignWidePicture(props){
  return(
    <img
    className="design-square"
      style={{borderColor:props.color}}
      src={props.picture}
    />
  )
}

export default DesignWidePicture;
