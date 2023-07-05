import PropTypes from 'prop-types';
import style from '../friend/friend.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <li className={style.item}>
  <span className={`${style.status} ${isOnline ? style.online : style.offline}`}></span>
  <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={style.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}