import { create } from "zustand";

interface AuthState {
  status: 'authenticated' | 'unathenticated' | 'checking';
  token?: string;
  user?: {
    name: string;
    email: string;
  };

  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({

  status: 'checking',
  token: undefined,
  user: undefined,
  login: () => {
    set({
      status: 'authenticated',
      token: '123BASD',
      user: {
        name: 'Rol Puig',
        email: 'rolando@gmail.com',
      }
    })
  },
  logout: () => {
    set({
      status: 'unathenticated',
      token: undefined,
      user: undefined,
    })
  },
}))