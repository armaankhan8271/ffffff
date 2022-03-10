import React,{useState} from 'react';



export default function Words() {

    const [word, setword] = useState("enter ")
    function handlechange(event) {
        setword(event.target.value);
    }
      function Uppercase() {
        const change = word.toUpperCase()
        setword (change)
        
        
         };
      function lowercase() {
        const change = word.toLowerCase();
        setword (change)}
    
      function clearText() {
        setword ("  ")
    
      
      }

      const [mode, setmode] = useState({
        color:"black",
        backgroundColor:"white",
        
    })
    function dark (){
        if (mode.color==="black") {
           
            setmode({ color:"white",
            backgroundColor:"#36454F"})
            
        }else {
    
          setmode({color:"black",
          backgroundColor:"white"})  
        }
    
    }


    return (
        <div >
            <h2>Word Analyzer</h2>
            <div className="form-group container my-4">
        <textarea style={mode}
          onChange={handlechange}
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter text"
          rows="8"
          value={word}
        ></textarea>
        <label htmlFor="exampleFormControlTextarea1"></label>
        
        <button onClick={Uppercase} type="button" className="btn btn-primary">
          uppercase
        </button>
        <button onClick={lowercase} type="button" className="btn btn-primary">
          lowercase
        </button>
        <button onClick={clearText} type="button" className="btn btn-primary">
          clearText
        </button>
        <div className="container my-4 dark">
          <h1>your text summery</h1>
          <p>{word.split(" ").length} word {word.length} character</p>
          <p>{word.length*0.008} minutes to write</p>
          <h1>preview</h1>
          <p>{word}</p>
          <button onClick={dark} type="button" className="btn btn-light">
                Light
              </button>
              <button onClick={dark} type="button" className="btn btn-dark">
                Dark
              </button>
        </div>
        
      </div>

            </div>
    );
}
