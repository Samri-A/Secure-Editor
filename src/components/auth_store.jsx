import {create} from 'zustand';

export const email_store = create((set)=>({
    email : null,
    setEmail: (email) => set({ email }),
})
);

