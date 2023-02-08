import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MyContainer() {
    return (
        <Container>
            <Row>
                <Col>11</Col>
                <Col>12</Col>
            </Row>
            <Row>
                <Col>21</Col>
                <Col>22</Col>
                <Col>23</Col>
            </Row>
        </Container>
    )
}

export default MyContainer