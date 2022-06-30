import { useState } from "react"
import { useGetDataPage } from "../hooks/useGetDataPage"

export const DestinationSection = () => {

  const {destinations} = useGetDataPage()

  const [activeDestination, setActiveDestination] = useState('Moon')

  const onChangeDestination =({target})=>{
    setActiveDestination(target.textContent)
  }
  
  const destination = destinations.filter(el=>(el.name === activeDestination))

  return (
    <>
        {
            destination.map(el=>(
                <picture key={el.name} className="imageDestinations">
                    <source srcSet={el.images.png} />
                    <img src={el.images.webp} alt="" />
                </picture>
            ))
        }

        <div className="containerInfoDestination">

            <div className="listDestination">
                {
                    destinations.map(el=> (
                    <span 
                        key={el.name}
                        onClick={onChangeDestination}
                        className={el.name===activeDestination ? "active" : ""}
                    >
                        {el.name}
                    </span>
                    ))
                }
            </div>

            {
                destination.map(el=>(
                    <div className="infoDestination" key={el.name}>
                        <h1 className="title">{el.name}</h1>
                        <p className="paragraphDestination">
                        {el.description}
                        </p>
                        <div className="line"></div>
                        <div className="extraInfo">
                            <div className="info">
                            <p className="title">AVG. DISTANCE</p>
                            <p className="number">{el.distance}</p>
                            </div>
                            <div className="info">
                            <p className="title">EST. TRAVEL TIME</p>
                            <p className="number">{el.travel}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
        
        
        
    </>
  )
}
