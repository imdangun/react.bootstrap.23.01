import Alert from 'react-bootstrap/Alert'

function MyAlert() {
    return (
        <>
            <Alert varinat='primary'>
                check it out.
            </Alert>

            <Alert variant='secondary'>
                check <Alert.Link href='#'>conditon</Alert.Link> now.
            </Alert>

            <Alert varinat='success'>
                <Alert.Heading>hi!</Alert.Heading>
                <p>nice to meet you.</p>
                <hr/>
                <p className='mb-0'>call me.</p>
            </Alert>            
        </>
    )
}

export default MyAlert