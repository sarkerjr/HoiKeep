import { useState, useEffect } from 'react';

const useMuiTableSearch = (queryFields: Array<string>) => {
  const [initialData, setInitialData] = useState([] as any);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(initialData);
  }, [initialData]);

  const handleSearchQuery = (event) => {
    const filteredList = initialData.filter((row) => {
      const properties = queryFields;
      let containsQuery = false;

      properties.forEach((property) => {
        if (row[property]?.toString().toLowerCase().includes(event.target.value.toString().toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        return false;
      }
      return true;
    });

    setRows(filteredList);
  };

  return { rows, setRows, setInitialData, handleSearchQuery };
};

export default useMuiTableSearch;
