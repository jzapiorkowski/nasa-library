import { Typography } from '@mui/material';

export function FetchFail() {
  return (
    <>
      <Typography variant='h3'>Error</Typography>
      <Typography>Network error</Typography>
      <Typography>
        Sorry but we had troubles with getting what you're looking for
      </Typography>
    </>
  );
}
