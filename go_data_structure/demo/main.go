package main

func main() {
	var arr []int = []int{1, 2, 3, 4, 5, 6, 7, 8}
	//数组元素一共有 8 个 长度为 8
	var temp int
	// 第一次 gap = 4  这时一共有 4 组
	// 第二次 gap = 2  这时一共有 2 组
	// 第三次 gap = 1  这时一共有 1 组
	for gap := len(arr) / 2; gap > 0; gap /= 2 {
		for i := gap; i < len(arr); i++ { // 我感觉应该是有多少组就循环多少次
			for j := i - gap; j >= 0; j -= gap {
				if arr[j] > arr[j+gap] {
					temp = arr[j]
					arr[j] = arr[j+gap]
					arr[j+gap] = temp
				}
			}
		}
	}
}
