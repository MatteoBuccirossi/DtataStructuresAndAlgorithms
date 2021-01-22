function insertionSort(arr){
    let temp;
    let len = arr.length;
    let j;
  
    for(let i= 0; i <len; i++){
      temp = arr[i];
      for(j = i - 1; j > -1 && arr[j] > temp; j--){
        arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
    }
    return arr;
  }
  
  
  console.log(insertionSort([1,4,5,6,7,3,5,2,7,]))