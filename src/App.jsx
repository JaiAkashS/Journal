import Month from './components/Month'
import yearFormat from './util/YearFormat'

function App() {

  return (
    <div className='year-container'>
      {yearFormat.map((info,idx) => (<Month {...info} key={idx}/>)) }
    </div>
  );
}

export default App;
