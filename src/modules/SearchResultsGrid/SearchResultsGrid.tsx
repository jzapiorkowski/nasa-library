import { useMemo } from 'react';
import { Grid, Paper, styled, Typography } from '@mui/material';
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

interface StateProps {
  data: Record<string, Record<string, any>[]>[];
  wasSearched: boolean;
}

export function SearchResultsGrid() {
  const { data, wasSearched } = useSelector<StateType, StateProps>((state) => ({
    data: state.searchResults.data,
    wasSearched: state.searchResults.wasSearched,
  }));

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

  if (!data.length && wasSearched) {
    return (
      <>
        <Typography>
          Sorry but we could't find what you were looking for
        </Typography>
      </>
    );
  }

  return <>{preparedResultsItems}</>;
}
