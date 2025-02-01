import {useState} from 'react'
function AlertApp(){

    let [alert , setAlert] = useState(false)

    function AlertStatus(){
        setAlert((prev)=>!prev)   
    }

    return(
        <div className="w-[400px] mt-10 mx-auto text-center">
            {
                alert ? <div className="bg-neutral-100 py-3 px-8 border absolute top-10 right-10 border-neutral-400">This is an alert</div> : ""
            }
            
            <h1 className="text-2xl font-bold">Simple React Alert App</h1>
                <button onClick={AlertStatus} className="px-4 py-3 rounded-lg bg-green-400 text-white hover:cursor-pointer hover:bg-green-500 mt-10">{alert ? "Hide" : "Show"} Alert</button>
         </div>
    )
}

export default AlertApp