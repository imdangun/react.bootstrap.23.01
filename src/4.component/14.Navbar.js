import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function MyNavbar() {
    return (
        <>
            <Navbar variant='dark' bg='dark' expand='lg' className='mt-2'>
                <Container fluid>
                    <Navbar.Brand href='#'>
                        <img src='https://picsum.photos/id/24/30/30'/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown title='dropdown' menuVariant='dark'>
                                <NavDropdown.Item href='#'>1</NavDropdown.Item>
                                <NavDropdown.Item href='#'>2</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href='#'>3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar bg='light' expand='lg' fixed='bottom'>
                <Container fluid>
                    <Navbar.Brand href='#'>brand</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className='me-auto my-2 my-lg-0'
                            style={{maxHeight: '6rem'}}
                            navbarScroll>
                            <Nav.Link href='#'>one</Nav.Link>
                            <Nav.Link href='#'>two</Nav.Link>
                            <NavDropdown title='fruit'>
                                <NavDropdown.Item href='#'>apple</NavDropdown.Item>
                                <NavDropdown.Item href='#'>pear</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href='#'>berry</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className='d-flex'>
                            <Form.Control
                                type='search'
                                placeholder='search'
                                className='me-2'/>
                            <Button variant='outline-success'>search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar