import { useState } from "react"

function CounterApp(){
    let [count,setCount] = useState(0)

    function IncrementHandler(){
        setCount((prev)=>prev + 1)
    }
    function DecrementHandler(){
        setCount((prev)=>{
            if(prev === 0){
                return 0
            }else{
                return prev - 1
            }
        })
    }
    return(
        <div className="w-[400px] mt-10 mx-auto text-center">
            <h1 className="text-2xl font-bold mt-10">Simple React Counter App</h1>
            <h1 className="text-4xl font-bold mt-10">{count}</h1>
            <div className="flex justify-around gap-3 mt-10">
                <button onClick={IncrementHandler} className="px-4 py-3 rounded-lg bg-green-400 text-white hover:cursor-pointer hover:bg-green-500">Increment</button>
                <button onClick={DecrementHandler} className="px-4 py-3 rounded-lg bg-red-400 text-white hover:cursor-pointer hover:bg-red-500">Decremnet</button>
            </div>
        </div>
    )
}
 export default CounterApp