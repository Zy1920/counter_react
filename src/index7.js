import React from "react"
import ReactDom from "react-dom"

class App extends React.Component{
    render(){
        return(
            <div>
                <h3>时钟应用</h3>
                <h5>当前时间为:{this.props.date.toLocaleString()}</h5>
            </div>

        )
    }

}

ReactDom.render(
    <App date={new Date()}/>,
    document.getElementById("root")
)

