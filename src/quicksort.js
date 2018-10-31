// quicksort :: (Ord a) => [a] -> [a]  
// quicksort [] = []  
// quicksort (x:xs) =   
//     let smallerSorted = quicksort [a | a <- xs, a <= x]  
//         biggerSorted = quicksort [a | a <- xs, a > x]  
//     in  smallerSorted ++ [x] ++ biggerSorted  

function smallerSort() {
    return quicksort(xs.filter(x => x <= c))
}

function biggerSort(xs, c) {
    return quicksort(xs.filter(x => x > c))
}

export default function quicksort([x, ...xs]) {
    return smallerSort(xs, x).concat([x]).concat(biggerSort(xs, x))
}
