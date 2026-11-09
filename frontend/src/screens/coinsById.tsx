import { useEffect, useState } from "react"
import type { CoinById } from "../../types"
import { useParams } from "react-router"

export function CoinsById() {
    
    const { id } = useParams<{ id: string }>()
    const [coin , setCoin] = useState<CoinById | null>(null)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    useEffect(() => {
        fetch(`http://localhost:4000/coins/${id}`)
            .then((res) => res.json())
            .then((data) => setCoin(data))
            .catch((err) => setError(err.message))
    } , [])

    return (
        <div>
            {coin ? (
            <>
                    <div>{coin.name}</div>
                    <div>{coin.description.en}</div>
                    <div>{coin.image.large}</div>
                    <div>{coin.market_cap_rank}</div>
            </>   
            ) : (
                <div>Loading...</div>
            )}   
        </div> 
    )
}