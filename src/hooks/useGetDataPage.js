import { useEffect, useState } from "react"

export const useGetDataPage = () => {

    const [destinations, setDestinations] = useState([])
    const [crew, setCrew] = useState([])
    const [technology, setTechnology] = useState([])

    const getData=async()=>{

        const res = await fetch('./data.json')
        const {destinations,crew,technology} = await res.json()
        // const {destinations,crew,technology} = await data

        // console.log(data)
        setDestinations(destinations)
        setCrew(crew)
        setTechnology(technology)
    }
    useEffect(()=>{
        getData()
    },[])

    // const {destinations,crew,technology} = data

    return {
        destinations,
        crew,
        technology
    }

}
