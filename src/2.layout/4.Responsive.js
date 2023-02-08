import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Responsive() {
    return (
        <Container>
            <Row>
                <Col sm={8}>11</Col>
                <Col sm={4}>12</Col>
            </Row>
            <Row>
                <Col sm>21</Col>
                <Col sm>22</Col>
                <Col sm>23</Col>
            </Row>
        </Container>
    )
}