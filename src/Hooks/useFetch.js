import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data,setData] = useState(null)
    // to fetch data from an api
    useEffect(()=>{
        // make call
        fetch(url).then((res)=>{
            res.json().then(data=>setData(data.products))
        })
    },[url])
    return data
}

export default useFetch;