import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { useReducer } from 'react';

const reducer = (state, action) => {
  console.log(state);
  if (action === 'good') {
    return { ...state, good: state.good + 1 };
  } else if (action === 'neutral') {
    return { ...state, neutral: state.neutral + 1 };
  } else {
    return { ...state, bad: state.bad + 1 };
  }
};
export const App = () => {
  const INIT_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;
    return good + bad + neutral;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={dispatch}
        />
      </Section>

      <div>
        {countTotalFeedback() > 0 ? (
          <>
            <Section title={'Statistics'}>
              <Statistics
                {...state}
                total={countTotalFeedback()}
                positivePercentage={
                  ' ' +
                  ((state.good / countTotalFeedback()) * 100).toFixed(0) +
                  '%'
                }
              />
            </Section>
          </>
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
};
