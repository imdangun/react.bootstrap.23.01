import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

function PlainText() {
    return (
        <Form>
            <Form.Group as={Row} className='mb-3' controlId='emailGroup'>
                <Form.Label column xs='2'>email</Form.Label>
                <Col xs='10'>
                    <Form.Control plaintext readOnly defaultValue='boot@gmail.com'/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3' controlId='pwGroup'>
                <Form.Label column xs='2'>password</Form.Label>
                <Col xs='10'>
                    <Form.Control type='password' placeholder='password'/>
                </Col>
                <Form.Text muted>
                    your password must mbe 9-20 characters long.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default PlainText