import { Outlet } from "react-router-dom";
import SideBar from "../components/common/SideBar";
import { Container, Row, Col } from "reactstrap";
import Header from "../components/common/Header";

const MainLayout = () => {
    return (
        <Container fluid className="vh-100 overflow-hidden">
            <Row className="h-100">
                {/* Sidebar */}
                <Col xs="12" md="2" className="bg-light border-end p-0">
                    <SideBar />
                </Col>

                {/* Main content area */}
                <Col xs="12" md="10" className="d-flex flex-column p-0">
                    <Header />
                    <div className="flex-grow-1 p-4 overflow-auto">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MainLayout;
