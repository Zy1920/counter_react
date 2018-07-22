import React from "react"
import ReactDom from "react-dom"


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            unit:"rmb",
            money:0
        }
    }

    toRMB=(money)=>money*6.7;
    toUSD=(money)=>money/6.7;
    convert=(money)=>Math.round(money*1000)/1000;
    render(){
        const money=this.state.money
        const unit=this.state.unit

        const rmb=unit==="rmb"?money:this.convert(this.toRMB(money))
        const usd=unit==="usd"?money:this.convert(this.toUSD(money))

        return(
            <div>
                <h2>付款计算器</h2>
                <MoneyInput unit="rmb" money={rmb} onMoneyInput={(money)=>{this.setState({money:money,unit:"rmb"})}}/>
                <MoneyInput unit="usd" money={usd} onMoneyInput={(money)=>{this.setState({money:money,unit:"usd"})}} />
                <BuySomething money={this.state.money}/>
            </div>
        )
    }
}

const unitName={
    rmb:"人民币",
    usd:"美元"
}

class MoneyInput extends React.Component {
    render(){
        return(
            <div>
                <fieldset>
                    <legend>请输入付款金额({unitName[this.props.unit]})</legend>
                    <input type="text" value={this.props.money} onChange={this.handleInputChange}/>
                </fieldset>
            </div>
        )
    }

    handleInputChange=(e)=>{
        console.log("输入内容了："+e.target.value);
        let money=e.target.value;
        money=money.substring(0,6).replace(/[^.\d]+/, '')
        this.props.onMoneyInput(money)
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
    <App/>,
    document.getElementById("root")
)
