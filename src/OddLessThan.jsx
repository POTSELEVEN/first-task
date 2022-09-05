
import { useState } from "react";



function OddLessThan(){


    const [number, setNumber] = useState('')

    const onSetNumber = (event) => {

        setNumber(event.target.value)

    }

    const [odds, setOdds] = useState([])
    

    const ShowOdds = () => {

        let oddis  = []

        for( let i = 0  ; i < number ; i++){

            if((i % 2) != 0){

                oddis.push(i)

            }

        }

        setOdds(oddis)


    }


    return(

        <>
        
        
        <h1>6 : Odds less than your noumber</h1> 
        <input type="number" placeholder="number" value={number} onChange={(event) => onSetNumber(event)} />

        <button onClick={() => ShowOdds()}></button>

        <ol>

            {
                odds.map((odd, key) => {

                    return <li>{odd}</li>

                })
                
            }
        </ol>
        
        
        </>
        
    )



}

export default OddLessThan