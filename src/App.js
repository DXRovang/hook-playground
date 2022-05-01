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
  const [toggleSize, setToggleSize] = useState(true)
  const [count, setCount] = useState(0)
  const [state, setState] = useState({name: ""})
  const [arrayState, setArrayState] = useState(namesArray)
  const [numState, setNumState] = useState(numbersArray)

  const handleChange = (e) =>{
    setState({...state, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  const handleArrayChange = e =>{
    // debugger
    setArrayState(()=>[...arrayState, e.target.value])
  }

  const handleArraySubmit = (e) =>{
    e.preventDefault()
  }

  const toggleFunction = () =>{
    setToggle(!toggle)
  }
  const toggleSizeFunction = () =>{
    setToggleSize(!toggleSize)
  }
  const increment = ()=>{
    setCount(count=>count + 1)
  }
  const decrement = ()=>{
    setCount(count=>count - 1)
  }

  const ArrayFilter = () =>{
    setArrayState(arrayState.filter(name=>name.includes("e")).map(n=><div>{n}</div>))
  }

  const add = () =>{
    setArrayState([...arrayState, "Ariel"])
  }
  const subtract = () =>{
    // console.log("subtract")
    setArrayState((namesArray) =>namesArray.filter((_,index)=>index !== (namesArray.length - 1)))
  }

  const sortNumbers = ()=>{
    setNumState(numbersArray.sort((a,b)=> a - b ).map(n=><div>{n}</div>)) 
  }
  const sortWords = ()=>{
    setArrayState(namesArray.sort().map(n=><div>{n}</div>))  }

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
      <div className="title">Font Change</div>
      <div className={toggleSize ? "large": "small"}>How big am I?</div>
      <button onClick={toggleSizeFunction}>Change Font Size</button>
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

      <div>{arrayState.map(n=><div>{n}</div>)}</div>
      <button onClick={ArrayFilter}>Filter</button>
    </div>

    <div className="border">
      <div className="title">Add/Delete</div>
      <div>{arrayState.map(n=><div>{n}</div>)}</div>
      <button onClick={add}>+</button><button onClick={subtract}>-</button>
    </div>

    <div className="border">
      <div className="title">Number Sort</div>
      <div>{numState.sort().map(n=><div>{n}</div>)}</div>
      <button onClick={sortNumbers}>Sort</button>
    </div>

    <div className="border">
      <div className="title">Word Sort</div>
      <div>{arrayState.map(n=><div>{n}</div>)}</div>
      <button onClick={sortWords}>Sort</button>
    </div>
    </>

  )
}

export default App;
