import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'

function MyInputGroup() {
    return (
        <>
            <InputGroup className='p-2'>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control placeholder='username'/>
            </InputGroup>

            <InputGroup className='p-2' size='sm'>
                <Form.Control placeholder='username'/>
                <InputGroup.Text>@gmail.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor='basic-url' className='px-2'>your url</Form.Label>
            <InputGroup className='px-2'>
                <InputGroup.Text>https://hello.com/users/</InputGroup.Text>
                <Form.Control/>
            </InputGroup>

            <InputGroup className='p-2' size='lg'>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control/>
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup className='p-2'>
                <InputGroup.Text>textarea</InputGroup.Text>
                <Form.Control as='textarea'/>
            </InputGroup>

            <InputGroup className='p-2'>
                <InputGroup.Checkbox/>
                <Form.Control/>
                <InputGroup.Radio/>
            </InputGroup>

            <InputGroup className='p-2'>
                <Form.Control placeholder='username'/>
                <Button variant='outline-secondary'>button</Button>                
            </InputGroup>

            <InputGroup className='p-2'>
                <DropdownButton variant='outline-secondary' title='dropdown'>
                    <Dropdown.Item href='#'>apple</Dropdown.Item>
                    <Dropdown.Item href='#'>pear</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href='#'>berry</Dropdown.Item>
                </DropdownButton>
                <Form.Control/>
            </InputGroup>

            <InputGroup className='p-2'>
                <Form.Control/>
                <SplitButton variant='outline-secondary' title='like' alignRight>
                    <Dropdown.Item href='#'>puppy</Dropdown.Item>
                    <Dropdown.Item href='#'>kitten</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href='#'>bird</Dropdown.Item>
                </SplitButton>
            </InputGroup>
        </>
    )
}

export default MyInputGroup