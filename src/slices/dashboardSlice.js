import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    opacity: 'opacity-100',
    background:'bg-white',
    text:'',
    modalBg :'bg-white'
  },
  reducers: {
    changeOpacity: (state) => {
      state.opacity ='opacity-20'
    },
    defaultOpacity:(state)=>{
        state.opacity = 'opacity-100'
    },
    setDay:(state)=>{
      state.background = 'bg-white'
    },
    setNight:(state)=>{
      state.background = 'bg-[#444950]'
    },
    setTextNight:(state)=>{
      state.text = 'text-white'
    },
    setTextDefault:(state)=>{
      state.text = ''
    },
    setModalNight:(state)=>{
      state.modalBg = 'bg-[#444950]'
    },
    setModalDefault:(state)=>{
      state.modalBg = 'bg-white'
    }
    
  },
});
export default dashboardSlice.reducer;
export const { changeOpacity ,defaultOpacity,setDay,setNight,setTextNight,setTextDefault,setModalNight,setModalDefault} = dashboardSlice.actions;

