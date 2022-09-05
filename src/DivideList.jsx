import { useState } from "react"


function DivideList(){


    let firstlist = []

    for (let i = 0; i < 10 ; i++ ) {

        firstlist = [ ... firstlist, (Math.ceil(100*Math.random())) ]


    }

    const [list, setlist] = useState([])
    
    const [divider, setdivider] = useState('')

    const [ramdomlist, setramdomlist] = useState(firstlist)

    

    const onSetDivider = (event) => {

        setdivider(event.target.value)

    }

    const resetRamdomList = () => {

        setramdomlist([])

        let list = []

        for (let i = 0; i < 10 ; i++ ) {

            list = [ ... list, Math.ceil(Math.random()*100) ]


        }
        setramdomlist(list)
    }

    const divide = () => {

        let list = []
        
        for (let i = 0; i < ramdomlist.length; i++){

            list = [ ... list, ramdomlist[i]/divider]

        }

        setlist(list)

    }

    



    return(

        <>

        <h1>8 : DivideRamdomList</h1>

        <ol>

            {

                ramdomlist.map((number, key) => {

                    return ( 
                        
                        <li key={key}> { number } </li> )
                })

            }

        </ol>

        <button onClick={() => resetRamdomList() }> reset </button>

        <input type="number" min="1" value={divider} onChange={(event) => onSetDivider(event)} />

        <button onClick={() => divide() }> divide </button>

        


        <ol>

            {

            list.map((number, key) => {

                return ( 
                    
                    <li key={key}> { number } </li> )
            })

        }

        </ol>
        
        </>

    )
}

export default DivideList