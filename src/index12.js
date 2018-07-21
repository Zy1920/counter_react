import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
    render(){
        return(
            <div>
                <a href="http://www.baidu.com" target="_blank" onClick={this.handleClick}>按钮</a>
            </div>
        )
    }

    handleClick=(event)=>{
        event.preventDefault()
        console.log(event)
    }
}


ReactDom.render(
    <App/>,
    document.getElementById("root")
)

