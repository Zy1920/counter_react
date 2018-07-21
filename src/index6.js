import React from "react"
import ReactDom from "react-dom"

function Hello(props){
    return <h2>Hello:{props.name}</h2>
}

class App extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>成员数量:{this.props.count}</p>
                    <p>成立时间:{this.props.date.toLocaleString()}</p>
                </div>

                <Hello name="唐三藏"/>
                <Hello name="孙悟空"/>
                <Hello name="猪八戒"/>
                <Hello name="沙僧"/>
                <Hello name="白龙马"/>

            </div>
        )
    }
}

ReactDom.render(
    <App name="西天取经团" count={5} date={new Date()}/>,
    document.getElementById("root")
)

