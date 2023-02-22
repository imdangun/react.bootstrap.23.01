import Form from 'react-bootstrap/Form'

function Text() {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='emailGroup'>
                <Form.Label>email</Form.Label>
                <Form.Control 
                    type='email' 
                    placeholder='boot@gmail.com'
                    size='sm'
                    disabled/>                
            </Form.Group>
            <Form.Group className='mb-3' controlId='articleGroup'>
                <Form.Label>article</Form.Label>
                <Form.Control 
                    as='textarea' 
                    rows={3}
                    readOnly/>
            </Form.Group>
        </Form>
    )
}

export default Text