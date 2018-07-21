import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            timeLeft:10
        }
    }

    isTimeUp(){
        return this.state.timeLeft===0
    }


    render(){
        return(
            <div>
                <h3>欢迎来到数字小游戏</h3>
                <h3>游戏剩余时间为：{this.state.timeLeft}</h3>
                <button onClick={this.handleClick}>{this.state.count}</button>

            </div>
        )
    }

    handleClick=()=>{
        if (this.isTimeUp()){
            return
        }

        this.timerId=setInterval(()=>{
            if (this.isTimeUp()){
                clearInterval(this.timerId)
                return
            }
            this.setState({
                timeLeft:this.state.timeLeft-1
            })
        },1000)


        this.setState({
            count:this.state.count+1
        })

    }




}

ReactDom.render(
    <App/>,
    document.getElementById("root")
)

