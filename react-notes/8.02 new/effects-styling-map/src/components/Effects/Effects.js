import React, {useState, useEffect} from 'react';

const Effects = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => console.log(Date.now()), 2000)

    return () => clearInterval(interval);
  })

  return(
    <div>
      <p>{clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
    </div>
  )
}

export default Effects;

//break from the norm
function effect(){
  console.log('this is the effect code we care about');

  return () => console.log('this is the cleanup of the last effect');
}

let func = effect();
func();
effect();

