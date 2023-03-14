import {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

function MyTooltip() {
    const [show, setShow] = useState(false)
    const target = useRef(null)

    return (
        <>
            <Button ref={target} onClick={() => setShow(!show)}>right</Button>
            <Overlay target={target.current} show={show} placement='right'>
                {(props) => (
                    <Tooltip {...props}>right</Tooltip>
                )}
            </Overlay>

            <OverlayTrigger placement='bottom' overlay={<Tooltip>bottom</Tooltip>}>
                <Button variant='secondary'>bottom</Button>
            </OverlayTrigger>
        </>
    )
}

export default MyTooltip