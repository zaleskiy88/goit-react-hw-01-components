import PropTypes from 'prop-types';
import { List, ListItem, IsOnlineSpan } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <div>
      <List>
        {friends.map(({ avatar, id, isOnline, name }) => {
          return (
            <ListItem key={id}>
              <IsOnlineSpan isOnline={isOnline}></IsOnlineSpan>
              <img src={avatar} alt="User avatar" width="48" />
              <p>{name}</p>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
