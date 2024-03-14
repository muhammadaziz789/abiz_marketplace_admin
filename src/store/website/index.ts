import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useWebsiteStore = create(
  persist(
    (set: any) => ({
      routes: [],
      collapsed: true,
      tableDetails: {},
      setRoutes: (payload: any) => set({ routes: payload }),
      setCollapsed: (payload: any) => set({ collapsed: payload }),
      setTableDetails: (payload: any) => set({ tableDetails: payload }),
    }),
    {
      name: "app-state-website",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
