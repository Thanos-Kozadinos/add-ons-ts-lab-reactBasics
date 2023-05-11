import { FC, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import '../App.css'
import { IName, IRandomUser, getRandomUser } from '../api/api'

const RandomUser:FC = () => {
    const [randUser, setRandUser] = useState<IRandomUser>();
    const [randUserFirstName, setRandUserFirstName] = useState<string>();

    const getData = async () => {
      const randomUserFromApi = await getRandomUser();
      setRandUser(randomUserFromApi);
      setRandUserFirstName(randomUserFromApi?.results[0].name.first);
    }

    useEffect(() => {
      getData();
    },[]);
  

    return (
      <>
        <h1>Salt PGP Lab 1</h1>
        <form className='add-dev-form' >
            <input className='AddUserForm-name' onChange={(e) => {
                setRandUserFirstName(e.target.value);
            }} placeholder='Enter user first name' type="text" />
            {/* <button className='AddUserForm-buton'>Add</button> */}
        </form>
        <div className="card"> 
            <p>
                {randUser?.results[0].name.title}  {randUserFirstName} {randUser?.results[0].name.last}
            </p>
            <p>
                Age {randUser?.results[0].dob.age}
            </p>

            <p>
                Address: {randUser?.results[0].location.street.name} {randUser?.results[0].location.street.number}
            </p>
            <p>
                {randUser?.results[0].location.city} {randUser?.results[0].location.state} {randUser?.results[0].location.country}
            </p>
            <p>
                Postcode {randUser?.results[0].location.postcode}
            </p>
        </div>
  
      </>
    )
  }
  
  export default RandomUser
  