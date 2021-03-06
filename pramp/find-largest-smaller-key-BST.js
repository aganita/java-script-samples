// Given a root of a binary search tree and a key x, 
//find the largest key in the tree that is smaller than x.

// Example: if an in-order list of all keys in the tree is 
//{2, 3, 4, 7, 17, 19, 21, 35, 89} and x is 19, the biggest key that is smaller than x is 17.      


function findLargestSmallerKey(root, x){
   let result = null;
   while (root){
      if (root.key < x){
         result = root.key;
         root = root.right;
      }
      else
         root = root.left;
   }
   return result;  
}