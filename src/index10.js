import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
    render(){
        return(
            <button onClick={this.handleClick}>按钮</button>
        )
    }

    handleClick(){
        alert("按钮被点击了")
    }

}


ReactDom.render(
    <App/>,
    document.getElementById("root")
)

