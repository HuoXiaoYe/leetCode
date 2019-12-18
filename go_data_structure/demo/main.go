package main

import (
	"fmt"
	"strconv"
)

//计算函数
func cal(num1 string, num2 string, opera string) string {
	cal1, _ := strconv.ParseInt(num1, 10, 10)
	cal2, _ := strconv.ParseInt(num2, 10, 10)
	var res int64
	if opera == "+" {
		res = cal1 + cal2

	}
	if opera == "-" {
		res = cal1 - cal2
	}
	if opera == "*" {
		res = cal1 * cal2
	}
	if opera == "/" {
		res = cal1 / cal2
	}
	return strconv.FormatInt(res, 10)
}

func main() {
	var rs = cal("20", "30", "-")
	fmt.Printf("%T", rs)
}
