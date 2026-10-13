import { useState } from "react"

export default function Run (){
    const [runs, setRuns] = useState(0);

    return(
        <div>
        <h1>Score:{runs}</h1>
        <button onClick={() => setRuns(runs + 1)}>singles</button>
        <button onClick={()=> setRuns(runs + 4)}>Four</button>

        <button onClick={()=> setRuns(runs + 6)}>Six</button>
        </div>
    )
}