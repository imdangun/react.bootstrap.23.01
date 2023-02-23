import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MyFloatingLabel() {
    return (
        <>
            <FloatingLabel label='username' className='p-2'>
                <Form.Control placeholder='a'/>
            </FloatingLabel>

            <FloatingLabel label='password' className='p-2'>
                <Form.Control type='password' placeholder='a'/>
            </FloatingLabel>

            <FloatingLabel label='comments' className='p-2'>
                <Form.Control as='textarea' style={{height: '7rem'}}/>
            </FloatingLabel>

            <FloatingLabel label='language'>
                <Form.Select>
                    <option>open this</option>
                    <option>java</option>
                    <option>sql</option>
                </Form.Select>
            </FloatingLabel>

            <Row className='g-2 mt-3'>
                <Col sm>
                    <FloatingLabel label='email'>
                        <Form.Control type='email' placeholder='a'/>
                    </FloatingLabel>
                </Col>
                <Col sm>
                    <FloatingLabel label='fruit'>
                        <Form.Select>
                            <option>open this</option>
                            <option value='1'>apple</option>
                            <option value='2'>pear</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
        </>
    )
}

export default MyFloatingLabel