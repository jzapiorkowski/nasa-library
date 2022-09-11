import { useMemo } from 'react';
import { Grid, Paper, styled } from '@mui/material';
import { StateType } from 'store';
import { useSelector } from 'react-redux';

const StyledItemContainer = styled(Grid)`
  width: 400px;
`;

const StyledTitle = styled(Paper)`
  width: 100%;
  padding: 10px 0;
`;

const StyledImage = styled('img')`
  height: 300px;
  width: 100%;
`;

export function SearchResultsGrid() {
  const data = useSelector<StateType, Record<string, Record<string, any>[]>[]>(
    (state) => state.searchResults.data
  );

  const preparedResultsItems = useMemo(
    () =>
      data.map((element) => {
        return (
          <StyledItemContainer item key={element.data[0].nasa_id}>
            <StyledTitle elevation={6}>{element.data[0].title}</StyledTitle>
            <StyledImage src={element.links[0].href} />
          </StyledItemContainer>
        );
      }),
    [data]
  );
  return <>{preparedResultsItems}</>;
}
