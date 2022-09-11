import styled from '@emotion/styled';
import { PageHeader } from 'modules/PageHeader';
import { SearchResultsGridContainer } from 'modules/SearchResultsGrid';
import { ImagesSearchForm } from './modules/ImagesSearchForm';

const StyledApp = styled('div')`
  text-align: center;
`;

function App() {
  return (
    <StyledApp>
      <PageHeader />
      <ImagesSearchForm />
      <SearchResultsGridContainer />
    </StyledApp>
  );
}

export default App;
