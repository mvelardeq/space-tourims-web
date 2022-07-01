import { BackgroundImagePage } from "../components/BackgroundImagePage"
import { TechnologySection } from "../components/TechnologySection"

export const TechnologyPage = () => {
  return (
    <>
        <BackgroundImagePage
          imgMobile="./assets/technology/background-technology-mobile.jpg"
          imgTablet="./assets/technology/background-technology-tablet.jpg"
          imgDesktop="./assets/technology/background-technology-desktop.jpg"
        />
        <main>
          <p className="titleAction"><span>03</span>Space Launch 101</p>
          <div className="containterTech">
            <TechnologySection />
          </div>
        </main>
    </>
  )
}
