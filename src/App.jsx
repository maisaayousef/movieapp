
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [data,setData]=useState({})
  let response=axios
  .get('https://api.themoviedb.org/3/movie/550?api_key=2ee808060e23b727aeb4492951e11394')
  .then(response=>(console.log(`you could ${response.data}`)))
  .catch(err=>{
    console.log(`ERROR! ${err}`)
  })
  

  const mystyle={
    width:'14.75rem',
    
   
    

  }
 

  return (
    <>
    <div className='header'>
      <div className='partone'>
      <a href='#'>movieDb App</a>
      <a href='#'> Trending</a>
      </div>
      <div >
        <input type='text' placeholder='Movie search'/>
        <button className='buttonheader' >search</button>
      </div>
    </div>
    <div className='sec'>
    <div className='container d-flex justify-content-around flex-grow flex-wrap '>
    <div className="card bg-secondary " style={mystyle}  >
      <img src='ret.jpg' className="card-img-top" alt="..."/>
      <h5 className="card-title text-light text-center">Retribution</h5>
      <a href="#" className="btn btn-dark text-light ">View more</a>
    </div>
    <div className="card bg-secondary" style={mystyle}  >
      <img src='muzzle.jpg' className="card-img-top" alt="..."/>
      <h5 className="card-title text-light text-center">Muzzle</h5>
      <a href="#" className="btn btn-dark text-light ">View more</a>
    </div>
    <div className="card bg-secondary " style={mystyle}  >
      <img src='five.jpg' className="card-img-top" alt="..."/>
      <h5 className="card-title text-light text-center">Five Nights at Freddy's</h5>
      <a href="#" className="btn btn-dark text-light ">View more</a>
    </div>
    <div className="card bg-secondary " style={mystyle}  >
      <img src='fast.jpg' className="card-img-top" alt="..."/>
      <h5 className="card-title text-light text-center">Fast X</h5>
      <a href="#" className="btn btn-dark text-light ">View more</a>
    </div>
    <div className="card bg-secondary" style={mystyle}  >
      <img src='exor.jpg' className="card-img-top" alt="..."/>
      <h5 className="card-title text-light text-center">The Exorcist: Believer</h5>
      <a href="#" className="btn btn-dark text-light ">View more</a>
    </div>
    <div className="card bg-secondary " style={mystyle}  >
      <img src='coco.jpg' className="card-img-top" alt="..."/>
      <h5 className="card-title text-light text-center">Coco</h5>
      <a href="#" className="btn btn-dark text-light ">View more</a>
    </div>
   </div>
   </div>

      
    </>
  )
}

export default App
