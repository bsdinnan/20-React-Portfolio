import Nav from "../navigation/Nav"
import './header.css'
export default function Header() {
    return (
        <header className="d-flex flex-column align-items-around justify-content-around">
            <h1 className="d-flex m-4">
                Bradley Dinnan
            </h1>
            <nav className="d-flex">
                <Nav />
            </nav>
        </header>
    )
}