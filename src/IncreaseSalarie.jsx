import { useState } from "react";


function IncreaseSalarie( ){

    const [salarie, setSalarie] = useState('')

    const [salaries, setSalaries] = useState([])

    const [condicion, setCondicion] = useState(false)

    const onSetSalarie = (event) => {

        setSalarie(event.target.value)

    }

    const addSalarie = () => {

        setSalaries([ ... salaries, (salarie * 1.08)])

        setSalarie('')
        

    }

    const reset = () => {

        setSalaries([])
        setCondicion(false)


    }

    const showSalaries = () => {

        

        if(salaries.length == 10 ){

        
            setCondicion(true)

        }

        else {

            alert('error: hay  ' + salaries.length + ' salarios añadidos (se requieren 10 salarios para realizar la operacion)')
            

        }
        
        

    }


        

     




    return(


        <>
        
        <h1>7 : IncreaseSalarie</h1>

        

        <>{ condicion ? 

        <button onClick={() => reset()}> reset </button>


        :

        <>
        <input type="number" value={salarie} onChange={(event) => onSetSalarie(event) } />
        <button onClick={() => addSalarie()}> Add Salarie </button>
        </>


        }

        </>       



        <button onClick={() => showSalaries()}> Show Salaries</button>

        
        <div>

            {condicion &&

             <ol>

            {
                salaries.map((salarie, key) => {

                    return <li key={key}>{salarie}</li>

                })
                
            }
            </ol>

        }

                    



        </div>
            


        
        
        </>



    )

}

export default IncreaseSalarie