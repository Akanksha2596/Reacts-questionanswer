import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Questions';
function App() {
  
  return (
    <main>
      <div className='container'>
        <h1>question and answer about login</h1>
        <section className='info'>
          {data.map(question => <SingleQuestion key={question.id} {...question} />)}
        </section> 
      </div>    
    </main>
  );
};

export default App;
