function quickSort(arr){
    return quickSortHelper(arr, 0, arr.length -1);
  }
  
  function quickSortHelper(arr, left, right){
    
    var index;
    if(arr.length > 1){
      
      index = partition(arr, left, right);
      if(left < index -1){
        quickSortHelper(arr, left, index -1);
      }
      if(index < right){
        quickSortHelper(arr, index, right);
      }
    }
    return arr;
  }
  
  function partition(array, left, right){
    let pivot = array[Math.floor((left+right)/2)];
    while(left <= right){
      while(pivot > array[left]){
        left++
      }
      while(pivot < array[right]){
        right--;
      }
  
      if(left <= right){
        var temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
      }
    }
    return left;
  }
  
  console.log(quickSort([1,5,7,3,4,5,8,5,66,7,8,3,4,2,5544,6543,54323,4]))