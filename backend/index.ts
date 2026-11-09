import express from 'express'
import fetcher from './api'
import cors from 'cors'
import type { Coin, CoinById } from './types'


const app = express()

app.use(cors({origin : process.env.FRONTEND_URL}))

app.get("/coins" , async (req, res) => {

    const raw = await fetcher<Coin[]>("coins/markets" , {
        vs_currency : "usd",
        per_page : 20,
        
    })

    if (!raw) {
        throw new Error(`Failed to fetch : (${res.status}) ${res.statusMessage}`)
    }

    return res.json(raw)
})


app.get("/coins/:id", async (req, res) => {
  const id = req.params.id

  try {
    const raw = await fetcher<CoinById>(`coins/${encodeURIComponent(id)}`, {
      localization: "false",
      tickers: "false",
      community_data: "false",
      developer_data: "false",
      sparkline: "false",
    })
        
    return res.json(raw)
    
  } catch (err) {
    console.error(err)
    return res.status(502).json({ error: "Failed to fetch coin details" })
  }
})

app.listen(4000);