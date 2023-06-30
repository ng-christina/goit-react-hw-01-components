import PropTypes from 'prop-types';
import style from './friend.module.css'


export const FriendList = ({friends})=>{
    return(
        <ul className={style.friendList}>
            {friends.map(friend =>(
                <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            ))}
        </ul>
    )
}

 const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <li className={style.item}>
  <span className={`${style.status} ${isOnline ? style.online : style.offline}`}></span>
  <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={style.name}>{name}</p>
</li>
    )
}

FriendList.propTypes={
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}


