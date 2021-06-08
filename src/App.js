import React from "react";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import PhotographPage from "./pages/PhotographPage";

import {CustomNavbar} from "./pages/components/customNavbar/CustomNavbar";
import CustomFooter from "./pages/components/customFooter/CustomFooter";

import {HashRouter, Route, Switch} from "react-router-dom";
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
        <HashRouter basename={"/"}>
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
                        <Route exact={true} path={"/dewbaunchee"} component={() => window.location.href = "https://github.com/DewBaunchee"}/>
                        <Route exact={true} path={"/grioool"} component={() => window.location.href = "https://github.com/Grioool"}/>
                    </Switch>

                    <CustomFooter/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;