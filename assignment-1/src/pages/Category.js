import React from 'react';
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Home from './Home';
import CategoryProduct from '../components/CategoryProduct';

function Category(props) {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`} component={Home} />
            <Route path={`${path}/:categoryId`} component={CategoryProductList} />
        </Switch>
    )
}

function CategoryProductList() {
    let { categoryId } = useParams();
    return (
        <>
            <CategoryProduct id={categoryId} />
        </>
    )
}

export default Category;