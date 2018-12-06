import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';
import Header from '../Components/header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboardPage}/>
                <Route  path="/create" component={AddExpensePage}/>
                <Route  path="/edit/:id" component={EditExpensePage}/>
                <Route  path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        
    </BrowserRouter>
);

export default AppRouter;