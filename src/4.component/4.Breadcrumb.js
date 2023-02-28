import Breadcrumb from 'react-bootstrap/Breadcrumb'

function MyBreadcrumb() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href='#'>home</Breadcrumb.Item>
            <Breadcrumb.Item href='#'>library</Breadcrumb.Item>
            <Breadcrumb.Item active>splice</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default MyBreadcrumb