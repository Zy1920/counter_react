import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }


    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>按钮</button>
            </div>

        )
    }

    handleClick=(e)=>{
        this.setState({
            count:this.state.count+1
        })
        console.log(e)
    }

}


ReactDom.render(
    <App/>,
    document.getElementById("root")
)

