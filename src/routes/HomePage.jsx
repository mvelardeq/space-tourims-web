import { Link } from "react-router-dom"
import { BackgroundImagePage } from "../components/BackgroundImagePage"

export const HomePage = () => {
  return (
    <>
        <BackgroundImagePage
          imgMobile="./assets/home/background-home-mobile.jpg"
          imgTablet="./assets/home/background-home-tablet.jpg"
          imgDesktop="./assets/home/background-home-desktop.jpg"
        />
        <main className="homeMain">
          <div className="home-description">
            <p className="title-introduction">So, you want to travel to</p>
            <h1 className="title-home">Space</h1>
            <p className="paragraph-home">
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <Link to="/destination" className="explore-link" >Explore</Link>
        </main>
    </>
  )
}
