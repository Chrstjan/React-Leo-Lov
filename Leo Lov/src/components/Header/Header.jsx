import { Navbar } from "../Navbar/Navbar"

import style from "./Header.module.scss"

export const Header = ({}) => {
    return (
        <>
            <header className={style.headerStyling}>
                <Navbar />
                    <hgroup className={style.headersStyling}>
                    <h2>Leo</h2>
                    <span>-</span>
                    <h2>Lov</h2>
                </hgroup>
            </header>
        </>
    )
}