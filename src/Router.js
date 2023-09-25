import React, { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

// ** Import Route Providers
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const Login = lazy(() => import("./pages/Login"));
const Selectwallet = lazy(() => import("./pages/Selectwallet"));
const Masterwallet = lazy(() => import("./pages/Masterwallet"));
const SmartContract = lazy(() => import("./pages/SmartContract"));
const ProjectCost = lazy(() => import("./pages/ProjectCost"));
const Payment = lazy(() => import("./pages/Payment"));
const WalletCreation = lazy(() => import("./pages/WalletCreation"));

const history = createBrowserHistory({
    basename: "",
    forceRefresh: false,
});

const AppRouter = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login" exact component={Login} />
                    <Route path="/selectwallet" exact component={Selectwallet} />
                    <Route path="/masterwallet" exact component={Masterwallet} />
                    <Route path="/smartcontract" exact component={SmartContract} />
                    <Route path="/projectcost" exact component={ProjectCost} />
                    <Route path="/payment" exact component={Payment} />
                    <Route path="/walletcreation" exact component={WalletCreation} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
