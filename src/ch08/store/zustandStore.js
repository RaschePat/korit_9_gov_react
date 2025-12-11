import { create } from "zustand";

// 기본 문법
// const useName = create();

export const useName = create((set)=>({
    // 객체가 key : value 형태로 들어감
    name: "",
    setName: (name) => set({"name": name}), // ""로 키값 구별
}));

export const useInfo = create((set)=>({
    userInfo: {
        username:"",
        email:"",
        phone:"",
    },
    setUserInfo: (user) => set({userInfo: user}),
    setUserInfo2: (key, value) => set(state => ({userInfo: {...state.userInfo, [key]: value,}})),
}));

export const useInfoList = create((set)=>({
    userInfoList: [], 
    setUserInfoList: (user) => set((state) => ({userInfoList: [...state.userInfoList, user]}))
}));