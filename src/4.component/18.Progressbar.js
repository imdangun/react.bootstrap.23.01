import Progressbar from 'react-bootstrap/Progressbar'

function MyProgressbar() {
    const val = 60

    return (
        <>
            <Progressbar now={val} label={`${val}%`} variant='danger'/>
            <Progressbar striped now={val} className='mt-2'/>
        </>
    )
}

export default MyProgressbar