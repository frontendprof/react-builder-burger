
import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Aux from "../../hoc/Aux";

const INGREDIENT_PRICES={
    salad:0.4,
    cheese:0.8,
    meat:1.2,
    qazi:1.5
}

export class BurgerBuilder extends Component {

    state={
        ingredients:{
            salad:0,
            qazi:0,
            cheese:0,
            meat:0
        },
        purchasable:false,
        purchasing:false,
        totalPrice:4
    }

    updatePurchaseState(ingredients){
        
        const sum=Object.keys(ingredients)
            .map(igKey=>{
                return ingredients[igKey]
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0)

        this.setState({purchasable:sum>0})
    }

    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;

        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;

        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchaseState(updatedIngredients);

    }


    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;

        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;

        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler=()=>(
        this.setState({purchasing:true})
    )

    closeModal=()=>{
        this.setState({purchasing:false})
    }


    render() {

        const disabledInfo={
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.closeModal}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>   
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
