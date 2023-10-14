import { useEffect, useState } from "react"

const useToys = () => {
    const [toys,setToys] = useState([]);
    useEffect(() => {
        fetch('https://toyverse-server-nine.vercel.app/toys')
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[])
    return toys;
}

export default useToys;