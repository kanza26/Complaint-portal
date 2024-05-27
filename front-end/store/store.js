import { create } from 'zustand'

export const emailstore = create((set) => ({
    email: " ", // Initial email state
    setemail: (newEmail) => set({ email: newEmail }), // Method to update email
  }));
