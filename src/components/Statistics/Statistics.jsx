import { StatsSection, StatsList } from './Statistics.styled';
import { StatisticsListItem } from './StatisticsList/StatisticsListItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      <>
        {title && <h2>{title}</h2>}

        <StatsList>
          {stats.map(data => (
            <StatisticsListItem key={data.id} stats={data}></StatisticsListItem>
          ))}
        </StatsList>
      </>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
