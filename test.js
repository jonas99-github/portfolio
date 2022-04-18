const arr = [4, 56, 5, 3, 34, 37, 89, 57, 98];
const sortWithReduce = arr => {
   return arr.reduce((acc, val) => {
      let ind = 0;
      while(ind < arr.length && val < arr[ind]){
         ind++;
      }
      acc.splice(ind, 0, val);
      return acc;
   }, []);
};
console.log(sortWithReduce(arr));