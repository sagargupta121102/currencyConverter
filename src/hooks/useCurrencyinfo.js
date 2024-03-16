import { useEffect,useState } from "react";
const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

function useCurrencyInfo(curr){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    return data
}
export default useCurrencyInfo;
 