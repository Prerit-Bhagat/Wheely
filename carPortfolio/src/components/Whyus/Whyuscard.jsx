import React from 'react';
// { url, title, description }
const Whyuscard = (props) => {
  return (
    <div className='whyus-card'>
      <img src={props.url} alt={props.title} style={props.imageStyle} />
      <h3 style={props.titleStyle}>{props.title}</h3>
      <p style={props.descriptionStyle}>{props.description}</p>
    </div>
  );
};

export default Whyuscard;
