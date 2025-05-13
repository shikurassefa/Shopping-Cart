import {create} from 'zustand'  
import { persist } from 'zustand/middleware'
export const userAuthStore = create(
    persist(
        (set) => ({
            user: { userName: "", email: "" },
            logIn: (username, email) => {
                set({ user: { userName: username, email: email } });
            },
            logOut: () => {
                set({ user: { userName: "", email: "" } });
            },
        }),
        {
            name: "user-auth-store", // unique name for storage
        }
    )
);