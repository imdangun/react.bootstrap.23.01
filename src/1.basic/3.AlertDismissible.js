import {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export default function AlertDismissible() {
    const [show, setShow] = useState(true)

    return (
        <>
            <Alert show={show} variant='success'>
                <Alert.Heading>How's it going?</Alert.Heading>
                <p>blah blah.</p>
                <hr/>
                <div className='d-flex justify-content-end'>
                    <Button onClick={() => setShow(false)} variant='outline-success'>
                        close me
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>show alert</Button>}
        </>
    )
}