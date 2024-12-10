function binarySearch(list, element) 
{
    let left = 0;
    let right = list.length - 1;

    while (left <= right) 
    {
        const mid = Math.floor((left + right) / 2);
        const midValue = list[mid];

        if (midValue === element) 
        {
            return mid;
        } else if (midValue < element) 
        {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
