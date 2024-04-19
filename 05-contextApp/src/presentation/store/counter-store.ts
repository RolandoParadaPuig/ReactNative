import {create} from 'zustand';

export interface CounterState {
  count: number;
  increment: (value: number) => void;
  resetCount: () => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  count: 0,
  increment: (value: number) => {
    set({count: get().count + value});
  },
  resetCount: () => {
    set({count: 0});
  },
}));
