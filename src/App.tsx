import { PageHeader } from 'modules/PageHeader';
import { SearchResultsGridContainer } from 'modules/SearchResultsGrid';
import './App.css';
import { ImagesSearchForm } from './modules/ImagesSearchForm';

function App() {
  return (
    <div className='App'>
      <PageHeader />
      <ImagesSearchForm />
      <SearchResultsGridContainer />
    </div>
  );
}

export default App;
