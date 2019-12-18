package main

import "fmt"

//入栈和出栈操作
type Stack struct {
	maxSize int
	data    []int
	top     int
}

// 栈初始化
func (s *Stack) initStack(maxSize int) {
	s.data = make([]int, maxSize)
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
func (s *Stack) push(val int) {
	if s.isFull() {
		fmt.Println("栈已满")
		return
	}
	s.data[s.top] = val
	s.top++
}

// 出栈
func (s *Stack) pop() int {
	// 判断栈是否为空
	if s.isEmpty() {
		fmt.Println("栈为空")
		return 999999999
	}
	s.top--
	var rs = s.data[s.top]
	return rs
}

//计算函数
func cal(num1 int, num2 int, opera int) int {
	if opera == '+' {
		return num1 + num2
	}
	if opera == '-' {
		return num1 - num2
	}
	if opera == '*' {
		return num1 * num2
	}
	if opera == '/' {
		return num1 / num2
	}
	return 0
}

// 判断优先级
func calLevel(opera int) int {
	if opera == '*' || opera == '/' {
		return 1
	}
	if opera == '+' || opera == '-' {
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
}
