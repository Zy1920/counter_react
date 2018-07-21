import React from "react"
import ReactDom from "react-dom"

const element = (
    <div>
        <h1>HaHa!</h1>
        <h2>Hello Itheima element</h2>
    </div>
);


ReactDom.render(
    element,
    document.getElementById("root")
)