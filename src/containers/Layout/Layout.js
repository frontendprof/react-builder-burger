import React,{Component} from 'react';
import Aux from "../../hoc/Aux";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css'


class Layout extends Component{

    state={
        showSideDrawer:true
    }

    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        this.setState(prevState=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}



export default Layout;