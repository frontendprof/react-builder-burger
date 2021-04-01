
import React from 'react';

import BuildControl from "../BuildControls/BuildControl/BuildControl";
import classes from "./BuildControls.module.css";


const controls=[
    {label:"Salad",type:"salad"},
    {label:"Qazi",type:"qazi"},
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"},
]
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl=>(
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
)

export default BuildControls
