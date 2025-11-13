
import React, { useEffect, useState } from "react";

const App = () => {
      const [count1, setCount1] = useState(0);
      const [count2, setCount2] = useState(0);
      const [count3, setCount3] = useState(0);

      const [leader, setleader] = useState('');

      useEffect(
        () => {
          if (count1 > count2 && count1 > count3) {
            setleader('Candidate 1');
          } else if (count2 > count1 && count2 > count3) {
            setleader('Candidate 2');
          } else if (count3 > count1 && count3 > count2) {
            setleader('Candidate 3');
          }
          else {
            setleader('No one, it is a tie');
          }

        }, [count1, count2, count3]//run after evry vote change
      )

      

      

  return (
    <>
      <h1>Voting App!</h1>
     
      <h3>C1:{count1}</h3>
      <h3>C2:{count2}</h3>
      <h3>C3:{count3}</h3>
     <button onClick={ () => setCount1(count1 + 1)}>Vote for Candidate 1</button>
     <br></br> <br></br>
      <button onClick={ () => setCount2(count2 + 1)}>Vote for Candidate 2</button>
      <br></br> <br></br>
      <button onClick={ () => setCount3(count3 + 1)}>Vote for Candidate 3</button>
      <br></br> <br></br>
      <h2>🏆 Current Leader : {leader}</h2>
      
    </>
  );
}

export default App
