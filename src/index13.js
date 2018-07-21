import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
    render(){
        return(
            <div>
                <button onClick={(e)=>this.handleClick(e,123,"haha",new Date())}>我是一个按钮</button>
            </div>
        )
    }
    handleClick=(e,num,str,date)=>{
        alert("按钮被点击");
        console.log(e);
        console.log(num);
        console.log(str);
        console.log(date)
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("root")
)

