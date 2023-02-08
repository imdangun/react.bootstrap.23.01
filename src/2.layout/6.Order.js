import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Order() {
    return (
        <Container>
            <Row>
                <Col sm={{order: 3}}>11</Col>
                <Col sm={{order: 1}}>12</Col>
                <Col sm={{order: 2}}>13</Col>
            </Row>
            <Row>
                <Col sm={{order: 'last'}}>21</Col>
                <Col sm={{order: 'frist'}}>22</Col>
                <Col>23</Col>
            </Row>
        </Container>
    )
}