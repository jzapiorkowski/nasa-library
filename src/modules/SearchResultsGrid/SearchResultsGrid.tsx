import { Grid } from '@mui/material';
import { Loader } from 'components';
import { useSelector } from 'react-redux';
import { StateType } from 'store';

interface StateProps {
  data: Record<string, {}>[];
  isLoading: boolean;
}

export function SearchResultsGrid() {
  const { data, isLoading } = useSelector<StateType, StateProps>((state) => ({
    data: state.searchResults.data,
    isLoading: state.searchResults.isLoading,
  }));

  if (isLoading) {
    return <Loader />;
  }

  return <Grid container></Grid>;
}
