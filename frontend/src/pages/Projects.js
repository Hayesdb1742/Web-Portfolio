import React from 'react';
function MyParagraph() {
  console.log('Test')
  return (
    <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>
        This will be a test paragraph.
    </p>
  );
}

export default MyParagraph;