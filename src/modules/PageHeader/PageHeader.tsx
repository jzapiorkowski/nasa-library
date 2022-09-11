import { Typography, styled } from '@mui/material';

const StyledHeader = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export function PageHeader() {
  return (
    <StyledHeader variant='h2'>
      The awesome nasa library image searcher
    </StyledHeader>
  );
}
