import style from "./HeroHeader.module.scss"

export const HeroHeader = () => {
    return (
        <>
            <header className={style.headerStyling}>
                <hgroup className={style.heroHeader}>
                    <h2>Leo</h2>
                    <span>-</span>
                    <h2>Lov</h2>
                </hgroup>
                <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
            </header>
        </>
    )
}