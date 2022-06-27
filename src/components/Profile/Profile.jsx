import { UserProfile } from './Profile.styled';
import { UserDescription } from 'components/Profile/UserDescription/UserDescription';
import { UserStats } from 'components/Profile/UserStats/UserStats';
import PropTypes from 'prop-types';

export const Profile = ({ userData }) => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <UserProfile>
      <UserDescription
        userData={userData}
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      ></UserDescription>
      <UserStats stats={stats}></UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
