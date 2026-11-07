export type Coin = {
    id: string;
    name : string;
    current_price : number;
    per_page : number,
    sparkline : Record<string , string | number | boolean  >
}

export type CoinbyId = {
    id : string ,
    name : string,
    symbol : string ,
    description : string,
    image : { large : string , small : string , thumb : string},
    links : {
        homapage : [],
    }
    market_cap_rank : number ,
}
