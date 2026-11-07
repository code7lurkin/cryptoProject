import express from 'express'
import fetcher from './api'
import cors from 'cors'
import type { Coin, CoinbyId } from './types'


const app = express()

app.use(cors({origin : process.env.FRONTEND_URL}))

app.get("/coins" , async (req, res) => {

    const raw = await fetcher<Coin[]>("coins/markets" , {
        vs_currency : "usd",
        per_page : 20,
        
    })

    if (res.status(500)) throw new Error("server down")
    if (res.status(429)) throw new Error("You have hit your request limit , please wait a moment beofre sending the next request")
    if (res.status(422)) throw new Error("A required param is missing or invalid")
    if (res.status(400)) throw new Error("Invalid request")
    

    if (!raw) {
        throw new Error(`Failed to fetch : (${res.status}) ${res.statusMessage}`)
    }

    return res.json(raw)
})


app.get("coins/:coinsId" , async (req ,res) => {

    const id = req.params.coinsId

    const raw = await fetcher<CoinbyId>("coins/:coinId" , {

        localization: "false",
        tickers: "false",
        community_data: "false",
        developer_data: "false",
        sparkline: "true",
    })

    return res.json(raw)

})


app.listen(4000)
