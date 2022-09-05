import { useState } from "react";


function NMtable(){
    
    const [filas, setfilas] = useState('')
    const [columnas, setcolumnas] = useState('')

    const onSetFilas = (event) => (

        setfilas(event.target.value) 

    )

    const onSetColumnas = (event) => (

        setcolumnas(event.target.value) 

    )


    const creartabla = () => {

        

        for ( let i = 0 ; i < filas ; i ++ ) {



            let filaActual = document.getElementById('tblDatos').insertRow(i)


            for ( let j = 0 ; j < columnas ; j ++ ) {

                let celda = filaActual.insertCell ( j ) 

                celda.innerHTML =  `Fila : ${i}  - Columna : ${j}` 
                             

            }

        }

    }

    



    return (

        <>

        <h1>9 : CreateTable</h1>

        <input type="number" placeholder="digita la cantidad de filas" value={filas}  onChange={(event) => onSetFilas(event)}/>
        <input type="number" placeholder="digita la cantidad de columnas " value={columnas}  onChange={(event) => onSetColumnas(event)}/>
        
        
        <button onClick={() => creartabla()}> crear tabla </button>

        <table id="tblDatos" border={1}> </table>

        

        </>


        

        

    )

}

export default NMtable