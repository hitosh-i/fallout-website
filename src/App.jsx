import { useState } from "react"
import Background from "./Components/Background/Background";

export const App = () => {
  let heroData = [
    {text1:"Enter The", text2:"Mojave"},
    {text2:"Build your", text2:"Courier"},
    {text3:"Can you survive", text2:"The Wasteland?"}
  ]
  const[heroCount,setHeroCount] = useState(2);
  const[playStatus,setPlayStatus]=useState(false);
  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}
