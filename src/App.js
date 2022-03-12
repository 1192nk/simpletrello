import {Header} from './components/header/Header'
import {TaskCards} from './components/task/TaskCards'
import React from 'react';
function App() {
  return (
    <div className='app'>
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
