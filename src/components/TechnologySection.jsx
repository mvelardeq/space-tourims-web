import { useState } from "react"
import { useGetDataPage } from "../hooks/useGetDataPage"

export const TechnologySection = () => {

    const {technology} = useGetDataPage()

  const [activeTechnology, setActiveTechnology] = useState('Launch vehicle')

  const onChangeTechnology =({target})=>{
    setActiveTechnology(target.dataset.name)
  }
  
  const technologyItem = technology.filter(el=>(el.name === activeTechnology))

  return (
    <>
        {
            technologyItem.map((el)=>(
                <div key={el.name}>
                    <picture className="imageTech">
                        {/* <source srcSet={el.images.portrait} /> */}
                        <img src={el.images.landscape} alt="" />
                    </picture>
                </div>
            ))
        }
        <div className="bellowTechSection">
            <div className="listTech">
                {
                    technology.map((el,index)=> (
                    <span 
                        key={el.name}
                        data-name={el.name}
                        onClick={onChangeTechnology}
                        className={el.name===activeTechnology ? "active" : ""}
                    >
                        {index+1}
                    </span>
                    ))
                }
            </div>

            {
                technologyItem.map(el=>(
                    <div className="infoTech" key={el.name}>
                        <p className="previewTitle">The terminology...</p>
                        <h1 className="titleTech">{el.name}</h1>
                        <p className="descriptionTech">
                            {el.description}
                        </p>
                    </div>
                ))
            }
        </div>
        
        
        
    </>
  )
}
