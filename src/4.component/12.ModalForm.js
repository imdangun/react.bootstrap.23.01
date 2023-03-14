import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

function ModalForm() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button onClick={handleShow}>modal</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>title</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>email</Form.Label>
                            <Form.Control type='email' placeholder='a@a.com' autoFocus/>                            
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>textarea</Form.Label>
                            <Form.Control as='textarea' rows={3}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>close</Button>
                    <Button onClick={handleClose}>save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalForm