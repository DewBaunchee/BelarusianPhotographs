import React from "react";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import PhotographPage from "./pages/PhotographPage";

import {CustomNavbar} from "./pages/components/CustomNavbar";
import CustomFooter from "./pages/components/CustomFooter";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Redirect} from "react-router";

const App = () => {
    const {t, i18n} = useTranslation();
    const photographs = t("photographsInfo");
    const photographOfTheDayId = photographs[new Date().getDate() % photographs.length].id;

    let lang = localStorage.getItem("language");
    if (lang !== i18n.language) {
        // eslint-disable-next-line
        let ignored = i18n.changeLanguage(lang);
    }

    const languageOnClick = (language) => {
        localStorage.setItem("language", language);
        // eslint-disable-next-line
        let ignored = i18n.changeLanguage(language);
    }

    return (
        <Router>
            <div className="main-wrapper-container container-fluid">
                <div className="content-container container-lg p-0">

                    <CustomNavbar onLangChange={languageOnClick}/>

                    <Switch>
                        <Route exact={true} path={"/"}
                               render={() => <MainPage
                                   t={t}
                                   photographOfTheDay={photographs[photographOfTheDayId]}/>}/>
                        <Route exact={true} path={"/search"}
                               render={(props) => <SearchPage translation={t} {...props}/>}/>
                        <Route exact={true} path={"/search/:name"}
                               render={(props) => <SearchPage translation={t} {...props}/>}/>
                        <Route exact={true} path={"/photograph/:id"}
                               render={(props) => <PhotographPage {...props}/>}/>
                        <Redirect from="/photographOfTheDay" to={"/photograph/" + photographOfTheDayId}/>
                    </Switch>

                    <CustomFooter/>
                </div>
            </div>
        </Router>
    );
}

export default App;