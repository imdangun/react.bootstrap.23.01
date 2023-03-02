import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import ListGroup from 'react-bootstrap/ListGroup'

import Nav from 'react-bootstrap/Nav'

function MyCard() {
    return (
        <>
            <Card style={{width: '10rem'}} className='m-2'>
                <Card.Img variant='top' data-src='holder.js/160x100?text=good img'/>                
                <Card.Body>
                    <Card.Title>title</Card.Title>
                    <Card.Subtitle className='text-muted'>subtitle</Card.Subtitle>
                    <Card.Text>
                        soem example to build on the card.
                    </Card.Text>
                    <Card.Link href='#'>link</Card.Link>{' '}
                    <Button>go</Button>
                </Card.Body>             
            </Card>

            <Card body bg='warning'>shorthand version.</Card>

            <Card style={{width: '10rem', margin: '1rem'}} border='primary'>
                <Card.Header>header</Card.Header>
                <ListGroup variant='flush'>
                    <ListGroup.Item>1</ListGroup.Item>
                    <ListGroup.Item>2</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card className='bg-dark text-white m-2'>
                <Card.Img data-src='holder.js/160x100'/>
                <Card.ImgOverlay >
                    <Card.Title>title</Card.Title>
                    <Card.Text>text below as a nuatural lead.</Card.Text>
                </Card.ImgOverlay>
            </Card>

            <Card>
                <Card.Header>
                    <Nav variant='tabs' defaultActiveKey='#first'>
                        <Nav.Item><Nav.Link href='#first'>active</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='#link'>link</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='#disabled' disabled>disabled</Nav.Link></Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>title</Card.Title>
                    <Card.Text>text below as a natural lead.</Card.Text>
                    <Button>go</Button>
                </Card.Body>
            </Card>
        </>            
    )
}

export default MyCard