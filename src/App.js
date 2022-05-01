import './App.css';
import {useState} from 'react'
// import UserForm from './UserForm'
function App() {

  const namesArray = ["John", "Amy", "Ted", "Jane", "Mark", "Sue"]
  const numbersArray = [3, 1, 6, 44, 89, 101, 2, 897]

  const myObject = {
    1: "orange", 
    2: "pear", 
    3: "banana", 
    4: "apple",
    5: "grape"
  }

  const [toggle, setToggle] = useState(true)
  const [count, setCount] = useState(0)
  const [state, setState] = useState({name: ""})
  const [arrayState, setArrayState] = useState(namesArray)

  const handleChange = (e) =>{
    setState({...state, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  const handleArrayChange = e =>{
    // debugger
    setArrayState([...arrayState, e.target.value])
  }

  const handleArraySubmit = (e) =>{
    e.preventDefault()
  }

  const toggleFunction = () =>{
    setToggle(!toggle)
  }
  const increment = ()=>{
    setCount(count=>count + 1)
  }
  const decrement = ()=>{
    setCount(count=>count - 1)
  }

  return (
    <>
    <div className="border">
      <div className="title">My Constants</div>
      <div>Names: {namesArray.map(name=>name + " - ")}</div>
      <div>Numbers: {numbersArray.map(number=> number + " - ")}</div>
      <div>Object: {Object.keys(myObject).map((item, index)=>index + ". " + myObject[item] + " ")}</div>
    </div>

    <div className="border">
      <div className="title">Color Change</div>
      <div className={toggle ? "pink": "blue"}>What color am I?</div>
      <button onClick={toggleFunction}>Change Color</button>
    </div>

    <div className="border">
      <div className="title">Counter</div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </div>


    <div className="border">
      <div className="title">Form with Object</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange}
            type="text"
            name="name"
            placeholder="write"
            value={state.name}
          />
          <button>submit</button>
        </form>
      </div>
      
    </div>

    <div className="border">
      <div className="title">Form with Array</div>
      {/* {arrayState} */}
      <form onSubmit={handleArraySubmit}>
          <input onChange={handleArrayChange}
            type="text"
            name="name"
            placeholder="write"
            value=""
          />
          <button>submit</button>
        </form>
    </div>

    <div className="border">
      <div className="title">Filter/Includes</div>
      <div>{namesArray.filter(name=>name.includes("e")).map(n=><div>{n}</div>)}</div>
      <button>Click</button>
    </div>

    <div className="border">
      <div className="title">Title</div>
      <div>Body</div>
      <button>Click</button>
    </div>

    <div className="border">
      <div className="title">Title</div>
      <div>Body</div>
      <button>Click</button>
    </div>

    <div className="border">
      <div className="title">Title</div>
      <div>Body</div>
      <button>Click</button>
    </div>
    </>

  )
}

export default App;
