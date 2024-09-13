import Logo from './assets/logo.svg';
import Feed from './assets/feed.svg';
import Profile from './assets/account_circle.svg';
import AboutUs from './assets/info.svg';
import Exit from './assets/logout.svg';
import './style.css';

export default function Sidebar() {
    return(
        <aside>
            <img src={Logo} alt="CodeConnect's logo" />
            <nav>
                <ul className="sidebar-list">
                    <li>
                        <a href='#' className="item__link-publish">Publish</a>
                    </li>
                    <li>
                        <a href="#" className="item__link item__link--active">
                            <img src={Feed} alt="icon" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="item__link">
                            <img src={Profile} alt="icon" />
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="item__link">
                            <img src={AboutUs} alt="icon" />
                            <span>About us</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="item__link">
                            <img src={Exit} alt="icon" />
                            <span>Exit</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}