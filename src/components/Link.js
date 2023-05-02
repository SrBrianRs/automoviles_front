import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.brand} ({link.model})
      </div>
    </div>
  );
};

export default Link;