import { Container, Nav, Navbar } from "react-bootstrap"

const NavMovie=()=>{
    return(
        <div>
             <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Movies</Nav.Link>                    
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavMovie