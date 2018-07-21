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

    componentDidMount(){

    }

    isTimeUp(){
       return this.state.timeLeft===0
    }

    render(){
        // 定义样式
        const btnStyle = {
            width: 200, height: 200,
            backgroundColor: (this.state.count % 2 === 0) ? 'pink':'gray',
            fontSize: 22
        };
        let tip=null;
        if (this.isTimeUp()){
            tip=<h3>游戏结束，总共点了{this.state.count}次按钮</h3>
        } else {
            tip=<h3>加油，游戏还剩下{this.state.timeLeft}秒钟</h3>
        }
        return(
            <div>
                <h3>计数器游戏，测测你的手速哦</h3>
                {tip}
                <button style={btnStyle} onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
    handleClick=()=>{
        //设置定时器，每秒更新一次剩余时间
        this.timerId = setInterval(()=>{
            //如果剩余时间等于0，结束定时器
            if(this.isTimeUp()){
                clearInterval(this.timerId)
                return
            }
            //更新state状态中的剩余时间
            this.setState({
                timeLeft: this.state.timeLeft - 1
            })
        }, 1000)

        //判断是否到达时间了，如果是则跳出函数
        if (this.isTimeUp()){
            return
        }
        //每次点击后对state中的count属性做自增操作
        this.setState({
            count:this.state.count+1
        })
    }


}

ReactDom.render(
    <App/>,
    document.getElementById("root")
)

