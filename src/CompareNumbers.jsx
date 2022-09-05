import { useState } from "react";
import {AddAndSort} from "./AddAndSort"

function CompareNumbers(){

    // const [number, setnumber] = useState([''])

    const [number1, setnumber1] = useState('')
    const [number2, setnumber2] = useState('')
    const [number3, setnumber3] = useState('')
    

    const [comparison, setcomparison] = useState('')

    const onSetNumber1 = (event) =>{

        setnumber1(event.target.value)
    }

    const onSetNumber2 = (event) =>{

        setnumber2(event.target.value)
    }
    const onSetNumber3 = (event) =>{

        setnumber3(event.target.value)

    }

    
    const number = [number1, number2, number3]



    

    const compare = () => {

        let times = ''
        let numbero = ''

        if (number[0] == number[1]){

            times = 2
            numbero = number[0]

        }

        if (number[0] == number[1] && number[0] == number[2]){

            numbero = number[0]

            times = 3

        }

        if (number[1] == number[2] && number[0] != number[2]){

            numbero = number[1]
            
            times = 2
        }
        if (times != ''){

            setcomparison('el numero ' + numbero +' se repite ' + times +' veces')
      
        }

        else{
            
            setcomparison('no se repite ningun numero')

        }
        



        

    }




    return(

        <>
        
        <h1>4 : CompareNumbers</h1>

        <input type="number" placeholder="number1" value={number1} onChange={(event) => onSetNumber1(event)}/>
        <input type="number" placeholder="number2" value={number2} onChange={(event) => onSetNumber2(event)}/>
        <input type="number" placeholder="number3" value={number3} onChange={(event) => onSetNumber3(event)}/>

        <button onClick={() => compare()}> compare </button>

        
        

        <h2>{comparison}</h2>

        <AddAndSort numbers={number} />
        
        </>

    )

}

export default CompareNumbers