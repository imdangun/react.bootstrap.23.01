import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Horizontal() {
    return (
        <>
            <Stack direction='horizontal' gap={3}>
                <div className='bg-light border'>1</div>
                <div className='bg-light border'>2</div>
                <div className='bg-light border'>3</div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
                <div className='bg-light border'>1</div>
                <div className='bg-light border ms-auto'>2</div>
                <div className='vr'/>
                <div className='bg-light border'>3</div>
            </Stack>
            <Stack direction='horizontal' gap={3}>
                <Form.Control className='me-auto'/>
                <Button variant='secondary'>Submit</Button>
                <div className='vr'/>
                <Button variant='outline-danger'>Reset</Button>
            </Stack>          
        </>
    )
}

export default Horizontal