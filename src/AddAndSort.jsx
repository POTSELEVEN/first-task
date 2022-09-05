import { useState } from "react"






export const AddAndSort = ( {numbers} ) => {


    const [number, setnumber]= useState([])

    const [numberAdd, setNumberAdd] = useState('')

    const onSetNumberAdd = (event) =>{

        setNumberAdd(event.target.value)
    }

    const addAndSort = () => {

        setnumber(numbers)

        number.push(numberAdd)

        


    }



    return (

        <>

        <h3>5 : add a number</h3>
        
        <input type="number" placeholder="number1" value={numberAdd} onChange={(event) => onSetNumberAdd(event)}/>

        <button onClick={() => addAndSort()}> add And sort </button>

        <ol>
            
             {
                number.map(
                    (numero, key) => 
                    
                    {
                    return <li key={key} > {numero} </li>

                    }

                    
                )
            }



                
            
        </ol>
        
        </>

    )


}

