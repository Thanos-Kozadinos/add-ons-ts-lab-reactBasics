import { FC, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import '../App.css'
import { IRandomUser, getRandomUser } from '../api/api'

const RandomUser:FC = () => {
    const [count, setCount] = useState(0)
    const [randUser, setRandUser] = useState<IRandomUser>();
  
    const getData = async () => {
      const randomUserFromApi = await getRandomUser();
      setRandUser(randomUserFromApi);
  
    }
    useEffect(() => {
      getData();
    }, []);
  
    console.log(randUser?.results[0].name.last);
    return (
      <>
        <div>
        </div>
        <h1>Vite + React</h1>
        <h1></h1>
        <div className="card">
          
        <div>
          {randUser?.results[0].name.title} {randUser?.results[0].name.first} {randUser?.results[0].name.last}
        </div>
        
        <div>
          Age {randUser?.results[0].dob.age}
        </div>
        <div>Address:</div>
        <div>
          {randUser?.results[0].location.street.name} {randUser?.results[0].location.street.number}
        </div>
        <div>
          {randUser?.results[0].location.city} {randUser?.results[0].location.state} {randUser?.results[0].location.country}
        </div>
          <div>Postcode {randUser?.results[0].location.postcode}</div>
        </div>
  
      </>
    )
  }
  
  export default RandomUser
  