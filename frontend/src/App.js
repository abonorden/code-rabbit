import './App.css';
import List from './components/List';

function App() {
  const listTeam = ['Alex', 'Nick', 'Gabe', 'Will', 'Brad']
  return (
    <>
      <List items={listTeam}></List>
    </>
  );
}

export default App;
