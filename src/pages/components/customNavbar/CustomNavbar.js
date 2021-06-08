import {Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import './CustomNavbar.css'
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export const CustomNavbar = (props) => {

    const {t} = useTranslation();

    return (
        <Navbar bg="#FFF" expand="lg">
            <Navbar.Brand to="" className={"navbar-logo ml-2"}>Belarusian photographs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavItem>
                        <Link className="nav-link" to={"/"}>{t("home")}</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to={"/search"}>{t("photographs")}</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to={"/photographOfTheDay"}>{t("photographOfTheDay")}</Link>
                    </NavItem>
                    <NavDropdown className="nav-links" title={t("languageDropDown")} id="basic-nav-dropdown">
                        <NavDropdown.Item className="nav-links"
                                          onClick={() => props.onLangChange("ru")}>Русский</NavDropdown.Item>
                        <NavDropdown.Item className="nav-links"
                                          onClick={() => props.onLangChange("en")}>English</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
}