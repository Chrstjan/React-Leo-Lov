import style from "./Navbar.module.scss"

export const Navbar = ({}) => {
    return (
        <>
            <nav>
                <ul className={style.navbarStyling}>
                    <li>Hjem</li>
                    <li>Advokaterne</li>
                    <li>Om LeoLov</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </>
    )
}