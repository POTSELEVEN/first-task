import { createElement } from "react"
import { useState } from "react"



function NMadittion(){

    const [filas2, setfilas2] = useState('')
    const [columnas2, setcolumnas2] = useState('')

    const onSetFilas2 = (event) => (

        setfilas2(event.target.value) 

    )

    const onSetColumnas2 = (event) => (

        setcolumnas2(event.target.value) 

    )


    const creartabla2 = () =>{

        for ( let i = 0 ; i < filas2 ; i ++ ) {



            let filaActual = document.getElementById('tbldatos2').insertRow(i)


            for ( let j = 0 ; j < columnas2 ; j ++ ) {

                let input = document.createElement("input")

                input.setAttribute("id", `${i}x${j}`);
                

                let celda = filaActual.insertCell ( j ) 

                celda.appendChild(input) 
                             

            }

        }

    }

    const mostrartotales = () => {

        let filaActual = document.getElementById('tbldatos2').insertRow()

        for ( let i = 0 ; i < columnas2 ; i ++ ) {

            let sumacolumna = 0


                for ( let j = 0 ; j < filas2 ; j ++ ) {

                    sumacolumna =  sumacolumna + parseFloat(document.getElementById(`${j}x${i}`).value)       

       
                                

            }

            let celda = filaActual.insertCell () 

            celda.innerHTML = `${sumacolumna}` 
        }

        
    }


    

    

return (





        <>

     <h1>10 : adittion table</h1>
    
        <input type="number" placeholder="digita la cantidad de filas" value={filas2}  onChange={(event) => onSetFilas2(event)}/>
        <input type="number" placeholder="digita la cantidad de columnas " value={columnas2}  onChange={(event) => onSetColumnas2(event)}/>
        
        
        <button onClick={() => creartabla2()}> crear tabla </button>
        <button onClick={() => mostrartotales()}> mostrar totales </button>



        <table id="tbldatos2" border={1}></table>


        </>

)

}


export default NMadittion