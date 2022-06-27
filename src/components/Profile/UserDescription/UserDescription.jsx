import { UserProfileDescription } from './UserDescription.styled';
import PropTypes from 'prop-types';

export const UserDescription = ({ userData }) => {
  const { avatar, username, tag, location } = userData;

  return (
    <UserProfileDescription>
      <img src={avatar} alt="User avatar" width="250px" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </UserProfileDescription>
  );
};

UserDescription.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
