import React from 'react';
import './App.css';
import CounterUseReducer from './Components/CounterUseReducer';
// import ComponentA from './Components/ComponentA';
// import ProductList from './ProductList';


// export const userContext = React.createContext();
// export const passwordContext = React.createContext();


function App() {
  return (
    // <div className="App">
    //   <h1>Product Catalog</h1>
    //   <ProductList />
    // </div>


    // <>
    // <userContext.Provider value={"Sreejith"}>
    //   <passwordContext.Provider value={"12345@6789"}>
    //   <ComponentA />
    //   </passwordContext.Provider>
    // </userContext.Provider>
    // </>

    <>
      <CounterUseReducer />
    </>
  );
}

export default App;

