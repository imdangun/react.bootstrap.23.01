import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Basic() {
    return (
        <Form>
            <Form.Group class='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email'/>
                <Form.Text className='text-muted'>
                    private content
                </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='check me out'/>
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

export default Basic