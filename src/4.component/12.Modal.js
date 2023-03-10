import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function MyModal() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button onClick={handleShow}>modal</Button>
            <Modal show={show} onHide={handleClose}> {/* onHide: closeButton 누를 때 작동한다. */}
                <Modal.Header closeButton>
                    <Modal.Title>title</Modal.Title>
                </Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>close</Button>
                    <Button onClick={handleClose}>save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MyModal