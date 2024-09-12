import Logo from './assets/logo';
import Feed from './assets/feed.svg';
import Profile from './assets/account_circle.svg';
import AboutUs from './assets/info.svg';
import Exit from './assets/logout.svg';


export default function Sidebar() {
    return(
        <aside>
            <img src={Logo} alt="CodeConnect's logo" />
            <nav>
                <ul>
                    <li>
                        <a href='#'>Publish</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Feed} alt="icon" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Profile} alt="icon" />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={AboutUs} alt="icon" />
                            <span>About us</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Exit} alt="icon" />
                            <span>Exit</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}