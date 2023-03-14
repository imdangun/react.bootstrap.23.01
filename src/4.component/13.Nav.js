import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function MyNav() {
    return (
        <>
            <Nav activeKey='home' onSelect={key => alert(key)}>
                <Nav.Item><Nav.Link href='home'>home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey='one'>one</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey='two' disabled>two</Nav.Link></Nav.Item>
            </Nav>
            <Nav defaultActiveKey='home' as='ul' className='justify-content-end'>
                <Nav.Item as='li'><Nav.Link href='home'>home</Nav.Link></Nav.Item>
                <Nav.Item as='li'><Nav.Link eventKey='one'>one</Nav.Link></Nav.Item>
                <Nav.Item as='li'><Nav.Link eventKey='two'>two</Nav.Link></Nav.Item>
            </Nav>
            <Nav defaultActiveKey='home' className='flex-column'>
                <Nav.Link href='home'>home</Nav.Link>
                <Nav.Link eventKey='one'>one</Nav.Link>
                <Nav.Link eventKey='two'>two</Nav.Link>
            </Nav>
            <Nav variant='tabs' fill defaultActiveKey='home'>
                <Nav.Link href='home'>home</Nav.Link>
                <Nav.Link eventKey='one'>one</Nav.Link>
                <Nav.Link eventKey='two'>two</Nav.Link>
            </Nav>
            <Nav variant='pills' defaultActiveKey='home'>
                <Nav.Link href='home'>home</Nav.Link>
                <Nav.Link eventKey='one'>one</Nav.Link>
                <Nav.Link eventKey='two'>two</Nav.Link>
            </Nav>
            <Nav variant='pills' activeKey='1' className='mt-2'>
                <Nav.Item><Nav.Link eventKey='1' href='home'>home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey='2' title='item'>one</Nav.Link></Nav.Item>
                <NavDropdown title='dropdown'>
                    <NavDropdown.Item eventKey='4.1'>apple</NavDropdown.Item>
                    <NavDropdown.Item eventKey='4.2'>pear</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item eventKey='4.3'>berry</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </>
    )
}

export default MyNav