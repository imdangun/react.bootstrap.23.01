import {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function MyAlert() {
    const [show, setShow] = useState(true)

    if(show) {
        return (
            <Alert variant='danger' onClose={() => setShow(false)} dismissible>
                <Alert.Heading>you got an error.</Alert.Heading>
                <p>change this and that and try again.</p>
                <div className='d-flex justify-content-end'>
                    <Button onClick={() => setShow(false)} variant='outline-danger'>
                        close
                    </Button>
                </div>
            </Alert>

        )
    }
    return <Button onClick={() => setShow(true)}>show alert</Button>
}

export default MyAlert