import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Auto() {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs md='2'>11</Col>
                <Col sm='auto'>12</Col>
                <Col xs md='2'>13</Col>
            </Row>
            <Row>
                <Col>21</Col>
                <Col sm='auto'>22</Col>
                <Col xs md='2'>23</Col>
            </Row>
        </Container>
    )
}