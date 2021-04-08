
import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Aux from "../../hoc/Aux";

import axios from '../../../src/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES={
    salad:0.4,
    cheese:0.8,
    meat:1.2,
    qazi:1.5
}

export class BurgerBuilder extends Component {

    state={
        ingredients:null,
        purchasable:false,
        purchasing:false,
        totalPrice:4,
        loading:false,
        error:false
    }

    componentDidMount(){
        axios.get("https://react-burger-builder-821d0-default-rtdb.firebaseio.com/orders/ingredients.json")
            .then(resp=>{
                this.setState({ingredients:resp.data})
            })
            .catch(err=>{
                this.setState({error:true})
            })
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

    purchaseContinue=()=>{
        this.setState({loading:true})
        const order={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:"AbdulMalik",
                address:{
                    street:"testStreet 8",
                    zipCode:'34245',
                    country:"Uzbekistan"
                },
                email:"test@test.com"
            },
            deliveryMethod:"fastest"
        }
        axios.post('/orders.json',order)
            .then(resp=>{
                this.setState({loading:false,purchasing:false})
            })
            .catch(err=>{
                this.setState({loading:false,purchasing:false})
            })
    }

    render() {

        const disabledInfo={
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        
        let orderSummary=null;
        
        

        let burger=this.state.error?<p>Ingredients can not be loaded</p> : <Spinner />
        if(this.state.ingredients){
            burger=(
                <Aux>
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

            orderSummary= <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCancel={this.closeModal}
                purchaseContinue={this.purchaseContinue}
                price={this.state.totalPrice}
            />

            if(this.state.loading){
                orderSummary=<Spinner />
            }
        }
        
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.closeModal}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}


export default withErrorHandler(BurgerBuilder,axios);
