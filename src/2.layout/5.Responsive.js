import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Responsive() {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={8}>11</Col>
                <Col xs={6} sm={4}>12</Col>
            </Row>
            <Row>
                <Col xs={6} sm={4}>21</Col>
                <Col xs={6} sm={4}>22</Col>
                <Col xs={6} sm={4}>23</Col>
            </Row>
        </Container>
    )
}