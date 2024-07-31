import React, { useState } from 'react';
import { cardData } from './utills/data';
import Card from './MainComponents';

const App = () => {
  const [visibleCards, setVisibleCards] = useState(6);

  const loadMoreCards = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
  };

  console.log(cardData);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData?.slice(0, visibleCards)?.map((card, index) => (
          <Card  card={card} />
        ))}
      </div>
      {visibleCards <cardData.length && (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={loadMoreCards}>
          Load More
        </button>
      )}
    </div>
  );
};

export default App;
