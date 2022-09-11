import { SearchResultsGrid } from 'modules/SearchResultsGrid';
import './App.css';
import { ImagesSearchForm } from './modules/ImagesSearchForm';

function App() {
  return (
    <div className='App'>
      <ImagesSearchForm />
      <SearchResultsGrid />
    </div>
  );
}

export default App;
