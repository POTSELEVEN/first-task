import { useState } from "react";

function StudentNotes(){

    const [message, setmessage] = useState('')

    const [name, setname] = useState('')
    const [nota1, setnota1] = useState('')
    const [nota2, setnota2] = useState('')
    const [nota3, setnota3] = useState('')
    const [status, setstatus] = useState('')

    const [student, setstudent] = useState({ name:'' , nota1: '', nota2:'', nota3:'', status: ''})

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

       

        setstudent(studenth)

        
    }

    

    const mostrarAprobado = () =>{


        setmessage(student.status)
      
    }

    






return(
    <>

    <h1>
        11 : StudentNotes
    </h1>

    <input type="text" placeholder="nombre" value={name} onChange={(event) => onSetName(event)} />
    <input type="number" placeholder="nota 1" min="0" max="5" step="0.1" value={nota1} onChange={(event) => onSetNota1(event)} />
    <input type="number" placeholder="nota 1" min="0" max="5" step="0.1"  value={nota2} onChange={(event) => onSetNota2(event)} />
    <input type="number" placeholder="nota 1" min="0" max="5" step="0.1"  value={nota3} onChange={(event) => onSetNota3(event)} />

    <button onClick={() => procesar()}> procesar notas </button>
    <button onClick={() => mostrarAprobado()}> mostrar resultado </button>



    <h2>{message}</h2>

    </>

)


}

export default StudentNotes