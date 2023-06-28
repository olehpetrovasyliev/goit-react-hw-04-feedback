import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { INIT_STATE } from 'INIT_STATE';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const [feedback, setFeedback] = useState({ ...INIT_STATE });

  useEffect(() => {
    console.log('hi');
  }, [good]);
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const leaveFeedback = () => {
    setGood(prev => prev + 1);
  };
  // // const

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <div>
        {countTotalFeedback() > 0 ? (
          <>
            <Section title={'Statistics'}>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={
                  ' ' + ((good / countTotalFeedback()) * 100).toFixed(0) + '%'
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
