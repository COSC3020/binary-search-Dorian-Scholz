function binarySearch(list, element)
{
    let low = 0;
    let high = list.length - 1;

    while (low <= high) 
    {
        let mid = Math.floor((low + high) / 2);
        
        if (list[mid] === element) 
        {
            return mid; 
        } else if (list[mid] < element) 
        {
            low = mid + 1; 
        } else 
        {
            high = mid - 1; 
        }
    }

    return -1; 
}
