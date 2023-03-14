import Placeholder from 'react-bootstrap/Placeholder'

function MyPlaceholder() {
    return (
        <>
            <p><Placeholder xs={6}/></p>            
            <p><Placeholder className='w-75' size='lg'/></p>
            <p><Placeholder style={{width: '25%'}} bg='danger'/></p>
            <Placeholder as='p' animation='glow'>
                <Placeholder xs={12}/>
            </Placeholder>
            
        </>
    )
}

export default MyPlaceholder