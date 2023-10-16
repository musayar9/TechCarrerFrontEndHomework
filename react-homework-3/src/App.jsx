import { useState } from 'react'


function App() {
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(200)
  
  const change= ()=>{
  
     const newWidth = parseInt(width) 
     const newHeight = parseInt(height) 

     setWidth(newWidth);
     setHeight(newHeight);
  }

  return (
    <>
    
        <label htmlFor="width">width</label>
        <input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />

        <label htmlFor="height">height</label>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={change}>change</button>
    

      <div style={{ width: width, height: height, backgroundColor:"red" }}></div>
    </>
  );
}

export default App
