function binarySearch(list, element) 
{
    if (list.length === 0) 
    {
        return -1; 
    }

    let left = 0;
    let right = list.length - 1;

    while (left <= right) 
    {
        let mid = Math.floor((left + right) / 2);

        if (list[mid] === element) 
        {
            return mid; 
        }

        if (list[mid] < element) 
        {
            left = mid + 1; 
        } else 
        {
            right = mid - 1; 
        }
    }

    return -1; 
}

