import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ContainerSizing() {
    return (
        <Container>
            <Row>
                <Col>11</Col>
                <Col sm={6}>12</Col>
                <Col>13</Col>
            </Row>
            <Row>
                <Col sm={5}>21</Col>
                <Col>22</Col>
                <Col>23</Col>
            </Row>
        </Container>
    )
}
