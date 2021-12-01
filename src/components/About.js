import React from 'react'

function About(props) {
    return (
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <dl className="row">
            <dt className="col-sm-3">Description lists</dt>
            <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

            <dt className="col-sm-3">Term</dt>
            <dd className="col-sm-9">
                <p>Definition for the term.</p>
                <p>And some more placeholder definition text.</p>
            </dd>

            <dt className="col-sm-3">Another term</dt>
            <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

            <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

            <dt className="col-sm-3">Nesting</dt>
            <dd className="col-sm-9">
                <dl className="row">
                <dt className="col-sm-4">Nested definition list</dt>
                <dd className="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                </dl>
            </dd>
            </dl>
        </div>
    )
}

export default About
 
