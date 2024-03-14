import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set: any) => ({
      isAuth: true,
      setAuth: (payload: boolean) => set({ isAuth: payload }),
    }),
    {
      name: "app-state-auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
