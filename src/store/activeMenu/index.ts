import { create } from "zustand";

export const useActiveMenu = create((set: any) => ({
  open_menu: false,
  setOpenMenu: (payload: boolean) => set({ open_menu: payload }),
}));
