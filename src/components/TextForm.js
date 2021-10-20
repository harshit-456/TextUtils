import React,{ useState } from 'react' ;

export default function TextForm(props) {
    const handleUpclick=()=>{
        console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        props.showAlert("Converted to Upper case","success");
        setText(newtext);
    }
    const handleLoclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower case","success");
    }
    const word=()=>{
        let words=text.split(" ");
        console.log(words);
        if(words.length===1&&words[0]==='')
        return 0;
        else
        return words.length;
    }
//    function words()
//    {
//         let words=text.split(" ");
//         console.log(words);
//         if(words.length===1&&words[0]==='')
//         return 0;
//         else
//         return words.length;
//     }
    const handleonChange=(event)=>{
console.log("On change");
setText(event.target.value);

    }
    const handleClearclick=(event)=>{
        let newtext='';
        setText(newtext);
        props.showAlert("Text cleared","success");
    }
    const [text,setText]=useState('');

    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>
            {props.heading}
            </h1>
    
    

<div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
  <textarea className="form-control"  value={text} onChange ={handleonChange} style={{backgroundColor:props.mode==='light'?'white':'grey'}} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn primary mx-2  bg-red" onClick={handleUpclick} > Convert to Upper case </button>
<button className="btn btn primary mx-2" onClick={handleLoclick} > Convert to Lower case </button>
<button className="btn btn primary" onClick={handleClearclick} > Clear text </button>
</div>
<div className="container" my-3='true' style={{color:props.mode==='light'?'black':'white'}}>
    <h1>
        Your text summary
    </h1>
    //note here writing () after (word) is necessary to invoke it immediately
    <p>  {(word
 )()
 } words  and {text.length} characters
    </p>
    <p> {0.008*text.split(" ").length} read time in minutes</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
        </>
    )
}
