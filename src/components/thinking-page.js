import React, { Component } from "react";
function ThinkingPage(props){
  return (
    <div id={props.id}>
    <div className="Thinking-page-title">
    {props.title}
    </div>
    {props.children}
    </div>

  )
}
export default ThinkingPage;
