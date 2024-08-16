import style from "./Footer.module.scss"

export const Footer = ({}) => {
    return (
        <>
            <footer className={style.footerStyling}>
                <span>
                    <header><h3>Adresse</h3></header>
                </span>
                <span>
                    <header><h3>Kontakt</h3></header>
                </span>
                <span>
                    <header><h3>Politik</h3></header>
                </span>
                <span>
                    <header><h3>Sociale medier</h3></header>
                </span>
            </footer>
        </>
    )
}