import { create } from'zustand';
import apiRequest from'./apiRequest';

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    try {
      const response = await apiRequest.get("/users/notification");
      set({ number: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));  // Corrected to use single curly braces
  },
  reset: () => {
    set({ number: 0 });
  }
}));
