// import { useState } from "react"

// export default function Batsman(){

//     const [runs, setRuns] = useState(0);
//     const handleSingle= () =>{
//          const UpdateRuns = runs + 1;
//          setRuns(UpdateRuns);
//     }

//     const handlefour = () =>  {
//         const updateFour = runs + 4;
//         setRuns(updateFour);
//     }
//     const handleSix = () => {
//         const updateSix = runs +6;
//         setRuns(updateSix);
//     }
//     return(
//         <div>
//             <h3> Player: Bangla Batsman</h3>
//             <h1>Score: {runs}</h1>
//             <button onClick={handleSingle}>singles</button>
//             <button onClick={handlefour}>Four</button>
//             <button onClick={handleSix}>Six</button>
//         </div>
//     )
// }