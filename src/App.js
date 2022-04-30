import './App.css';
import {useState} from 'react'
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
  
  const toggleFunction = () =>{
    setToggle(!toggle)
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
