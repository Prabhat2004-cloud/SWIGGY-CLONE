import {createSlice} from "@reduxjs/toolkit"

const cart=createSlice({
    
    name: 'cartslice',
    initialState:{
        items:[],
        count:0

    },
    reducers:{
        additems:(state,action)=>{
            state.items.push({...action.payload,qty:1})
            state.count++;
        },
        IncrementItems:(state,action)=>{
            const element= state.items.find((item)=>item.id==action.payload.id);
            element.qty +=1;
            state.count++;
        },
        DecrementItems:(state,action)=>{
            const element= state.items.find((item)=>item.id==action.payload.id);
            state.count--;

            if(element.qty>1){
                element.qty-=1;
            }
            else{
                state.items=state.items.filter((item)=>item.id!= action.payload.id);
            }
        }
    }

})

export const {additems,IncrementItems,DecrementItems}=cart.actions;
export default cart.reducer
