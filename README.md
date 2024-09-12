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
import Logo from './Sidebar/ assets/profile.svg';

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
import Logo from './Sidebar/assets/logo.svg';
import Feed from './Sidebar/assets/feed.svg';
import Profile from './Sidebar/assets/account_circle.svg';
import AboutUs from './Sidebar/assets/info.svg';
import Exit from './Sidebar/assets/logout.svg';


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
                            <img src={Feed} alt="icon"/>
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Profile} alt="icon"/>
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={AboutUs} alt="icon"/>
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

git commit -m "Coded the HTML for the sidebar link"

## Styles for the sidebar
1. Remove everything wrapped around the return's parentesses and all imports except the './App.css', in codeconnect/react/src/App.jsx:
```
import './App.css'

function App() {
  return (

  )
}

export default App
```
2. Import the Sidebar  from './components' and insert the Sidebar inside the return's parentesses:
```
import './App.css'
import Sidebar from './components'

function App() {

  return (
    <Sidebar />
  )
}
export default App

```
Run in the terminal: ```npm run dev``` to see the result. 

3. Remove all code in :
- codeconnect/react/src/App.css;
- codeconnect/react/src/index.css;
4. Create variables in codeconnect/react/src/index.css by looking at the prototype.
- Import Google fonts;
```
:root {
  --highlight-green: #81FE88;
  --pastel-green: #BFFFC3;
  --petroleum-green: #132E35;
  --graphite: #01080E;
  --dark-gray: #171D1F;
  --gray: #3E3E3F;
  --medium-gray: #888888;
  --light-gray: #BCBCBC;
  --offwhite: #E1E1E1;
  --white: #FFFFFF;
  --font: "Prompt", sans-serif;
}
```

5. Reset the css styles.
- Check this reset and use or just make a simple reset: <a href="https://piccalil.li/blog/a-more-modern-css-reset/#:~:text=Resets%20are%20one%20of%20those%20things%20that%20people">A (more) Modern CSS Reset</a>
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
