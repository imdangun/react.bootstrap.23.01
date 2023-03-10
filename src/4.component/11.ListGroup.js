import ListGroup from 'react-bootstrap/ListGroup'

import Badge from 'react-bootstrap/Badge'

function MyListGroup() {
    const onAlert = () => alert('hello')

    return (
        <>
            <ListGroup>
                <ListGroup.Item>1</ListGroup.Item>
                <ListGroup.Item variant='warning' action>2</ListGroup.Item>
                <ListGroup.Item>3</ListGroup.Item>
            </ListGroup>

            <ListGroup as='ul' className='mt-2' variant='flush'>
                <ListGroup.Item as='li' active>1</ListGroup.Item>
                <ListGroup.Item as='li'>2</ListGroup.Item>
                <ListGroup.Item as='li' disabled>3</ListGroup.Item>
            </ListGroup>

            <ListGroup defaultActiveKey='#2' className='mt-2' horizontal>
                <ListGroup.Item action href='#1'>1</ListGroup.Item> {/*<a>*/}
                <ListGroup.Item action href='#2'>2</ListGroup.Item> 
                <ListGroup.Item action onClick={onAlert}>3</ListGroup.Item> {/*<button>*/}
            </ListGroup>

            <ListGroup as='ol' numbered className='mt-2'>
                <ListGroup.Item as='li' 
                    className='d-flex justify-content-end align-items-start'>
                    <div className='ms-2 me-auto'>
                        <div className='fw-bold'>a</div>
                        hello
                    </div>
                    <Badge pill>10</Badge>
                </ListGroup.Item>
                <ListGroup.Item as='li' 
                    className='d-flex justify-content-end align-items-start'>
                    <div className='ms-2 me-auto'>
                        <div className='fw-bold'>b</div>
                        world
                    </div>
                    <Badge pill>7</Badge>
                </ListGroup.Item>               
            </ListGroup>
        </>
    )
}

export default MyListGroup