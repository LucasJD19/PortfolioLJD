import { create } from 'zustand'

export const useTemaStore = create((set) => ({
  temaOscuro: false,
  alternarTema: () => set((state) => ({ temaOscuro: !state.temaOscuro }))
}))