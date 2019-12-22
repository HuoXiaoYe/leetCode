package main

import "fmt"

func binarySeach(arr []int, target int, left int, right int) int {
	if left > right {
		return -1
	}
	var mid = (left + right) / 2
	if target == arr[mid] {
		return mid
	} else if target > arr[mid] {
		return binarySeach(arr, target, mid+1, right)
	} else {
		return binarySeach(arr, target, left, mid-1)
	}
}

func main() {
	var arr = []int{1, 2, 15, 45, 123, 456, 792, 1642, 7798}
	var i = binarySeach(arr, 15, 0, 8)
	fmt.Println("15==", i)
	var j = binarySeach(arr, 300, 0, 8)
	fmt.Println("300======", j)
}
