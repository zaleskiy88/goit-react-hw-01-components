import { StatsDataList, PercentageSpan } from './StatsDataListItem.styled';
import PropTypes from 'prop-types';

export const StatisticsListItem = ({ stats }) => {
  const { label, percentage } = stats;

  return (
    <>
      <StatsDataList>
        <span>{label}</span>
        <PercentageSpan>{percentage}%</PercentageSpan>
      </StatsDataList>
    </>
  );
};

StatisticsListItem.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
