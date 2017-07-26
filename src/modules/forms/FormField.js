import React from 'react';

const styles = {
  block: {
    padding: '0 6px',
    flexShrink: 0,
  },
};

const FormField = ({ children }) => (
  <div style={styles.block}>
    { children }
  </div>
);

export default FormField;
