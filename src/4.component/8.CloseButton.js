import CloseButton from 'react-bootstrap/CloseButton'

function MyCloseButton() {
    return (
        <>
            <CloseButton/>

            <div className='bg-dark p-3'>
                <CloseButton variant='white'/>
                <CloseButton variant='white' disabled/>
            </div>
        </>
    )
}

export default MyCloseButton