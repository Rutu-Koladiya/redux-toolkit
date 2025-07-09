import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const Header = () => {
    return (
        <Navbar color="light" light className="px-4 border-bottom">
            <NavbarBrand>Dashboard</NavbarBrand>
            <Nav className="ms-auto" navbar>
                <NavItem>
                   
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
