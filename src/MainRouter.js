import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const MainRouter = () => {
    return (
        <HashRouter basename="/">
            <div className="router-box">
                <Header />
                <Switch>
                    <Route
                        exact path="/"
                        render={(props) => (<Home {...props}/>)}
                    />
                    <Route
                        exact path="/features"
                        render={(props) => (<Features {...props}/>)}
                    />
                    <Route
                        exact path="/portfolio"
                        render={(props) => (<Portfolio {...props}/>)}
                    />
                    <Route
                        exact path="/aboutus"
                        render={(props) => (<AboutUs {...props}/>)}
                    />
                    <Route
                        exact path="/contact"
                        render={(props) => (<Contact {...props}/>)}
                    />
                </Switch>
            </div>
        </HashRouter>
    )
}

export default MainRouter;