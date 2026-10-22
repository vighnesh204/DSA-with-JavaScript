/**
 * leetcode 88: Merge Sorted Array
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
 * input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * output: [1,2,2,3,5,6]
 * 
 * input: nums1 = [1], m = 1, nums2 = [], n = 0
 * output: [1]
 */
const mergeSortedArrays = (nums1, m, nums2, n) => {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for(let i = 0; i < m+n; i++){
        if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else{
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
const result = mergeSortedArrays(nums1, m, nums2, n);
console.log(result); // Output: [1,2,2,3,5,6]