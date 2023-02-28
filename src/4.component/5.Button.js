import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function MyButton() {
    return(
        <>
            <Button variant='primary'>1</Button>{' '}
            <Button variant='outline-primary'>2</Button>{' '}
            <Button href='#'>3</Button>{' '}
            <Button type='submit' size='sm'>4</Button>
            
            <div className='d-grid gap-2 mt-2'>
                <Button variant='primary' disabled>one</Button>
                <Button variant='secondary' active>two</Button>
            </div>

            <ToggleButtonGroup type='checkbox' defaultValue={[1, 3]} className='m-2'>
                <ToggleButton value={1}>1</ToggleButton>
                <ToggleButton value={2}>2</ToggleButton>
                <ToggleButton value={3}>3</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup type='radio' name='option' defaultValue={1}>
                <ToggleButton value={1}>1</ToggleButton>
                <ToggleButton value={2}>2</ToggleButton>
                <ToggleButton value={3}>3</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default MyButton