# React-configurando-e-estruturando-o-projeto-com-vite
 Project derived from the course "React: configurando e estruturando o projeto com Vite" from Alura

## First commands
1. npm create vite@latest -- --template react
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

## Variables for styles
1. Remove everything wrapped around the return's parentesses and all imports except the './App.css', in codeconnect/react/src/App.jsx:
    ```
    import './App.css'

    function App() {
    return (

    )
    }

    export default App
    ```
2. Import the Sidebar  from './components/Sidebar' and insert the Sidebar inside the return's parentesses:
    ```
    import './App.css'
    import Sidebar from './components/Sidebar'

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
    - Import fonts from Google Fonts;
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
git commit -m "Adiction of variables and reset"

## Styling the Sidebar component
1. Create a style.css file in codeconnect/react/src/components/Sidebar/;
2. Import the style.css in the index.jsx which is in codeconnect/react/src/;
    ```
    import './Sidebar/style.css';
    ```
3. Start styling the Sidebar in the codeconnect/react/src/components/Sidebar/style.css.

4. http://localhost:5173/:
![alt text](/react/assets/image.png)

git commit -m "Completed styles of the Sidebar component"

## Search bar component
1. Create a new folder called 'SearchBar' in codeconnect/react/src/components/;

2. Create a new file called 'index.jsx' in codeconnect/react/src/components/SearchBar/;

    ![alt text](/react/assets/image-2.png)

3. Create and export the SearchBar function component in codeconnect/react/src/components/SerachBar/index.jsx:
    ```
    export default function SearchBar(){
        return(
            <!-- Code the HTML structure -->
        )
    }
    ```
4. Import the SearchBar function component in codeconnect/react/src/App.jsx so you can check the changes on real time in your browser:
    ```
    import { useState } from 'react';
    import './style.css';

    export default function SearchBar(){
        const [termSearched, setTermSearched] = useState('');
        console.log(termSearched);
        return(
            <input 
            type="search" 
            placeholder="Type what you wish" 
            className="search-bar"
            value={termSearched}
            onChange={(event) => setTermSearched(event.target.value)}/>
        )
    }
    ```
5. Download the medias from the prototype;

6. Create a new folder called 'assets' in codeconnect/react/src/SearchBar/ and store the imagens and icons;

    ![alt text](/react/assets/image-4.png)

7. Code the html structure in codeconnect/react/src/SearchBar/index.jsx SearchBar function component;
    ```
    import './style.css';

    export default function SearchBar(){
        return(
            <input type="search" placeholder="Type what you wish" className="search-bar"/>
        )
    }
    ```

8. Create a new file called 'style.css' in codeconnect/react/src/components/SearchBar/;
    ![alt text](/react/assets/image-3.png)

9. Import the style.css file in codeconnect/react/src/components/SearchBar/index.jsx;
    ```
    import './style.css';
    ```
10. Style the search-bar in the codeconnect/react/src/components/SearchBar/style.css:
    ```
    .search-bar{
        width: 100%;
        color: var(--light-gray);
        padding: .5em 1em .5em 4em;
        height: 49px;
        font-family: var(--font);
        font-size: 22px;
        background: var(--dark-gray) url('./assets/search.svg') no-repeat 32px;
        border: none;
        border-radius: 4px;
    }
    ```

git commit -m "Completed html, css, folders,  and import/export of the SearchBar component"

## useState
1. Inside the codeconnect/react/src/components/SearchBar/index.jsx import the useState, create a state variable and insert the properties value and onChange:
    ```
    import { useState } from 'react';
    import './style.css';
    export default function SearchBar(){
        const [termSearched, setTermSearched] = useState('');
        console.log(termSearched);
        return(
            <input 
            type="search" 
            placeholder="Type what you wish" 
            className="search-bar"
            value={termSearched}
            onChange={(event) => setTermSearched(event.target.value)}/>
        )
    }
    ```
    Learn more at: https://react.dev/reference/react/useState
2. Check the result in codeconnect/react/ and in the terminal run: npm run dev:
    ![alt text](/react/assets/image-5.png)
    - As an input is inserted in the search bar, the useState receives each interaction.
3. Add a className to the parent div in the codeconnect/react/src/App.jsx and style it in the codeconnect/react/src/App.css in order to display the components in the proper place according to the prototype:
    ```
    <!-- codeconnect/react/src/App.jsx -->
    return (
        <div className='container'>
            <Sidebar />
            <SearchBar />
        </div>
    )
    ```
    ```
    <!-- codeconnect/react/src/App.css -->
    .container{
        width: 62vw;
        margin: 3.5em auto;
        display: flex;
        gap: 16px;
    }
    ```
    ![alt text](/react/assets/image-6.png)

git commit -m "Completed usage of the useState and style of the main container"

## Filters
1. Create a new folder called 'Filter' in codeconnect/react/src/components/:
    ![alt text](/react/assets/image-7.png);

2. Create a new file called index.jsx in codeconnect/react/src/components/Filter;

3. Create and export the Filter function component in codeconnect/react/src/components/Filter/index.jsx:
    ```
    export default function Filter(){
    return(
        <!-- Code the HTML structure -->
        )
    }
    ```
4. Import the Filter function component in codeconnect/react/src/App.jsx so you can check the changes on real time in your browser:
    ``` 
    import './App.css'
    import Sidebar from './components/Sidebar'
    import SearchBar from './components/SearchBar'
    import Filter from './components/Filter'

    function App() {
        return (
            <div className='container'>
                <Sidebar />
                <SearchBar />
                <Filter />
            </div>
        )
    }
    export default App
    ```
5. Download the medias from the prototype IF NECESSARY(same process being repeated);

6. Create a new folder called 'assets' in codeconnect/react/src/Filter/ and store the imagens and icons IF NECESSARY(same process being repeated);

7. Code the HTML structure in codeconnect/react/src/components/Filter/index.jsx IF NECESSARY.

8. Create a new file called 'style.css' in codeconnect/react/src/components/Filter/ IF NECESSARY(same process being repeated);

9. Import the style.css file in codeconnect/react/src/components/Filter/index.jsx;
    ```
    import './style.css';
    ```

10. Style in the following files (same process being repeated):
    - codeconnect/react/src/App.css
    - codeconnect/react/src/components/Filter/style.css
    
git commit -m "Completed the Filter component, html and css"

## Cards

1. Create a new folder called 'Card' in codeconnect/react/src/components/:

2. Create a new file called index.jsx in codeconnect/react/src/components/Card;

3. Create and export the Card function component in codeconnect/react/src/components/Card/index.jsx:
    ```
    export default function Card(){
    return(
        <!-- Code the HTML structure -->
        )
    }
    ```
4. Import the Card function component in codeconnect/react/src/App.jsx so you can check the changes on real time in your browser:
    ``` 
    import './App.css'
    import Sidebar from './components/Sidebar'
    import SearchBar from './components/SearchBar'
    import Filter from './components/Filter'
    import Card from './components/Card'

    function App() {
        return (
            <div className='container'>
                <Sidebar />
                <SearchBar />
                <Filter />
            </div>
        )
    }
    export default App
    ```
5. Download the medias from the prototype IF NECESSARY(same process being repeated);

6. Create a new folder called 'assets' in codeconnect/react/src/Cards/ and store the imagens and icons IF NECESSARY(same process being repeated);

7. Code the HTML structure in codeconnect/react/src/components/Card/index.jsx IF NECESSARY.

8. Create a new file called 'style.css' in codeconnect/react/src/components/Filter/ IF NECESSARY(same process being repeated);

9. Import the style.css file in codeconnect/react/src/components/Card/index.jsx;
    ```
    import './style.css';
    ```

10. Style in the following files (same process being repeated):
    - codeconnect/react/src/App.css
    - codeconnect/react/src/components/Card/style.css

11. npm run dev:
    ![alt text](/react/assets/image-8.png)

