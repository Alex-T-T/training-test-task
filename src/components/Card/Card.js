import { Button } from "../Button/Button"
import logo from '../../images/logo/logo.svg';

export const Card = ({ avatar, user, tweets, followers}) => {
    return (
        <div className='card'>
            <img className='logo' src={logo} alt="logo" width={76} />
            <img className='user-logo' src={avatar} alt="user logo" width={62} height={62} />
            <div className='content'>
                <p className='user-properties'>{user}</p>
                <p className='user-properties'>{tweets} Tweets</p>
                <p className='user-properties'>{followers} Followers</p> 
            </div>
            <Button text='Follow' />
        </div>
    )
}