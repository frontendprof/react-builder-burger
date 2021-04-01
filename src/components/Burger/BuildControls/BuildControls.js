
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
            <BuildControl key={ctrl.label} label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
)

export default BuildControls
