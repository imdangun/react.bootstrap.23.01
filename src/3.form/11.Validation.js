import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

function Validation() {
    const [validated, setValidated] = useState(false)

    const handleSubmit = event => {
        const form = event.currentTarget
        console.log(form) // <form> ~ </form>
        if(form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        setValidated(true)
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Form.Group as={Col} sm='4' controlId='c1'>
                    <Form.Label>first name</Form.Label>
                    <Form.Control required                       
                        placeholder='first name'
                        defaultValue='mark'/>
                    <Form.Control.Feedback>looks good</Form.Control.Feedback>                    
                </Form.Group>
                <Form.Group as={Col} sm='4' controlId='c2'>
                    <Form.Label>last name</Form.Label>
                    <Form.Control required                       
                        placeholder='last name'
                        defaultValue='otto'/>
                    <Form.Control.Feedback type='valid'>looks good</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>input lastname.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm='4' controlId='c3'>
                    <Form.Label>username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control required                          
                            placeholder='username'/>
                        <Form.Control.Feedback type='invalid'>
                            please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
                <Form.Check required
                    label='agree to terms'
                    feedback='you must agree before submitting.'
                    feedbackType='invalid'/>                    
            </Form.Group>
            <Button type='submit'>submit</Button>
        </Form>
    )
}

export default Validation