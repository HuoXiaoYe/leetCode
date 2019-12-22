package main

import (
	"fmt"
	"math/rand"
	"time"
)

// 选择排序
func selectSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		minIndex := i
		for j := i + 1; j < len(arr); j++ {
			if arr[minIndex] > arr[j] {
				minIndex = j
			}
		}
		if minIndex != i {
			var temp = arr[i]
			arr[i] = arr[minIndex]
			arr[minIndex] = temp
		}
	}
	return arr
}

//插入排序
func insertSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		var insertVal = arr[i]
		var insertIndex = i - 1
		for insertIndex >= 0 && insertVal < arr[insertIndex] {
			arr[insertIndex+1] = arr[insertIndex]
			insertIndex--
		}
		insertIndex++
		arr[insertIndex] = insertVal
	}
	return arr
}

// 希尔排序

func main() {
	var arr []int = make([]int, 800000)
	for i := 0; i < 800000; i++ {
		arr[i] = rand.Intn(80000000)
	}

	startTime := time.Now()
	selectSort(arr)
	endTime := time.Now()
	fmt.Printf("select:%v\n", endTime.Second()-startTime.Second())
	//==================
	startTime = time.Now()
	insertSort(arr)
	endTime = time.Now()
	fmt.Printf("insert:%v\n", endTime.Second()-startTime.Second())
}
