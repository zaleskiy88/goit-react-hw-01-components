import { Stats } from './UserStats.styled';
import PropTypes from 'prop-types';

export const UserStats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Stats>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </Stats>
  );
};

UserStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
