import { Grid, styled } from '@mui/material';
import { Loader } from 'components';
import { useSelector } from 'react-redux';
import { StateType } from 'store';
import { SearchResultsGrid } from './SearchResultsGrid';

const StyledGridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

interface StateProps {
  isLoading: boolean;
}

export function SearchResultsGridContainer() {
  const { isLoading } = useSelector<StateType, StateProps>((state) => ({
    isLoading: state.searchResults.isLoading,
  }));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StyledGridContainer
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <SearchResultsGrid />
    </StyledGridContainer>
  );
}
