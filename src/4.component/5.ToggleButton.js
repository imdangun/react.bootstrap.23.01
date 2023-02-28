import {useState} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function MyToggleButton() {
    const [checked, setChecked] = useState(false)
    const [radioValue, setRadioValue] = useState('1')

    const radios = [
        {name: 'radio1', value: '1'},
        {name: 'radio2', value: '2'},
        {name: 'radio3', value: '3'}
    ]

    return (
        <>
            <ButtonGroup className='mb-2'>
                <ToggleButton
                    id='checkbox'
                    type='checkbox'
                    variant='secondary'
                    checked={checked}
                    value='1'
                    onChange={e => setChecked(e.currentTarget.checked)}>
                    checkbox
                </ToggleButton>
            </ButtonGroup><br/>
            <ButtonGroup className='mb-2'>
                {radios.map((radio, i) => (
                    <ToggleButton 
                        key={i}
                        id={`radio${i}`}
                        type='radio'
                        variant='secondary'
                        name='radio'
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={e => setRadioValue(e.currentTarget.value)}>
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup><br/>

            <ToggleButton className='mb-2'
                id='checkbox2'
                type='checkbox'
                variant='outline-primary'
                checked={checked}
                value='1'
                onChange={e => setChecked(e.currentTarget.checked)}>
                checkbox
            </ToggleButton><br/>
            <ButtonGroup>
                {radios.map((radio, i) => (
                    <ToggleButton
                        key={i + 10}
                        id={`radio${i}`}
                        type='radio'
                        variant={i % 2 ? 'outline-success' : 'outline-danger'}
                        name={radio.name}
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={e => setRadioValue(e.currentTarget.value)}>
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    )
}

export default MyToggleButton