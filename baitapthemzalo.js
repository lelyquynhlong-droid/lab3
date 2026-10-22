
/*Bai 1: Tim gia tri lon nhat trong mang */
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([1, 3, 5, 7, 9])); // 9
console.log(findMax([10, 20, 30, 40, 50])); // 50
console.log(findMax([-5, -2, -1, -3])); // -1

/*Bai 2: Tinh tong cac so le trong mang */
function sumOddNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(sumOddNumbers([1, 2, 3, 4, 5])); // 9

/*Bai 3: Tim gia tri nho nhat trong mang */
function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin([5, 2, 8, 1, 4])); // 1

/*Bai 4: Dem so luong so duong trong mang */
function countPositiveNumbers(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }

    return count;
}

console.log(countPositiveNumbers([-1, 2, 3, -4, 5])); // 3

/*Bai 5: Tính tổng tất cả các phần tử trong mảng */
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
/*Bai 6: Tính trung bình cộng của các phần tử trong mảng */     
function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50])); // 30
console.log(calculateAverage([])); // 0

/*Bai 7: Kiểm tra xem mảng có được sắp xếp theo thứ tự tăng dần hay không */
function isAscending(arr) {
    if (arr.length < 2) {
        return false;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(isAscending([1, 2, 3, 5])); // true
console.log(isAscending([1, 2, 2, 3])); // false
console.log(isAscending([])); // false

/*Bai 8: Đếm số lượng phần tử trong mảng lớn hơn một giá trị cho trước */
function countGreaterThan(arr, value) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            count++;
        }
    }

    return count;
}

console.log(countGreaterThan([1, 5, 7, 2, 3], 3)); // 2
console.log(countGreaterThan([2, 3, 1, -6, 8], 5)); // 1
console.log(countGreaterThan([], 5)); // 0

/*Bai 9: Tính tổng các phần tử trong mảng theo thứ tự xen kẽ (+, -, +, -) */
function alternateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        } else {
            sum -= arr[i];
        }
    }

    return sum;
}

console.log(alternateSum([10, 5, 6, 3])); // 8
console.log(alternateSum([1, 2, 3, 4, 5])); // 3

/*Bai 10: Tính tổng bình phương của các phần tử trong mảng */
function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }

    return sum;
}

console.log(sumOfSquares([1, 2, 3])); // 14
console.log(sumOfSquares([4, 5, 6])); // 77

/*Bai 11: Lọc các số chẵn trong mảng và tính tổng của chúng */
function filterEvensAndSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6])); // 12
console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100])); // 146

/*Bai 12: Tìm từ dài nhất trong mảng các chuỗi */
function findLongestWord(arr) {
    if (arr.length === 0) {
        return "";
    }

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // banana
console.log(findLongestWord(["hello", "world", "this", "is", "great"])); // hello
/*Bai 13: Tính điểm trung bình và xếp loại học lực dựa trên điểm trung bình */
function calculateGrade(arr) {
    if (arr.length === 0) {
        return "F";
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade([90, 95, 100])); // A
console.log(calculateGrade([80, 85, 89])); // B
console.log(calculateGrade([70, 75, 79])); // C
console.log(calculateGrade([60, 65, 69])); // D
console.log(calculateGrade([40, 50, 55])); // F

/*Bai 14: Tìm số bị thiếu trong mảng các số nguyên từ 1 đến n */
function findMissingNumber(arr, n) {
    let total = n * (n + 1) / 2;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return total - sum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
console.log(findMissingNumber([1, 2, 3, 4], 4)); // 0

/*Bai 15: Loại bỏ các phần tử trùng lặp trong mảng */
function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

/*Bai 16: Tìm tất cả các cặp số trong mảng có tổng bằng một giá trị cho trước */
function findPairsWithSum(arr, sum) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(findPairsWithSum([1, 2, 3, 4, 5], 5));
// [[1, 4], [2, 3]]
