import './App.css';
import List from './components/List';

function App() {
  const listTeam = ['Alex', 'Nick', 'Gabe', 'Will', 'Brad', 'Brac']
  return (
    <>
      <List items={listTeam}></List>
    </>
  );
}

export default App;
