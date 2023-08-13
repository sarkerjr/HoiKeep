import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// project imports
import useAuth from '@/hooks/useAuth';

const PublicGuard = () => {
  const { isLoggedIn, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      switch (role) {
        case 'AUTHORITY':
          navigate('/', { replace: true });
          break;
        case 'STAFF':
          navigate('/', { replace: true });
          break;
        case 'OPERATOR':
          navigate('/', { replace: true });
          break;
        case 'STUDENT':
          navigate('/', { replace: true });
          break;
      }
    } else {
      navigate('/department', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default PublicGuard;
