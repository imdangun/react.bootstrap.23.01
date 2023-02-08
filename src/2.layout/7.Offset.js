import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Offset() {
    return (
        <Container>
            <Row>
                <Col sm={4}>11</Col>
                <Col sm={{offset: 4, span: 4}}>12</Col>
            </Row>
            <Row>
                <Col sm={{offset: 3, span: 3}}>21</Col>
                <Col sm={{offset: 3, span: 3}}>22</Col>
            </Row>
            <Row>
                <Col sm={{offset: 3, span: 6}}>31</Col>
            </Row>
        </Container>
    )
}

export default Offset