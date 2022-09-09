import logo from './logo.svg';
import './App.css';
import { store } from './Redux/Store/store';
import { decrement, increment } from './Redux/Actions/actions';
import { useState } from 'react';

function App() {
  const ballStyle = {
    backgroundColor: 'tomato',
    borderRadius: '50%',
    width:'5em',
    height:'4.25em',
    textAlign:'center',
    paddingTop: '2.75em',
    display:'inline-block',
    flex:"1",
    marginRight: '0.5em',
    marginTop: '1em',
    color:'white',
    fontWeight: 'bold',
    fontSize: '1.5em'
  }
  const [count,setCount]=useState(0);
  store.subscribe((state)=>{
    //console.log("store data", store.getState().countreducer);
      setCount(store.getState().countreducer)
  })
  return (
   
    <div className="App">
     <p>{count}</p> 
     <div style={ballStyle}>
      <button style={{marginRight:20}} onClick={()=>store.dispatch(increment)}>+</button>
      <button onClick={()=>store.dispatch(decrement)}>-</button>
      </div>
    </div>
  );
}

export default App;
