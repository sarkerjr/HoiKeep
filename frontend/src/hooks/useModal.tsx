import { useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState('CREATE');
  const [data, setData] = useState({} as any);

  return {
    modal,
    setModal,
    mode,
    setMode,
    data,
    setData,
  };
};

export default useModal;
