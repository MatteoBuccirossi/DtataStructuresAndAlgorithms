function bubbleleSort(array){

    function bubbleSortHelper(arr){
      for(let el in arr){
        if(arr[el] > arr[parseInt(el) +1]){
          
          let temp = arr[parseInt(el) +1];
          arr[parseInt(el) +1 ] = arr[el];
          arr[el] = temp;
        }
      }
      return arr;
    }
  
    function isSorted(list){
      for(let el in list){
        if(list[el] > list[parseInt(el) +1]){
          return false;
        }
      }
      return true;
    }
  
    while(!(isSorted(array))){
      array = bubbleSortHelper(array)
    }
    return array;
  }
  
console.log(bubbleleSort([1,2,4,7,8,3,4, 9, 10, 4,5,33,55,66,45,76,2345,2]));