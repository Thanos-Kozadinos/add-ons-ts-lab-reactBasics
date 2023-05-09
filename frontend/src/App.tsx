import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IRandomUser, getRandomUser } from './api/api'

function App() {
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
 
      </div>
    </>
  )
}

export default App
