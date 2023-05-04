import React, { useEffect, useState } from 'react';

const SlidingWindow = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isVisible = currentScrollY > 1500 && currentScrollY < 2500;
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center fixed top-0 left-0">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col max-w-sm">
            <img src="https://source.unsplash.com/random" className="mb-4" alt="" />
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae, eligendi quaerat facere delectus mollitia voluptate dolores earum culpa ducimus beatae! Sapiente quos rerum incidunt distinctio maiores beatae cum aperiam?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlidingWindow;