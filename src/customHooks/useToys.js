import { useEffect, useState } from "react"

const useToys = () => {
    const [toys,setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[])
    return toys;
}

export default useToys;