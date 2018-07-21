import React from "react"
import ReactDom from "react-dom"

class App extends React.Component{
    constructor(){
        super();
        this.state={
            date:new Date(),
            title:"时钟应用"
        },
        setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }

    render(){
        return(
            <div>
                <h4>{this.state.title}</h4>
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>

        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("root")
)

