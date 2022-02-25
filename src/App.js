import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete this?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };
  return (
    <Router>
      <Header />{' '}
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {/*with Emmet you can now write .myClass and it will give you another div with this class name if you configure it in JSON settings*/}
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}
