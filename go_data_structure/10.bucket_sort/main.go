package main

import (
	"fmt"
	"math"
)

type MyIntSort []int

func (m MyIntSort) Len() int {
	return len(m)
}

func (m MyIntSort) Less(i, j int) bool {
	return m[i] < m[j]
}

func (m MyIntSort) Swap(i, j int) {
	m[i], m[j] = m[j], m[i]
}

func bucketSort(arr []int) []int {

	// 找到最大值的length
	var max = arr[0]
	for i := 1; i < len(arr); i++ {
		if max < arr[i] {
			max = arr[i]
		}
	}
	// fmt.Println(max)
	var maxElLen = len(string(max)) // 最大数字的长度

	for i := 0; i < maxElLen+1; i++ { // i 代表 个位数 十位数 百位数的循环
		var tempIndex = 0
		var bucket [10]MyIntSort
		var temp = math.Pow(10, float64(i))
		for j := 0; j < len(arr); j++ { // 将数据装入到每一个桶子中
			var cur = arr[j] / int(temp) % 10
			bucket[cur] = append(bucket[cur], arr[j])
		}
		for k := 0; k < len(bucket); k++ {
			if len(bucket[k]) != 0 { //说明这个筒子中有数据
				// sort.Sort(bucket[k]) //为什么这个地方不排序也是可以的
				// 将排序好的桶子中的数据放入到 arr中
				for m := 0; m < len(bucket[k]); m++ {
					arr[tempIndex] = bucket[k][m] //因改使用简单排序 但这里为了方便 使用了go语言内置的排序方法
					tempIndex++
				}
			}
		}
	}

	return arr
}

func main() {
	var arr []int = []int{1, 45, 2, 15, 792, 1642, 7798, 456, 123}
	var rs = bucketSort(arr)
	fmt.Println(rs)
}
