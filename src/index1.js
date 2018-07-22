import React from "react"
import ReactDom from "react-dom"

class MoneyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money:0
        }
    }

    render(){
        return(
            <div>
                <h2>付款计算器</h2>
                <fieldset>
                    <legend>请输入付款金额</legend>
                    <input type="text" value={this.state.money} onChange={this.handleInputChange}/>
                </fieldset>
                <BuySomething money={this.state.money}/>
            </div>
        )
    }

    handleInputChange=(e)=>{
        console.log("输入内容了："+e.target.value);
        const money=e.target.value;
        this.setState({
            money:money.substring(0,6).replace(/[^.\d]+/, '')
        })
    }
}

function BuySomething(props){
    console.log(props.money)
    let money = parseFloat(props.money);
     if (Number.isNaN(money)){
         return <h4>侬说啥，给钱吧</h4>
     }
     if (money>=10){
         return <h4>购买成功，付款{money}元，找零{money-10}元</h4>
     }
     return <h4>购买失败，付款{money}元</h4>
}


ReactDom.render(
    <MoneyInput/>,
    document.getElementById("root")
)
