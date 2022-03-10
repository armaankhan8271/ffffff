import React,{useState} from 'react';




export default function Number() {

    const [number, setnumber] = useState("enter number here")
    function square() {
      const squares = number*number;
      setnumber (squares)}
  
      function handlechange2(event){
  setnumber(event.target.value)
      }

    return (
        <div className='container mt-3'>
            <h2>Number analyzer</h2>
            <textarea
          onChange={handlechange2}
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter text"
          rows="8"
          value={number}
        ></textarea>
        <button onClick={square} type="button" className="btn btn-primary">
          square
        </button>
        </div>
    );
}
