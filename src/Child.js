const Child = ({count, state, arrayState, toggleFunction, toggle}) => {
  // debugger
  return ( 
    <>
    Child Component ... count is {count}, state is {state.name}, and array is {arrayState}
    <div className="border">
      <div className="title">Color Change in Child</div>
      <div className={toggle ? "orange": "green"}>What color am I?</div>
      <button onClick={toggleFunction}>Change Color</button>
    </div>
    </>
   );
}
 
export default Child;