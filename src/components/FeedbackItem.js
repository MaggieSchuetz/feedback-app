import React from 'react';
//import { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({ item, handleDelete }) {
  //const [rating, setRating] = useState(7);
  //const [text, setText] = useState('This is an example of a feedback item');
  // const handleClick = () => {
  //   setRating(prev => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        {' '}
        {/* you have to write the onClick like this if you want to pass in an argument */}
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button>*/}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
