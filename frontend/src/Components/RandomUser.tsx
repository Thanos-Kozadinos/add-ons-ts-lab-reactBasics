import { FC, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import '../App.css'
import { IName, IRandomUser, getRandomUser } from '../api/api'

const RandomUser:FC = () => {
    const [randUser, setRandUser] = useState<IRandomUser>();
    const [randUserName, setRandUserName] = useState<string>();

    const getData = async () => {
      const randomUserFromApi = await getRandomUser();
      setRandUser(randomUserFromApi);
      setRandUserName(randUser?.results[0].name.first);
    }

    useEffect(() => {
      getData();
      setRandUserName(randUser?.results[0].name.first);
    },[]);
  
    console.log(randUserName);
    return (
      <>
        <h1>Salt PGP Lab 1</h1>
        <form className='add-dev-form' >
            <input className='AddUserForm-name' onChange={(e) => {
                setRandUserName(e.target.value);
            }} placeholder='Enter user name' type="text" />
            {/* <button className='AddUserForm-buton'>Add</button> */}
        </form>
        <div className="card"> 
        <p>is there {randUserName}</p>    
            <p>
                {randUser?.results[0].name.title} {randUser?.results[0].name.first} {randUserName} {randUser?.results[0].name.last}
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
  