import React from 'react'

function alert(props) {
    return (
        <>
            <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>}
            </div>
        </>
    )
}

export default alert


