import Form from 'react-bootstrap/Form'

function Check() {
    return (
        <Form>
            {['checkbox', 'radio'].map(type => (
                <div key={`${type}`} className='p-3 border'>
                    <Form.Check type={type} />
                    <Form.Check type={type} disabled/>
                </div>
            ))}    

            <div className='p-3 border'>
                <Form.Check type='switch' />
                <Form.Check type='switch' disabled/>
            </div>            
            
           {['checkbox', 'radio'].map(type => (
                <div key={`${type}2`} className='p-3 border'>
                    <Form.Check type={type} name='g1' inline label='1'/>
                    <Form.Check type={type} name='g1' inline label='2' reverse/>
                </div>
           ))}
        </Form>
    )
}

export default Check