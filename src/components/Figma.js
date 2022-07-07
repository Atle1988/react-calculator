import TopSection from "./Top.section"
import {SmallBtn, LargeBtn} from "./Button.style"
import {AppCalculator} from "./App.calculator"
import logo from "../logo.svg";
function Figma(){
return( 
  <>

    <img src={logo} className="App-logo" alt="logo" width={"150px"}/>
    <br />
    <h1>Atle's Calculator 2022</h1>

     <AppCalculator className="sunshine">
    <TopSection />

    <main >
      <section className="grid-4x4">
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="1" > 7 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="2" > 8 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="3" > 9 </SmallBtn>

        <SmallBtn backgroundColor="#616E9B" color="#FFFFFF" item="4"> DEL </SmallBtn>

        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="5" > 4 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="6" > 5 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="7" > 6 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="8"> + </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="9" > 1 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="10" > 2 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="11" > 3 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="12"> , </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="13"> . </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="14" > 0 </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="15"> / </SmallBtn>
        <SmallBtn backgroundColor="#D9D9D9" color="#252525" item="16"> x </SmallBtn>
      </section>
      
      <section className="grid-2x1">
        <LargeBtn backgroundColor="#616E9B" color="#FFFFFF">RESET</LargeBtn>
        <LargeBtn backgroundColor="#A60E0E" color="#FFFFFF">=</LargeBtn>
      </section>

    </main>
    </AppCalculator>

  </>
  )

}

export default Figma