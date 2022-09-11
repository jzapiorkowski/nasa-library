import { Grid, Paper, Box, styled } from '@mui/material';
import { Loader } from 'components';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from 'store';

const StyledGridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

interface StateProps {
  data: Record<string, Record<string, any>[]>[];
  isLoading: boolean;
}

export function SearchResultsGrid() {
  const { data, isLoading } = useSelector<StateType, StateProps>((state) => ({
    data: state.searchResults.data,
    isLoading: state.searchResults.isLoading,
  }));

  const preparedResultsItems = useMemo(
    () =>
      data.map((element) => {
        return (
          <Grid item key={element.data[0].nasa_id} sx={{ width: 400 }}>
            <Paper
              elevation={6}
              sx={{
                width: '100%',
                paddingTop: 1,
                paddingBottom: 1,
              }}
            >
              {element.data[0].title}
            </Paper>
            <Box
              component='img'
              sx={{
                height: 300,
                width: '100%',
              }}
              alt=''
              src={element.links[0].href}
            />
          </Grid>
        );
      }),
    [data]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StyledGridContainer
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {preparedResultsItems}
    </StyledGridContainer>
  );
}
