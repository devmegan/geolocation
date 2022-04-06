const docsUrl = "https://github.com/streamich/react-use/blob/master/docs/useGeolocation.md";
const ghUrl = "https://devmegan.github.io/geolocation"

export default function Nav() {
    return(
        <nav className="navbar bg-primary">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href={ghUrl}>useGeolocation</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href={docsUrl} target="__blank">Docs</a></li>
                </ul>
            </div>
        </nav>
    )
}