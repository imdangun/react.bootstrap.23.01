import Accordion from 'react-bootstrap/Accordion'

function MyAccordion() {
    return (
        <Accordion defaultActiveKey='1'>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>item 1</Accordion.Header>
                <Accordion.Body>I love java.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
                <Accordion.Header>item 2</Accordion.Header>
                <Accordion.Body>I like react.</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default MyAccordion