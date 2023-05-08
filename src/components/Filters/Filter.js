import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <label htmlFor="title-input">Title:</label>
      <input id="title-input" type="text" value={title} onChange={onTitleChange} />
      <label htmlFor="rate-input">Minimum rating:</label>
      <input id="rate-input" type="number" min="0" max="10" step="0.1" value={rate} onChange={onRateChange} />
    </div>
  );
};

export default Filter;