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

export const verifyToken = (serviceToken: string | null) => {
  if (!serviceToken) {
    return false;
  }

  const decoded = jwtDecode<{ exp: number }>(serviceToken);

  return decoded.exp > Date.now() / 1000;
};

export const setSession = (serviceToken: string | null) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
  } else {
    // clearing entire localStorage upon logout
    localStorage.clear();
  }
};

// extract user role from token
export const getUserRole = (serviceToken: string | null) => {
  if (!serviceToken) return null;
  return jwtDecode<{ role: { type: string } }>(serviceToken).role.type;
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
    const serviceToken = window.localStorage.getItem('serviceToken');
    if (serviceToken && verifyToken(serviceToken)) {
      setSession(serviceToken);
      store.dispatch(
        initialize({
          isLoggedIn: true,
          role: getUserRole(serviceToken),
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
