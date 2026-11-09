import { useEffect, useState } from "react"
import type { Coin } from "../../types"
import { Link } from "react-router"


export function Coins() {
      const [coins , setCoins] = useState<Coin[]>([])
      const [loading , setLoading] = useState(false)
      const [error , setError] = useState("")
      
      useEffect(() => {
        fetch("http://localhost:4000/coins")
          .then((res) => res.json())
          .then((data) => setCoins(data))
          .catch((err) => err.message)
      } , [])
    
    
      return (
    
        <div>
          {coins.map((c) => (
            <Link key = {c.id} to={`/coins/${c.id}`} className="flex items center justify-center" >
              <div onClick={() => {}} className="my-1 p-2 w-[50%] h-15 flex justify-between items-center hover:cursor-pointer border-1 border-black rounded hover:bg-[#F3E8FF] transition-all ease-in-out " >
                
                <div>
                  {c.name}
                </div>
                <div>
                  {c.current_price}
                </div>
    
              </div>
            </Link>
          ))}
        </div>
      );
    }
