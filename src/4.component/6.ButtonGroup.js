import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function MyButtonGroup() {
    return (
        <>
            <ButtonGroup className='m-2' size='sm'>
                <Button variant='secondary'>left</Button>
                <Button variant='secondary'>middle</Button>
                <Button variant='secondary'>right</Button>
            </ButtonGroup>

            <ButtonToolbar className='m-2'>
                <ButtonGroup className='me-2'>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </ButtonGroup>{' '}
                <ButtonGroup className='me-2'>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button>8</Button>
                </ButtonGroup>
            </ButtonToolbar>

            <ButtonToolbar className='justify-content-between m-2'>
                <ButtonGroup>
                    <Button variant='secondary'>1</Button>
                    <Button variant='secondary'>2</Button>
                </ButtonGroup>
                <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control type='text' placeholder='input your email'/>
                </InputGroup>
            </ButtonToolbar>

            <ButtonGroup vertical>
                <Button>1</Button>
                <Button>2</Button>
                <DropdownButton as={ButtonGroup} title='dropdown'>
                    <Dropdown.Item eventKey='1'>1</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>2</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </>
    )
}

export default MyButtonGroup