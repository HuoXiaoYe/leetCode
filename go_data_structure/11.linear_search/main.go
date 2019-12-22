package main

import "fmt"

func linearSearch(arr []int, target int) int {
	for i := 0; i < len(arr); i++ {
		if arr[i] == target {
			return i
		}
	}
	return -1

}

func main() {
	var arr = []int{1, 2, 15, 45, 123, 456, 792, 1642, 7798}
	var i = linearSearch(arr, 15)
	fmt.Println("15==", i)
	var j = linearSearch(arr, 300)
	fmt.Println("300======", j)
}
