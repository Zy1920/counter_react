import React from "react"
import ReactDom from "react-dom"

class HelloClass extends React.Component{
    render(){
        return <h2>我是类声明的组件:{this.props.name}</h2>
    }
}

ReactDom.render(
    <HelloClass name="itheima"/>,
    document.getElementById("root")
)

