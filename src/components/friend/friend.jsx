import PropTypes from 'prop-types';
import style from './friend.module.css';
import { FriendListItem } from '../friendsListItem/friend-list';


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


FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
}
