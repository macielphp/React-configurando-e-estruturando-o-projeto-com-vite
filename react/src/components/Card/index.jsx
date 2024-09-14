import './style.css';
// import Image from './assets/image.png';
import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
// import User from './assets/user.png';

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