# React-configurando-e-estruturando-o-projeto-com-vite
 Project derived from the course "React: configurando e estruturando o projeto com Vite" from Alura

## First commands
1. Run: npm npm create vite@latest -- --template react
2. cd react
3. npm install
    - Chose: React and JavaScript.
4. npm run dev
Learn more at: https://vitejs.dev/guide/

## Folders
1. Create the folder 'components' inside react's folder;
2. Create the folder of your components, in this project, the first one was 'Sidebard';
3. Create the 'index.jsx' file inside react's folder.

git commit -m "Base do Projeto concluida"

## Sidebar components
1. Create the Sidebar function component and export it inside in react/src/components/index.jsx;
```
export default function Sidebar() {
    return(
        
    )
}
```
2. Go to the figma prototype and export the images and icons(svg);
3. Create the folder 'assets' in react/src/components/Sidebar/;
4. Store the images and icons in react/src/components/Sidebar/assets;
5. Import the Logo and create the img tag within the aside one:
```
import Logo from './assets/profile.svg';

export default function Sidebar() {
    return(
        <aside>
            <img src={Logo} alt="CodeConnect's logo" />
        </aside>
    )
}
```
6. Create a 'nav' tag inside 'aside' tag, then create a list that will contain an 'a' tag:
```
<aside>
    <img src={Logo} alt="CodeConnect's logo" />
    <nav>
        <ul>
            <li>
                <a href='#'>Publish</a>
            </li>
        </ul>
    </nav>
</aside>
```

7. Create another 'li' tag; and continue doing the rest of the html structure accordingly to the prototype in Figma.
```
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
```