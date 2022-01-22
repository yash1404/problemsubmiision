// If there is an array that contains 10 elements. How can you delete the last 6 elements from the array and reduce the size of the array to 4 without using any existing JavaScript functions?


// If i give you an array that contains 0s and 1s that are not arranged/sorted. How can you sort them by placing all the 0s at first and the 1s followed by the zeros without using any sorting algorithms or any existing JavaScript functions.

// Before sorting	[0,1,0,0,0,1,1]
// After sorting	[0,0,0,0,1,1,1]

// solution first 

const array=[1,2,3,4,5,6,7,8,9,10]
    array.length=4;
    console.log(array);

    // solution second 

    const unsortedarray=[0,1,0,0,0,1,1]
    const num=7

    const sorting =(array,num)=>{
       
        {
            let count = 0; // Counts the no of zeros in arr
         
            for (let i = 0; i < num; i++) {
                if (array[i] == 0)
                    count++;
            }
         
            // Loop fills the arr with 0 until count
            for (let i = 0; i < count; i++)
                arr[i] = 0;
         
            // Loop fills remaining arr space with 1
            for (let i = count; i < num; i++)
                arr[i] = 1;
        }


    }
 sorting(unsortedarray,num);







