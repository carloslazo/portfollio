import React, { Component } from "react";
function ThinkingPage(props){
  return (
    <div id={props.id}>
    <div className="Thinking-page-title">
    {props.title}
    <div className="Circle" style={{backgroundColor: props.color}}/>
    </div>
    {props.children}
    </div>

  )
}
export default ThinkingPage;
