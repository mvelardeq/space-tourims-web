
export const BackgroundImagePage = ({imgMobile,imgTablet,imgDesktop}) => {
  return (
    <>
        <picture className="bg-picture">
          <source media="(min-width:1000px)" srcSet={imgDesktop} />
          <source media="(min-width:400px)" srcSet={imgTablet} />
          <img src={imgMobile} alt="" />
        </picture>
    </>
  )
}
