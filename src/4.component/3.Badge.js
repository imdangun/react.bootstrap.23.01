import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function MyBadge() {
    return (
        <div>
            <h1>message <Badge pill bg='primary'>new</Badge></h1>
            <Button variant='primary'>
                profile <Badge bg='secondary'>9</Badge>
            </Button>
        </div>
    )
}

export default MyBadge