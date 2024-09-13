import './style.css';
import Image from './assets/image.png';
import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import User from './assets/user.png';

export default function Card(){
    return(
        <article className="card">
            <div className="card__image">
                <img src={Image} alt="post's image"></img>
            </div>
            <div className='card__content'>
                <div className='content__text'>
                    <h3>Post title</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</p>
                </div>
                <div className='footer'>
                    <ul>
                        <li>
                            <img src={Code} alt="codes" />
                            100
                        </li>
                        <li>
                            <img src={Share} alt="Share" />
                            32
                        </li>
                        <li>
                            <img src={Chat} alt="comments" />
                            14
                        </li>
                    </ul>
                    <div className='footer__user'>
                        <img src={User} alt="user image" />
                        @maci
                    </div>
                </div>
            </div>
        </article>
    )
}