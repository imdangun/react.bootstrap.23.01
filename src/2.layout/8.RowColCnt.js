import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function RowColCnt() {
    return (
        <Container>
            <Row xs={2} sm={4} md={6}>
                <Col>11</Col>
                <Col>12</Col>
            </Row>
            <Row xs={1} sm={2}>
                <Col>21</Col>
                <Col>22</Col>
                <Col>23</Col>
            </Row>
            <Row xs='auto'>
                <Col>31</Col>
                <Col>32</Col>
                <Col>33</Col>
            </Row>
            <Row xs={2} sm={4} md={6}>
                <Col sm={5}>41</Col>
                <Col xs={1}>42</Col>
            </Row>
        </Container>
    )
}

export default RowColCnt