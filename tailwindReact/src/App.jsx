import './App.css';
import Card from './components/cards.jsx'
function App() {
  return (
    <>
      <h1 className="bg-pink-500 text-white p-4 rounded-xl">React with Tailwind</h1>
      <div className='flex space-x-4'>
      <Card username="chai aur code" position="Staff Engineer" location="India"/>
      <Card />
      </div>
      

    </>
  );
}

export default App;
