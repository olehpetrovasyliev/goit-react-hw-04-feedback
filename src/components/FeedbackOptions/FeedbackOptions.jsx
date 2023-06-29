import { FlexWrapper } from 'components/Flex/Flex.styled';
import { StyledFeedbackButton } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FlexWrapper>
      {options.map(btn => {
        return (
          <StyledFeedbackButton
            key={btn}
            type="button"
            onClick={() => {
              onLeaveFeedback({ type: btn });
            }}
          >
            {btn}
          </StyledFeedbackButton>
        );
      })}
    </FlexWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
