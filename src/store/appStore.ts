import { create } from 'zustand';

interface AppState {
  isSubmitted: boolean;
  submitSuccess: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isSubmitted: false,
  submitSuccess: () => set({ isSubmitted: true }),
}));
