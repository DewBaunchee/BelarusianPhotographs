import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './CustomNavbar.css'
import {useTranslation} from "react-i18next";

export const CustomNavbar = (props) => {

    const {t} = useTranslation();

    const searchSVG =
        <svg xmlns="http://www.w3.org/2000/svg" width="16"
             height="16" fill="currentColor"
             className="bi bi-search" viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>;
    return (
        <Navbar bg="#FFF" expand="lg">
            <Navbar.Brand href="#home" className={"navbar-logo ml-2"}>Belarusian photographs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className="nav-links" href="/">{t("home")}</Nav.Link>
                    <Nav.Link className="nav-links" href="/search">{t("photographs")}</Nav.Link>
                    <Nav.Link className="nav-links" href="/photographOfTheDay">{t("photographOfTheDay")}</Nav.Link>
                    <NavDropdown className="nav-links" title={t("languageDropDown")} id="basic-nav-dropdown">
                        <NavDropdown.Item className="nav-links"
                                          onClick={() => props.onLangChange("ru")}>Русский</NavDropdown.Item>
                        <NavDropdown.Item className="nav-links"
                                          onClick={() => props.onLangChange("en")}>English</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button variant="outline-danger" className={"nav-search-button"}>{searchSVG}</Button> {/* TODO delete*/}
            </Navbar.Collapse>
        </Navbar>);
}