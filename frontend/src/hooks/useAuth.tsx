import { useEffect } from 'react';

import { useSelector } from '@/store';
import { initStore } from '@/store/slices/auth.slice';
import { useLoginUserMutation } from '@/store/services/auth.services';

const useAuth = () => {
  const { isLoggedIn, isInitialized, role } = useSelector(
    (state) => state.auth
  );

  const [login] = useLoginUserMutation();

  useEffect(() => {
    initStore();
  }, []);

  return { isLoggedIn, isInitialized, role, login };
};

export default useAuth;
