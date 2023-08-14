import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from '@/hooks/useAuth';

const AdminGuard = ({ children }) => {
  const { isLoggedIn, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      switch (role) {
        case 'AUTHORITY':
        case 'STAFF':
        case 'OPERATOR':
        case 'STUDENT':
          break;
        default:
          navigate('/login', { replace: true });
          break;
      }
    } else {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default AdminGuard;
