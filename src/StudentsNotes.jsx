import { useState } from "react";

function StudentsNotes(){

    const [condicion, setcondicion] = useState(false)

    const [name, setname] = useState('')
    const [nota1, setnota1] = useState('')
    const [nota2, setnota2] = useState('')
    const [nota3, setnota3] = useState('')

    const [students, setstudents] = useState([])

    const onSetName = (event) => {

        setname(event.target.value)

    }

    const onSetNota1 = (event) => {

        setnota1(event.target.value)

    }

    const onSetNota2 = (event) => {

        setnota2(event.target.value)

    }
    const onSetNota3 = (event) => {

        setnota3(event.target.value)

    }

    const procesar = () =>{

        let nota1h = parseFloat(nota1)
        let nota2h = parseFloat(nota2)
        let nota3h = parseFloat(nota3)
        
        let nameh = name

        let promedio = (nota1h+nota2h+nota3h) / 3

        let statush = ''

        

        if (promedio >= 3){

            statush = 'aprobado'

        }
        else{

            statush = 'reprobado'



        }

        let studenth = {name:nameh, nota1:nota1h, nota2:nota2h, nota3:nota3h, status:statush}

       

        

        setstudents([ ... students, studenth])        
    }

    

    const mostrarLista = () =>{


        setcondicion(true)  
    }

    






return(
    <>

    <h1>
        12 : StudentNotes
    </h1>

    <input type="text" placeholder="nombre" value={name} onChange={(event) => onSetName(event)} />
    <input type="number" placeholder="nota 1" min="0" max="5" step="0.1" value={nota1} onChange={(event) => onSetNota1(event)} />
    <input type="number" placeholder="nota 1" min="0" max="5" step="0.1"  value={nota2} onChange={(event) => onSetNota2(event)} />
    <input type="number" placeholder="nota 1" min="0" max="5" step="0.1"  value={nota3} onChange={(event) => onSetNota3(event)} />

    <button onClick={() => procesar()}> add student</button>
    <button onClick={() => mostrarLista()}> mostrar resultado </button>

    {condicion &&

    <ol>

        

        {
            students.map((student, key) => {

                return <li key={key}> {student.name}: {student.status} </li>
            })
        }

        


    </ol>

}

    </>

)


}

export default StudentsNotes