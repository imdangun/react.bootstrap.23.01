import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/Button'

import SplitButton from 'react-bootstrap/SplitButton'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

function MyDropdown() {
    return (
        <>
            <Dropdown className='m-2'>
                <Dropdown.Toggle variant='success'>dropdown</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href='#'>1</Dropdown.Item>
                    <Dropdown.Item href='#'>2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <DropdownButton title='dropdown' className='m-2'>
                <Dropdown.ItemText>title</Dropdown.ItemText>
                <Dropdown.Item href='#'>1</Dropdown.Item>
                <Dropdown.Item href='#'>2</Dropdown.Item>
                <Dropdown.Item as='button'>button</Dropdown.Item>
            </DropdownButton>

            <Dropdown as={ButtonGroup} className='m-2'>
                <Button>split</Button>
                <Dropdown.Toggle split/>
                <Dropdown.Menu>
                    <Dropdown.Item href='#'>1</Dropdown.Item>
                    <Dropdown.Item href='#'>2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown><br/>

            {['Primary', 'Success', 'Warning'].map(
                variant => (
                    <SplitButton
                        key={variant}
                        variant={variant.toLowerCase()}
                        title={variant}
                        size='sm'>
                        <Dropdown.Item eventKey='1'>1</Dropdown.Item>
                        <Dropdown.Item eventKey='2' active>2</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item eventKey='3'>3</Dropdown.Item>
                    </SplitButton>
                )
            )}

            <Dropdown className='mt-2' autoClose={false}>
                <Dropdown.Toggle variant='secondary'>dropdown</Dropdown.Toggle>
                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item href='#'>1</Dropdown.Item>
                    <Dropdown.Item href='#' active>2</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href='#'>3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Navbar variant='dark' bg='dark' expand='lg' className='mt-2'>
                <Container fluid>
                    <Navbar.Brand href='#'>home</Navbar.Brand>
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

            <Dropdown.Menu show className='mt-2'>
                <Dropdown.Header>header</Dropdown.Header>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
            </Dropdown.Menu>
        </>
    )
}

export default MyDropdown