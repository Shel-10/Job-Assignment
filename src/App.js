import './App.css';
import Data from "./data.json";
import {Card} from "./components/Card"
import { FilterBadge } from './components/FilterBadge';

function App() {
  return (
    <div className="App">
     <header className="relative">
       <div className="bg-cyan-medium bg-header-mobile bg-cover desk:bg-header-desktop h-32 shadow-2xl"></div>
       {/* search */}
       <div className="ml-10 absolute w-11/12 -bottom-5 rounded-md bg-cyan-light h-12 shadow-md flex flex-row">
         {/* badges here */}
         <FilterBadge name="Frontend" />
         <FilterBadge name="CSS" />
         <FilterBadge name="Javascript" />
       </div>
       {/* clear */}
        <button type="button" className="absolute right-2 -bottom-5 w-24 bg-cyan-light h-12 mr-7 rounded-r-md shadow-md">
        <span className="flex justify-center items-stretch text-cyan-dark hover:text-cyan-medium hover:underline">Clear</span>
        </button>
     </header>
      <div className="bg-cyan-light mb-20">
         {Data.map((post) => {
          return(
                <Card data={post} key={post.id} />    
          )})} 
     </div>
    </div>
     

  );
}

export default App;
