import React from "react"
import ReactDom from "react-dom"

function Hello(props){
    return <h2>我是函数声明的组件:{props.name}</h2>
}

ReactDom.render(
    <Hello name="哼哼"/>,
    document.getElementById("root")
)