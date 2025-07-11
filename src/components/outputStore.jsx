import {create} from 'zustand';

export const outputStore = create((set)=>({
    output : null , 
    setOutput : (output)=> set({ output }),
}));