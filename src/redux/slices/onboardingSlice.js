// Slice is made up of three steps
// 1) Create a Slice
// 2) Create initial State
// 3) Create reducers
// 4) Export the reducer and reducers

// import { createSlice } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    currentStep: 1,
    onboardingFormData: {},
};
const onboardingSlice = createSlice({
    name: "onboarding",
    initialState,
    reducers: {
        // Function to used to manipulate the state
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;            
        },
        updateOnboardingFormData: (state, action) => {           
            state.onboardingFormData = {
                ...state.onboardingFormData,
                ...action.payload,
            };
        },        
    },
});
export const { 
    setCurrentStep, 
    updateOnboardingFormData,      
} = onboardingSlice.actions;
export default onboardingSlice.reducer;