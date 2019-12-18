package main

import (
	"fmt"
	"strconv"
)

//入栈和出栈操作
type Stack struct {
	maxSize int
	data    []string
	top     int
}

// 栈初始化
func (s *Stack) initStack(maxSize int) {
	s.maxSize = maxSize
	s.data = make([]string, maxSize)
}

//判断栈是否为空
func (s *Stack) isEmpty() bool {
	return s.top == 0
}

// 判断栈是否已满
func (s *Stack) isFull() bool {
	return s.top == s.maxSize
}

//返回栈内元素的个数
func (s *Stack) length() int {
	return s.top
}

//入栈
func (s *Stack) push(val string) {
	if s.isFull() {
		fmt.Println("栈已满")
		return
	}
	s.data[s.top] = val
	s.top++
}

// 出栈
func (s *Stack) pop() string {
	// 判断栈是否为空
	if s.isEmpty() {
		fmt.Println("栈为空")
		return ""
	}
	s.top--
	var rs = s.data[s.top]
	return rs
}

// 查看栈顶元素
func (s *Stack) peek() string {
	if s.isEmpty() {
		return ""
	}
	return s.data[s.top-1]

}

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

func isOpera(v string) bool {
	return v == "*" || v == "/" || v == "+" || v == "-"
}

// 判断优先级
func calLevel(opera string) int {
	if opera == "*" || opera == "/" {
		return 1
	}
	if opera == "+" || opera == "-" {
		return 0
	}
	return -1
}
func main() {
	// 声明两个栈，一个数字栈，一个符号栈
	var numStack = &Stack{}
	numStack.initStack(10)
	var operaStack = &Stack{}
	operaStack.initStack(10)
	// 18 - 20 + 9 = 7
	// 18 + 20 + 9 = 47
	var expression string = "3*6+4*5+9"
	for i := 0; i < len(expression); i++ {
		var item = string(expression[i])
		if isOpera(item) { //是一个运算符
			// 1. 如果符号栈为空则直接push
			if operaStack.isEmpty() {
				operaStack.push(item)
			} else {
				var top = operaStack.peek()
				var level1 = calLevel(top)  // 栈内优先级
				var level2 = calLevel(item) // 当前元素的优先级
				if level2 <= level1 {       //栈内优先级高
					var curOpera = operaStack.pop()
					var num1 = numStack.pop()
					var num2 = numStack.pop()
					var rs = cal(num2, num1, curOpera)
					// fmt.Println(num1, "===", num2, "====", curOpera)
					// fmt.Println(rs)
					numStack.push(rs)
					operaStack.push(item)
				}
				if level2 > level1 {
					operaStack.push(item)
				}
			}
		} else {
			numStack.push(item)
		}
	}
	for {
		if operaStack.isEmpty() {
			break
		}
		var curOpera = operaStack.pop()
		var num1 = numStack.pop()
		var num2 = numStack.pop()
		var rs = cal(num2, num1, curOpera)
		// fmt.Println(rs)
		numStack.push(rs)
		// fmt.Println("计算了一次")
		// fmt.Println(numStack.data)
	}
	fmt.Println(numStack.peek())
	// fmt.Println(operaStack.data)
}
