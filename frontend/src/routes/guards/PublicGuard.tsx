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
          navigate('/dashboard', { replace: true });
          break;
        case 'STAFF':
          navigate('/dashboard', { replace: true });
          break;
        case 'OPERATOR':
          navigate('/dashboard', { replace: true });
          break;
        case 'STUDENT':
          navigate('/dashboard', { replace: true });
          break;
      }
    } else {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default PublicGuard;
