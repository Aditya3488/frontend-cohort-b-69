export default function TouristPlace({placeName, desc, img, whenToVisit, ratings, price}) {
  return (
    <div className=" w-[360px] border rounded-xl border-zinc-300 transition-[.3s] hover:cursor-pointer hover:shadow-lg hover:scale-[1.02]">
      <div className="relative w-full p-2">
        <img
          className="rounded-xl w-full h-[260px] object-cover"
          src={img}
          alt="img"
        />
        {
          whenToVisit ===`Winter` ? <p className="absolute text-white bg-red-400 px-2 py-[2px] rounded-xl top-0 right-0 m-4">
              {whenToVisit}
            </p> : <p className="absolute  bg-yellow-400 px-2 py-[2px] rounded-xl top-0 right-0 m-4">
              {whenToVisit}
            </p>
          
        }
        {
            price>12000 ? <p className="absolute  bg-yellow-400 px-2 py-[2px] rounded-xl bottom-0 right-0 m-4">
            Expensive
          </p> : 
          <p className="absolute   bg-green-400 px-2 py-[2px] rounded-xl bottom-0 right-0 m-4">
            Cheaper
          </p>
        }
        
      </div>
      <div className="flex justify-between px-3 items-center">
        <h1 className="text-3xl font-medium">{placeName}</h1>

        <div className="bg-green-800 text-white justify-center rounded-xl">
          <p className="text-sm px-[8px] py-[2px] ">{ratings}⭐</p>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 mt-2">
        <p className=" text-neutral-400 text-md w-[78%] ">
        {desc}
      </p>  
      <p className="font-semibold">₹{price}</p>
      </div>   
    </div>
  );
}
