
import React,{Component} from 'react';

import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentDidUpdate(){
        console.log("OrderSUmmary will update");
    }

    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igKey=>{
            return (
            <li key={igKey}>
                <span style={{ textTransform:"capitalize" }}>
                    {igKey}
                </span>:
                    {this.props.ingredients[igKey]}
            </li>
        )})
        return(
            <Aux>
            <h3>Your order</h3>
            <p>A yummy burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>

            <p><strong style={{ textDecoration:" underline red" }}>Total Price: ${this.props.price.toFixed(2)}</strong></p>
            <p style={{ fontWeight:"bold" }}>Continue to checkout? </p>
            <Button btnType="Danger"  clicked={this.props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
        </Aux>
        )
    }
}



export default OrderSummary
