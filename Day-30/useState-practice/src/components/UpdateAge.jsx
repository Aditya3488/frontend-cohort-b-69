import {useState} from "react";
function UpdateAge(){
    let [age, setAge] = useState(24)
    return(
        <div className="w-[400px] mt-10 mx-auto " >
            <h1 className="text-2xl font-bold ">Simple React Age update App</h1>
            <h2 className="text-2xl mt-2 ">My age is {age}</h2>
            <button onClick={()=>setAge(25)} className="bg-orange-500 text-xl text-white px-5 py-3 rounded-md mt-5">Update</button>
        </div>
    )
}

export default UpdateAge;