package main

import "fmt"

func insertSearch(arr []int, target int, left int, right int) int {
	if left > right || target > arr[right] || target < arr[left] {
		return -1
	}
	var mid = left + (target-arr[left])/(arr[right]-arr[left])*(right-left)
	if target == arr[mid] {
		return mid
	} else if target > arr[mid] {
		return insertSearch(arr, target, mid+1, right)
	} else {
		return insertSearch(arr, target, left, mid-1)
	}
}

func main() {
	var arr = []int{1, 2, 15, 45, 123, 456, 792, 1642, 7798}
	var i = insertSearch(arr, 15, 0, 8)
	fmt.Println("15==", i)
	var j = insertSearch(arr, 300, 0, 8)
	fmt.Println("300======", j)
}
