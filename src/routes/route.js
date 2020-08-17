import React from 'react'
import {HashRouter,Route,Redirect,Switch} from "react-router-dom";
import  Home from '../views/home'
import  Goods from '../views/goods'
 
class RouteMap extends React.Component {
    render() {
        return (
            <HashRouter>
                <main>
                    <Switch>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/goods" exact component={Goods}/>
                        <Redirect to='/home' />
                    </Switch>
                </main>
            </HashRouter>
        )
    }
}
 
export default RouteMap