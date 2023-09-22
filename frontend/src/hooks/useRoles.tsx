import { useLocation } from 'react-router-dom';

import { useSelector } from '@/store';

const useRoles = () => {
  const { role } = useSelector((state) => state.auth);

  const location = useLocation();

  let isValid = false;

  if (role) {
    if (['/authority', '/operator', '/staff'].includes(location.pathname)) {
      isValid = ['AUTHORITY', 'VISITOR'].includes(role);
    } else if (location.pathname === '/fee') {
      isValid = ['AUTHORITY', 'OPERATOR', 'STAFF', 'VISITOR'].includes(role);
    } else {
      isValid = ['AUTHORITY', 'OPERATOR', 'VISITOR'].includes(role);
    }
  }

  return { isValid, role };
};

export default useRoles;
