import { BackgroundImagePage } from "../components/BackgroundImagePage"
import { CrewSection } from "../components/CrewSection"

export const CrewPage = () => {
  return (
    <>
        <BackgroundImagePage
          imgMobile="./assets/crew/background-crew-mobile.jpg"
          imgTablet="./assets/crew/background-crew-tablet.jpg"
          imgDesktop="./assets/crew/background-crew-desktop.jpg"
        />
        <main className="crewMain">
          <p className="titleAction"><span>02</span> Meet your crew</p>
          <div className="containerCrewContent">
            <CrewSection />
          </div>
        </main>
    </>
  )
}
