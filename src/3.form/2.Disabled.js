import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Disabled() {
    return (
        <Form>
            <fieldset disabled>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='title'>title</Form.Label>
                    <Form.Control id='title' placeholder='title'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='fruit'>fruit</Form.Label>
                    <Form.Select id='fruit'>
                        <option>apple</option>
                        <option>pear</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Check
                         type='checkbox'
                         id='disabledCheckbox'
                         label='agree this'/>
                </Form.Group>
                <Button type='submit'>submit</Button>
            </fieldset>
        </Form>
    )
}

export default Disabled