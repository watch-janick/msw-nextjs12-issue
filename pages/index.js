import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(data => console.log(data))
  })
  
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
