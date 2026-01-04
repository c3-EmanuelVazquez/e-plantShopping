import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name,image,cost} = action.payload;

        let existingItem = state.items.find(item => item.name !== name );
        if(!existingItem){
            state.items.push({name,image,cost,quantity:0})
        }
        state.items.quantity++;
    },
    removeItem: (state, action) => {
        const {name} = action.payload;

        state.items = state.items.filter(item =>item.name != name);

        },
    updateQuantity: (state, action) => {
        const {name,quantity} = action.payload;

        const itemFound = state.items.find(item=> item.name == name);

        if(itemFound){
            itemsFound.quantity = quantity
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
