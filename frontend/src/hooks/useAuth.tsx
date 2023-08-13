import { useSelector } from '@/store';

import { useLoginUserMutation } from '@/store/services/auth.services';

const useAuth = () => {
  const { isLoggedIn, isInitialized, role } = useSelector(
    (state) => state.auth
  );

  const [login] = useLoginUserMutation();

  return { isLoggedIn, isInitialized, role, login };
};

export default useAuth;
