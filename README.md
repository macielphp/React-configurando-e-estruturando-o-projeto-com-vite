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

git commit -m "Complete Card component, html and css"

## useEffect

1. Import the useState and the useEffect in the codeconnect/react/src/App.jsx:
    ```
    import { useState, useEffect } from 'react';
    ```

2. Create the state variable in the codeconnect/react/src/App.jsx: 
    ```
    const [data, setData] = useState([]);
    ```
3. Create an unordered list and add a className to it in codeconnect/react/src/App.jsx:
    ```
    <ul className="cards-list">

    </ul>
    ```
4. Create a string interpolation to check if there's anything different than a null or undefined value:
    ```
    <ul className="cards-list">
        { data ? data.map( code here ) : null}
    </ul>
    ```
    Example:
    ```
    { isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p> }
    ```
    Learn more: https://www.dhiwise.com/post/react-string-interpolation-combine-static-and-dynamic-values
5. Use map() to iterate over the array data and execute a callback function for each array's element(item):
    ```
    <ul className="cards-list">
        { data ? data.map((item, index) => (
            <li>

            </li>
        )) : null}
    </ul>
    ```
    Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map;

6. Call the Cart component and create properties to store and acess the items' values:
    ```
    <ul className='cards-list'>
          { data ? data.map((item, index) => (
            <li key={index}>
              <Card 
                id={item.id}
                imagemUrl={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhas_de_codigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )) : null}
        </ul>
    ```
### data
    Definition: data is the array of items to be iterated over.

    Usage: In your example, data is the variable that contains a list of objects, where each object represents an item you want to display using the <Card /> component.
### item
    Definition: item is a parameter of the callback function provided to map. It represents a single element of the data array during each iteration.

    Usage: For each item in the data array, the item variable contains the data for that specific item. In the example, item is an object with properties like id, imagem_capa, titulo, etc. These data are passed as props to the <Card /> component.

### index
    Definition: index is another parameter of the callback function provided to map. It represents the index of the current element within the data array (i.e., its position in the list).

    Usage: The index is mainly used to provide a unique key for each rendered list element. This helps React identify which items have changed, been added, or removed, and optimize the rendering process. It's important that each item in a rendered list has a unique key, and index is often used for this purpose, although ideally, you should use a more stable unique identifier when available.

### key
    Definition: key is a special prop that you should add to each element in a list rendered by React.

    Usage: The key helps React identify which items have changed, been added, or removed from the list. This improves the efficiency of the rendering process and updates only the necessary items. In your code, key={index} is used to assign a unique key to each <li> element. In a real application, it is preferable to use a unique identifier (such as an ID) to ensure that the key does not change if the array is reordered.

7. Insert the name of the properties(props) in the Card component in codeconnect/react/src/components/Card/index.jsx:
    ```
    export default function Card({ id, imagemUrl, titulo, resumo, linhas_de_codigo, compartilhamentos, comentarios, usuario })
    ```
8. Replace the property's value with the props: 
    ```
    export default function Card({ id, imagemUrl, titulo, resumo, linhas_de_codigo, compartilhamentos, comentarios, usuario }){
    return(
        <article className="card">
            <div className="card__image">
                <img src={imagemUrl} alt="post's image"></img>
            </div>
            <div className='card__content'>
                <div className='content__text'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
                <div className='footer'>
                    <ul>
                        <li>
                            <img src={Code} alt="codes" />
                            <div id="codes-lines">{linhas_de_codigo}</div>
                        </li>
                        <li>
                            <img src={Share} alt="Share" />
                            <div>
                                {compartilhamentos}
                            </div>
                        </li>
                        <li>
                            <img src={Chat} alt="comments" />
                            <div>{comentarios}</div>
                            
                        </li>
                    </ul>
                    <div className='footer__user'>
                        <img src={usuario.imagem} alt="user image" />
                        <div>{usuario.nome}</div>
                    </div>
                </div>
            </div>
        </article>
    )
    }
    ```
    ![alt text](/react/assets/image-9.png)
    