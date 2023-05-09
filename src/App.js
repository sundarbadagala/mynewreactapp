import InfiniteScroll from './components/infiniteScroll'
import Accordion from './components/accordion'

import {data} from './data/accordion-data'

function App() {
  return (
    <>
      {/* <InfiniteScroll /> */}
      <Accordion data={data}/>
    </>
  );
}

export default App;
