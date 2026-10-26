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

const maxProfit = (prices) => {
    let min = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
}
 let prices = [7,1,5,3,6,4];
 const result = maxProfit(prices);
 console.log(result); 