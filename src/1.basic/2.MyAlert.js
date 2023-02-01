import Alert from 'react-bootstrap/Alert'

export default function MyAlert() {
    return (
        <Alert variant='danger'>
            <Alert.Heading>oh snap! you got an error.</Alert.Heading>
            <p>change this and that and try again.</p>
        </Alert>
    )
}