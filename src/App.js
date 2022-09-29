import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Questions';
function App() {
  const[questions] = useState(data);
  return (
  <main>
    <div className='container'>
      <h3>question and answer about login</h3>
      <section className='info'>
        { questions.map((question) =>{
        return <SingleQuestion key={question.id} {...question} />;
      })
    }
     </section> 
    </div>    
  </main>
  );
};

export default App;
