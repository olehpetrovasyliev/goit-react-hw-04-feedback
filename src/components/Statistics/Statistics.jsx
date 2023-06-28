import propTypes from 'prop-types';
import { StatsItem, StatsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsList key={crypto.randomUUID()}>
      <StatsItem key={crypto.randomUUID()}>Good: {good}</StatsItem>
      <StatsItem key={crypto.randomUUID()}>Neutral: {neutral}</StatsItem>
      <StatsItem key={crypto.randomUUID()}>Bad: {bad}</StatsItem>
      <StatsItem key={crypto.randomUUID()}>Total: {total}</StatsItem>

      <StatsItem key={crypto.randomUUID()}>
        Positive Feedback:{positivePercentage}
      </StatsItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.string,
};
