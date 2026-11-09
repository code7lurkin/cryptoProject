export type Coin = {
    id: string;
    name : string;
    current_price : number;
}


export type CoinById = {
    id : string ,
    name : string,
    symbol : string ,
    description : { en : string},
    image : { large : string , small : string , thumb : string},
    links : {
        homapage : [],
    }
    market_cap_rank : number ,
}