import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'

function simulateRequest() {
    return new Promise(resolve => setTimeout(resolve, 1000))
}

function LoadButton() {
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if(isLoading) {
            simulateRequest().then(() => setLoading(false))
        }
    }, [isLoading])

    const handleClick = () => setLoading(true)

    return (
        <Button
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}>
            {isLoading ? 'loading.' : 'click to load'}
        </Button>
    )
}

export default LoadButton