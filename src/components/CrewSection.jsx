import { useState } from "react"
import { useGetDataPage } from "../hooks/useGetDataPage"

export const CrewSection = () => {

    const {crew} = useGetDataPage()

  const [activeCrew, setActiveCrew] = useState('Douglas Hurley')

  const onChangeDestination =({target})=>{
    setActiveCrew(target.dataset.name)
  }
  
  const staff = crew.filter(el=>(el.name === activeCrew))

  return (
    <>
        {
            staff.map(el=>(
                <div className="containerImageCrew" key={el.name}>
                    <picture className="imageCrew">
                        <source srcSet={el.images.png} />
                        <img src={el.images.webp} alt="" />
                    </picture>
                    <div className="lineImageCrew"></div>
                </div>
            ))
        }
        <div className="bellowCrewSection">
            <div className="listCrew">
                {
                    crew.map(el=> (
                    <span 
                        key={el.name}
                        data-name={el.name}
                        onClick={onChangeDestination}
                        className={el.name===activeCrew ? "active" : ""}
                    >
                    </span>
                    ))
                }
            </div>

            {
                staff.map(el=>(
                    <div className="infoCrew" key={el.name}>
                        <p className="rolCrew">
                        {el.role}
                        </p>
                        <h1 className="titleNameCrew">{el.name}</h1>
                        <p className="bioCrew">
                            {el.bio}
                        </p>
                    </div>
                ))
            }
        </div>
        
        
        
    </>
  )
}
