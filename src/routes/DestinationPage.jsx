// import { useEffect, useState } from "react"
import { BackgroundImagePage } from "../components/BackgroundImagePage"
import { DestinationSection } from "../components/DestinationSection"
// import { useGetDataPage} from "../hooks/useGetDataPage"

const DestinationPage = () => {

  return (
    <>
        <BackgroundImagePage
          imgMobile="./assets/destination/background-destination-mobile.jpg"
          imgTablet="./assets/destination/background-destination-tablet.jpg"
          imgDesktop="./assets/destination/background-destination-desktop.jpg"
        />
        <main>
            <p className="titleAction"><span>01</span> Pick your destination</p>
          <div className="containerContentDestination">
            <DestinationSection />
          </div>
        </main>
    </>
  )
}

export default DestinationPage