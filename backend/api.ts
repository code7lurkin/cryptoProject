import qs from 'query-string';


export default async function fetcher<T>(

    endpoint : string,
    params? : Record< string , string | number >

): Promise<T> {

    const BASE_URL = "https://api.coingecko.com/api/v3"

    try{

        if(!process.env.API_KEY) throw new Error("failed to fetch Api-key")
        
        const url  = qs.stringifyUrl({
                url : `${BASE_URL}/${endpoint}`,
                query : params 
            })
        
        const res = await fetch( url , {
            headers : {
                    "x-cg-demo-api-key" : process.env.API_KEY
                }
            }

        ) 
            
        
        if (!res.ok) { 
            throw new Error(`failed : (${res.status}) ${res.statusText}`)
        }

        const data = (await res.json()) as T

        return data;

    }catch (err) {
        console.log(err)
        throw err;
    }

}
