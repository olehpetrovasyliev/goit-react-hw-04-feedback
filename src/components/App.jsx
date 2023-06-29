import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { useState, useEffect, useReducer } from 'react';
import { INIT_STATE } from 'INIT_STATE';
const reducer = (state, action) => {
  console.log(state);
  if (action.type === 'good') {
    return { ...state, good: state.good + 1 };
  } else if (action.type === 'neutral') {
    return { ...state, neutral: state.neutral + 1 };
  } else {
    return { ...state, bad: state.bad + 1 };
  }
};
export const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
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

  // // const

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
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
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveAnyFeedback = key => {
//     this.setState(prevState => ({ [key]: prevState[key] + 1 }));
//   };
//   countTonalFeedback = () => {
//     return Object.values(this.state).reduce((acc, el) => acc + el, 0);
//   };

//   render() {
//     const total = this.countTonalFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback" key={crypto.randomUUID()}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.leaveAnyFeedback}
//           />
//         </Section>

//         <div>
//           {total > 0 ? (
//             <>
//               <Section title={'Statistics'} key={crypto.randomUUID()}>
//                 <Statistics
//                   good={this.state.good}
//                   neutral={this.state.neutral}
//                   bad={this.state.bad}
//                   total={total}
//                   positivePercentage={
//                     ' ' + ((this.state.good / total) * 100).toFixed(0) + '%'
//                   }
//                 />
//               </Section>
//             </>
//           ) : (
//             <Notification />
//           )}
//         </div>
//       </>
//     );
//   }
// }
