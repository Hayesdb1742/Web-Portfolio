import React from 'react';

function About() {
  console.log('Test')
  return (
    <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>
      This is an example paragraph. It can contain <strong>bold</strong>, <em>italic</em>, and <a href="https://www.example.com">link</a> elements. You can also use other elements like <li>lists</li>,and <code>code blocks</code>. By styling the paragraph element using inline CSS, you can adjust its font size, line height, and color to achieve the desired look.
    </p>
  );
}

export default About;
