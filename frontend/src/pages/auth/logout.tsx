import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  localStorage.removeItem('accessToken');
  navigate('/login', { replace: true });

  return <></>;
};

export default Logout;
