import Month from './components/Month'
import yearFormat from './util/YearFormat'

function App() {

  return (
    <>
      {yearFormat.map((info,idx) => (<Month {...info} key={idx}/>)) }
    </>
  );
}

export default App;
