import { useLocation } from 'react-router-dom';

import { useSelector } from '@/store';

const useRoles = () => {
  const { role } = useSelector((state) => state.auth);

  const location = useLocation();

  if (role) {
    if (['/authority', '/operator', '/staff'].includes(location.pathname)) {
      return role === 'AUTHORITY';
    } else if (location.pathname === '/fee') {
      return ['AUTHORITY', 'OPERATOR', 'STAFF'].includes(role);
    } else {
      return ['AUTHORITY', 'OPERATOR'].includes(role);
    }
  }

  return false;
};

export default useRoles;
