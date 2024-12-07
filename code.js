function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (list[mid] === element) {
            return mid; // Element found
        } else if (list[mid] < element) {
            left = mid + 1; // Look in the right half
        } else {
            right = mid - 1; // Look in the left half
        }
    }

    return -1; // Element not found
}
