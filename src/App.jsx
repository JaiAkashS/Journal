import Block from './components/Block'
import Year from './components/Year'
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
