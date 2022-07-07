import {SmallBtn} from "../components/Button.style"
import {increment, decrement, multiply, divide, reset, newCount} from "../redux/action/count"
import store from "../index"


/* number array er for add() funksjonen. linje 83 */
let number = []

/* Får inn mappet props fra dataArrayen fra App.js  retunerer SmallBtn med props. */
/* Dette gjør denne funksjonen gjenbruk bar.. */
export default function Btn( props ){
  
  return(
    <>
      <SmallBtn 
        key={props.id} 
        onClick={clicked} 
        backgroundColor={props.backgroundColor} 
        color={props.color}> {props.number}
      </SmallBtn>
    </>
  )
function addMe(){

  const addSum = number.reduce( (total, num) => total + num )
  document.querySelector("#input-el").value = addSum
}

function multiplyMe(){
  const multiplySum = number.reduce( (total, num) => total * num )
  document.querySelector("#input-el").value = multiplySum
}
  
  function clicked( ){
    const inputEl = document.querySelector("#input-el")

    switch(props.number){
      case "+":
        number.push(inputEl.value)
        console.log(number) 
        const value = number.map( e =>  parseInt(e)  )
        
        console.log(value) 
        
        
        return store.dispatch(increment(value[0])),inputEl.value = ""

      // sletter state valuen. sletter arrayet, consol.logger et tomt array! 
      case "DEL":
        return store.dispatch(reset()), number = [], console.log(number)
        
        /* delete dei gamle numberne arrayet */
      

        case "/":
          number.push(inputEl.value)
          return addMe() 


      case "x":
        // storeValue 
        /* const multiplySum = number.reduce( (total, num) => total * num ) */
        // store.dispatch(storeValue = 0), store.dispatch(multiply(document.querySelector("#input-el").value))
        return store.dispatch(multiply(inputEl.value)), multiplyMe ()


      case 0:
        return inputEl.value += 0
       //console.log(number), number.push(0) ,console.log(number), store.dispatch(increment(0))

        
      case 1:
        return inputEl.value += 1
         /* store.dispatch(increment(1)) */


      case 2:
        return inputEl.value += 2
        /* store.dispatch(increment(2)) */


      case 3:
        return inputEl.value += 3
        /* store.dispatch(increment(3)) */


      case 4:
        return inputEl.value += 4
        /* store.dispatch(increment(4)) */


      case 5:
        inputEl.value += 5
        return /* store.dispatch(increment(5)) */
    


        case 6:
        return inputEl.value += 6
        /* store.dispatch(increment(6)) */

        
      case 7:
        return inputEl.value += 7
        /* store.dispatch(increment(7)) */


      case 8:
        return inputEl.value += 8
        /* store.dispatch(increment(8)) */


      case 9:
        return inputEl.value += 9
        /* store.dispatch(increment(9)) */


      
      default:
        return store.dispatch(decrement(1))

    }
/* 
    function add(){
      number.push( inputEl.value )
      inputEl.value = ""
      console.log(number)
    }

    function divSum(){
      number.push( inputEl.value )
      
      const mappedNumber = number.map( e =>  parseInt(e)  );
      const sum = mappedNumber.reduce( (total, num) => total / num )
      inputEl.value = sum
    }
    function addSum(){
      number.push( inputEl.value )
      // number har string elementer, derfor bruker jeg map_functionen til å gjør alle str-Elementen om til int-Elementer
     const mappedNumber = number.map( e =>  parseInt(e)  );
     console.log( mappedNumber )

      // trenger en case! if "+"" clicked sum = else if "- " clicked sum 0 osv.

     // Reduce_functionen looper gjennom arrayet og plusser..
     const sum = mappedNumber.reduce( (total, num) => total + num )
     console.log( sum )
     inputEl.value = sum
    } */


  }
}