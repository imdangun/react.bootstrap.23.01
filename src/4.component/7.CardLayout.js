import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CardLayout() {
    return (
        <>
            <CardGroup className='m-2'>
                <Card>
                    <Card.Img variant='top' data-src='holder.js/200x100'/>
                    <Card.Body>
                        <Card.Title>title</Card.Title>
                        <Card.Text>text</Card.Text>                        
                    </Card.Body>
                    <Card.Footer>
                        <samll className='text-muted'>3 mins ago.</samll>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant='top' data-src='holder.js/200x100'/>
                    <Card.Body>
                        <Card.Title>title</Card.Title>
                        <Card.Text>text</Card.Text>                        
                    </Card.Body>
                    <Card.Footer>
                        <samll className='text-muted'>3 mins ago.</samll>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant='top' data-src='holder.js/200x100'/>
                    <Card.Body>
                        <Card.Title>title</Card.Title>
                        <Card.Text>text</Card.Text>                        
                    </Card.Body>
                    <Card.Footer>
                        <samll className='text-muted'>3 mins ago.</samll>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <Row xs={1} sm={2} className='g-4'>
                {Array.from({length: 4}).map((_, i) => (
                    <Col>
                        <Card>
                            <Card.Img variant='top' data-src='holder.js/300x100'/>
                            <Card.Body>
                                <Card.Title>title</Card.Title>
                                <Card.Text>text {i + 1}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CardLayout