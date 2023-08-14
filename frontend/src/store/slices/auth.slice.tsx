import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { store } from '@/store';

interface State {
  isLoggedIn: boolean;
  isInitialized: boolean;
  role: string | null;
}

const initialState: State = {
  isLoggedIn: false,
  isInitialized: false,
  role: null,
};

export const verifyToken = (accessToken: string | null) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode<{ exp: number }>(accessToken);

  return decoded.exp > Date.now() / 1000;
};

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    // clearing entire localStorage upon logout
    localStorage.clear();
  }
};

// extract user role from token
export const getUserRole = (accessToken: string | null) => {
  if (!accessToken) return null;
  return jwtDecode<{ role: { type: string } }>(accessToken).role.type;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ role: string | null }>) {
      state.isLoggedIn = true;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = null;
    },
    initialize(
      state,
      action: PayloadAction<{ isLoggedIn: boolean; role: string | null }>
    ) {
      state.isInitialized = true;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.role = action.payload.role;
    },
  },
});

export const { login, logout, initialize } = authSlice.actions;

export default authSlice.reducer;

export const initStore = () => {
  try {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken && verifyToken(accessToken)) {
      setSession(accessToken);
      store.dispatch(
        initialize({
          isLoggedIn: true,
          role: getUserRole(accessToken),
        })
      );
    } else {
      store.dispatch(logout());
    }
  } catch (err) {
    store.dispatch(logout());
  }
};

export const logoutUser = () => {
  setSession(null);
  store.dispatch(logout());
};
