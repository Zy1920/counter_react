import React from "react"
import ReactDom from "react-dom"

class Clock extends React.Component{
    constructor(){
        super();
        this.state={
            date:new Date(),
            title:"时钟应用"
        }

    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }

    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>

        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Clock title="时钟1"/>
                <Clock title="时钟2"/>
                <Clock title="时钟3"/>
            </div>
        )
    }
}


ReactDom.render(
    <App/>,
    document.getElementById("root")
)

