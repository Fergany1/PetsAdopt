import { useEffect, useState } from "react";
import Pets from "./Pets";

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

export default function SearchPets(){
    const [ location , setLocation ] = useState('');
    const [ animal , setAnimal ] = useState('');
    const [ breed , setBreed ] = useState('');
    const [ pets , setPets ] = useState([]);

    const fetchedPets = async () => {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json();
        console.log(json)
    };
    
    useEffect(() => {
        fetchedPets()
    } , [])

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    };

    const handleAnimalChange = (e) => {
        setAnimal(e.target.value)
        setBreed('')
    };

    const handleBreedChange = (e) => {
        setBreed(e.target.value)
    }
    return(
        <div>
            <form action="">

                <label htmlFor="location">
                    <input 
                    id="location"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Location" />
                </label>

                <label htmlFor="animal">
                    <select 
                    id="animal"
                    value={animal}
                    onChange={handleAnimalChange}
                    placeholder="Animal" />
                    <option />
                    {ANIMALS.map((animal) => (
                        <option value={animal} key={animal}>{animal}</option>
                    ))}
                </label>

                <label htmlFor="breed">
                    <select 
                    id="breed"
                    value={breed}
                    onChange={handleBreedChange}
                    placeholder="breed" />
                    <option />
                    {breed.map((b) => (
                        <option value={b} key={b}>{b}</option>
                    ))}
                </label>
                <button>Submit</button>
            </form>

            <div>
                {!pets.length ? (
                    <h1>No Pets Found</h1>
                ) :(
                    <Pets 
                    key={pets.id}
                    animal={pets.animal} 
                    location={pets.location} 
                    breed={pets.location}/>
                )}
            </div>
        </div>
    )
}