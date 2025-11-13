import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    //local storage 
  pastes : localStorage.getItem("pastes")?
  JSON.parse(localStorage.getItem("pastes")):
   [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes',JSON.stringify(state.pastes));
      toast("Paste created Successfully!");
      
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>
      item._id === paste._id);

      if(index>=0){
        state.pastes[index] = paste;

        localStorage.setItem('pastes',
          JSON.stringify(state.pastes))

        toast.success("Paste update")
      }
    },
    resetAllPastes: (state, action) => {
      toast("Wow so easy!");
    },
    removeFromPastes:(state,action)=>{
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>
      item._id === paste._id);
      
      if(index>=0){
        console.log('w1')
        state.pastes.splice(index,1);

         localStorage.setItem('pastes',
          JSON.stringify(state.pastes))

        toast.success("Paste Deleted")
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer