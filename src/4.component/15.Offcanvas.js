import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

function MyOffcanvas() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button onClick={handleShow} className='me-2'>open</Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>title</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>body</Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MyOffcanvas