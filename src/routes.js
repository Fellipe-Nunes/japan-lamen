import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from './config/history'

import LayoutAdmin from './components/Layout/admin';
import LayoutPortal from './components/Layout/portal';
//auth
import Login from './views/auth/login';

//admin
import ProductsAdmin from './views/admin/products'
import CategoriesAdmin from './views/admin/categories'

//portal
import Home from './views/portal/home'
import About from './views/portal/about'
import Product from './views/portal/product'
import Services from './views/portal/service'
import Contato from './views/portal/contact'

import { isAuthenticated } from './config/auth';

const AdminRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
}

const Routers = () => (
    <Router history={history}>
        <Switch>
            <Route exact component={Login} path="/login" />

            <Route path="/admin">
                <LayoutAdmin>
                    <AdminRoute exact path="/admin" component={() => <p>Home</p>} />
                    <AdminRoute exact path="/admin/categorias" component={CategoriesAdmin} />
                    <AdminRoute exact path="/admin/produtos" component={ProductsAdmin} />
                </LayoutAdmin>
            </Route>

            <Route path="/">
                <LayoutPortal>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sobre" component={About} />
                    <Route exact path="/cardapio" component={Product} />
                    <Route exact path="/servicos" component={Services} />
                    <Route exact path="/contato" component={Contato} />
                </LayoutPortal>
            </Route>

        </Switch>
    </Router>
)

export default Routers;