package main

import "fmt"

// 希尔排序

func shellSort(arr []int) []int {
	for gap := len(arr) / 2; gap > 0; gap /= 2 {
		for i := 0; i < gap; i++ { // 一共分为了gap个组，既循环gap次 循环每一个组
			// 内部跳出条件是什么
			for j := i; j < len(arr)-gap; j += gap { // 第i个组
				if arr[j] > arr[j+gap] {
					var temp = arr[j]
					arr[j] = arr[j+gap]
					arr[j+gap] = temp
				}
			}
		}
	}
	return arr
}
func main() {
	var arr = []int{1, 34, 234, 19, 29, 47, 12, 87, 129, 76, 999}
	var rs = shellSort(arr)
	fmt.Println(rs)
}
