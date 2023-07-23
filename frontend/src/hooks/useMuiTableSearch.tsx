import { useState, useEffect } from 'react';

import { hasValue } from '@/utils/helper';

const useMuiTableSearch = (queryFields: Array<string>) => {
  const [initialData, setInitialData] = useState([] as any);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(initialData);
  }, [initialData]);

  const handleSearchQuery = (event) => {
    const filteredList = initialData.filter((row) => {
      const result = hasValue(row, event.target.value);

      return result;
    });

    setRows(filteredList);
  };

  return { rows, setRows, setInitialData, handleSearchQuery };
};

export default useMuiTableSearch;
