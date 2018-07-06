import React from 'react';
import classNames from 'classnames';

import './Label.css';

const Label = ({ children, className }) => {
  const classes = classNames('my-label', className);

  return (
    <div className={classes}>
      <div className="my-label__hole" />
      {children}
    </div>
  );
};

export default Label;
