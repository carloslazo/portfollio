import React from "react";

function DesignSquarePicture(props){
  return(
    <img
    className="design-wide"
      style={{borderColor:props.color}}
      src={props.picture}
    />
  )
}

export default DesignSquarePicture;
