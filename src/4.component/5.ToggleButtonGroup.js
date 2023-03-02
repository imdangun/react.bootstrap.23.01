import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import {useState} from 'react'

function MyToggleButtonGroup() {
    const [value, setValue] = useState([1, 3])

    const handleChange = val => setValue(val)

    return (
        <>
            <ToggleButtonGroup type='checkbox' defaultValue={[1, 3]} className='m-2'>
                <ToggleButton id='t1' value={1}>1</ToggleButton>
                <ToggleButton id='t2' value={2}>2</ToggleButton>
                <ToggleButton id='t3' value={3}>3</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup type='radio' name='option' defaultValue={1}>
                <ToggleButton id='t11' value={1}>1</ToggleButton>
                <ToggleButton id='t22' value={2}>2</ToggleButton>
                <ToggleButton id='t33' value={3}>3</ToggleButton>
            </ToggleButtonGroup> <br/>

            <ToggleButtonGroup type='checkbox' value={value} onChange={handleChange}>
                <ToggleButton id='c1' value={1}>1</ToggleButton>
                <ToggleButton id='c2' value={2}>2</ToggleButton>
                <ToggleButton id='c3' value={3}>3</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default MyToggleButtonGroup