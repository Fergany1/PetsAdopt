export default function Pets(props){
    return(
        <div>
            <h1>{props.location}</h1>
            <h1>{props.animal}</h1>
            <h1>{props.breed}</h1>
        </div>
    )
}