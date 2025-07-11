import {create} from 'zustand';

export const VulnerStore = create((set)=>({
    result : null,
    setResult: (result) => set({ result }),
})
);

