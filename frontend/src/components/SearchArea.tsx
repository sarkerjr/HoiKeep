import { FC, ChangeEvent } from 'react';
import { Add } from '@mui/icons-material';
import { Box, Button, Theme, useMediaQuery } from '@mui/material';
import SearchInput from '@/components/SearchInput';

type SearchAreaProps = {
  buttonText: string;
  handleSearch: (event: ChangeEvent) => void;
  searchPlaceholder: string;
  handleBtnClick: () => void;
};

const SearchArea: FC<SearchAreaProps> = (props) => {
  const { searchPlaceholder, buttonText, handleBtnClick } = props;
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      mb={2}
      gap={2}
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <SearchInput
        placeholder={searchPlaceholder}
        onChange={props.handleSearch}
      />

      <Button
        color="info"
        fullWidth={downSM}
        variant="contained"
        startIcon={<Add />}
        onClick={handleBtnClick}
        sx={{ minHeight: 44 }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

SearchArea.defaultProps = {
  buttonText: 'Add Product',
  searchPlaceholder: 'Search Product...',
};

export default SearchArea;