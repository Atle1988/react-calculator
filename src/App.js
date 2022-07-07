
import "./App.css";
import {GlobalStyles} from "./components/GlobalStyle.style"
import { AppCalculator } from "./components/App.calculator";
import TopSection from "./components/Top.section";
import { LargeBtn } from "./components/Button.style";

import {useSelector} from "react-redux"
import {increment, decrement, multiply, divide, reset, sum} from "./redux/action/count"
import store from ".";


import Btn from "./Btn/smallBtn"
import calculatorData from "./calculatorData"

 /* Mapper kjennom data for å skaffe informsjon som blir sendt via props til funksjonen Btn */
 const mappedNumber = calculatorData.map( (item) => {
  return <Btn 
   number={item.number}
   key={item.id} 
   backgroundColor={item.backgroundColor}
   color={item.color} /> } )



function App() {
const counter = useSelector( state => state.counter )

function resetBtn(){
  store.dispatch(reset() )
}
function sumBtn(){
  store.dispatch( sum() )
}

      
  return (
    <div className="App">
      <h1> State Value : {counter} </h1>
      <GlobalStyles />
      <header className="App-header">

      <AppCalculator className="sunshine">
          <TopSection />
          <main >
          <section className="grid-4x4">
            { mappedNumber }
          </section>

          <section className="grid-2x1">
            <LargeBtn backgroundColor="#616E9B" color="#FFFFFF" onClick={resetBtn}>RESET</LargeBtn>
            <LargeBtn backgroundColor="#A60E0E" color="#FFFFFF" onClick={sumBtn} >=</LargeBtn>
          </section>
          </main >
          </AppCalculator>
      

      </header>

    </div>
  );
}

export default App;


/* import Figma from "./components/Figma";
<Figma /> */
