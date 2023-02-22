import Form from 'react-bootstrap/Form'

function FileColor() {
    return (
        <>
            <Form.Group controlId='file' className='mb-3'>
                <Form.Label>single file</Form.Label>
                <Form.Control type='file'/>
            </Form.Group>
            <Form.Group controlId='fileMultiple' className='mb-3'>
                <Form.Label>multiple file</Form.Label>
                <Form.Control type='file' multiple/>
            </Form.Group>
            <Form.Group controlId='fileDisabled' className='mb-3'>
                <Form.Label>disabled file</Form.Label>
                <Form.Control type='file' disabled/>                
            </Form.Group>
            <Form.Group controlId='fileSm' className='mb-3'>
                <Form.Label>small file</Form.Label>
                <Form.Control type='file' size='sm'/>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='colorInput'>pick up color</Form.Label>
                <Form.Control
                    type='color'
                    id='colorInput'
                    defaultValue='#563d7c'
                    title='choose your color'/>
            </Form.Group>
        </>
    )
}

export default FileColor