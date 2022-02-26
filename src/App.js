import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
  return (
    <FeedbackProvider>
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}
