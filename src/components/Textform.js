import React, {useState} from 'react'

export default function Textform(props) {
    const [text, settext] = useState('enter your text here');
    


    const handleonchange = (event) =>{
        settext(event.target.value)
    }
    const cclicked = () =>{
        let newtext = text.toUpperCase(); 
        settext(newtext)
        props.showAlert("Converted to upercase text !", "success")
    }
    const lclicked = () =>{
        let newtext = text.toLowerCase(); 
        settext(newtext)
        props.showAlert("Converted to lowercase !", "success")
    }
    const clclicked = () =>{ 
        settext('')
        props.showAlert("Cleared text!" , "success")
    }

    return (
        <>

        <div >
            <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}} >
                <h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label mb-3" >{props.title}</label>
                </h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="10" style={{backgroundColor:props.mode==='light'?'white':'#3b3939' , color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button type="button" disabled={text.length==0} className="btn btn-primary mx-3 my-3" onClick={cclicked} >Convert to upercase?!</button>
            <button type="button" disabled={text.length==0} className="btn btn-primary mx-3 my-3 " onClick={lclicked} >Convert to lowercase?!</button>
            <button type="button" disabled={text.length==0} className="btn btn-primary mx-3 my-3 " onClick={clclicked} >Clear?!</button>
        </div>
        
        <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}} >
            <h2>Preview here</h2>
            <p>{text.length} Characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words </p>
            <p>{text.length>0?text:'write something to preview'}</p>
        </div>
        </>
    )
}