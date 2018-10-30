import React, { Component } from "react";
function ThinkingPage(props){
  return (
    <div id={props.id}>
    <div className="Thinking-page-title" style={{textDecorationColor:props.color}}>
    {props.title}
    </div>
    {props.children}
    </div>

  )
}
export default ThinkingPage;
