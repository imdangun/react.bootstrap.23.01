import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import ListGroup from 'react-bootstrap/ListGroup'



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

            <Card body>shorthand version.</Card>

            <Card style={{width: '10rem', margin: '1rem'}}>
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
        </>            
    )
}

export default MyCard