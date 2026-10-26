/**
 * leetcode 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * input: prices = [7,1,5,3,6,4]
 * output: 5
 * explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * 
 * input: prices = [7,6,4,3,1]
 * output: 0
 * explanation: In this case, no transaction is done and the max profit = 0.
 */ 

// Optimized approach: Ek hi pass mein minimum buying price aur best profit track karo.
// Har din sell karne ka profit pehle ke sabse saste buying price se calculate hoga.
// Example: [7,1,5,3,6,4] mein buy = 1 aur sell = 6 se maximum profit 5 milega.
// Time complexity: O(n), kyunki array ek baar traverse hota hai.
// Space complexity: O(1), kyunki sirf fixed variables use hote hain.
const maxProfit = (prices) => {
    // Pehle din ka price initial minimum buying price maan lo.
    let min = prices[0];
    // Profit na mile toh transaction skip kar sakte hain, isliye answer 0 se start hai.
    let maxProfit = 0;
    // Doosre din se check karo: buy karne ke baad hi kisi future din sell karna hai.
    for(let i = 1; i < prices.length; i++){
        // Aaj sell karne par profit = aaj ka price - ab tak ka minimum buying price.
        // Agar yeh profit pichhle best profit se bada hai, toh best profit update karo.
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min;
        }
        // Aaj ka price aur sasta hai toh future dinon ke liye buying price update karo.
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    // Sabhi din check karne ke baad best profit return karo; loss wale case mein 0 rahega.
    return maxProfit;
}
 let prices = [7,1,5,3,6,4];
 const result = maxProfit(prices);
 console.log(result); 