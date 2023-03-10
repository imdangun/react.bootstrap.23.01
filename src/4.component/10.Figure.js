import Figure from 'react-bootstrap/Figure'

import Image from 'react-bootstrap/Image'

function MyFigure() {
    return (
        <>
            <Figure>
                <Figure.Image width={100} height={100} data-src='holder.js/100x100'/>
                <Figure.Caption>nulla</Figure.Caption>
            </Figure>
            <Image thumbnail data-src='holder.js/200x100'/>
        </>
    )
}

export default MyFigure