import './App.css'


export default function Singer({singer}){
    return(
        <div className='singer'>
            <h1>Name: {singer.name}</h1>
            <h2>Age: {singer.age}</h2>
        </div>
    )
}