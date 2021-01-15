import { createSelector } from "reselect";
// Find State from redux
const findPurchase = (state) => state.purchase;
// Selectors
export const getPurchase = createSelector(findPurchase, (purchase) => purchase);
