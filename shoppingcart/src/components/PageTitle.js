import React from 'react'

const PageTitle = (props) => {
    const { title } = props
    return (
        <div>
            <h1>{title}</h1>
            <br/>
        </div>
        
    )
}

export default PageTitle
