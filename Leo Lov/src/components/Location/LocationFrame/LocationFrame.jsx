import style from "./LocationFrame.module.scss";

export const LocationFrame = ({imageSrc}) => {
    return (
        <>
            <img className={style.locationStyling} src={imageSrc} alt="Our Location"/>
        </>
    )
}