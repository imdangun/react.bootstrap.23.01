import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

function MyFloatingLabel() {
    return (
        <>
            <FloatingLabel label='username'>
                <Form.Control placeholder='a'/>
            </FloatingLabel>
            <FloatingLabel label='password'>
                <Form.Control type='password' placeholder='a'/>
            </FloatingLabel>
        </>
    )
}

export default MyFloatingLabel