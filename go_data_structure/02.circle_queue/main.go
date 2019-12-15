package main

import "fmt"

// 实现环形队列

type Queue struct {
	maxSize int
	front   int
	rear    int
	data    []int
}

func (q *Queue) initQueue() {
	q.data = make([]int, q.maxSize)
}

/*
存 取 长度 空
*/
// push
func (q *Queue) push(val int) {
	// 判断队列是否已经满了
	if (q.rear+1)%q.maxSize == q.front {
		fmt.Println("队列已满")
		return
	}
	q.data[q.rear] = val
	q.rear = (q.rear + 1) % q.maxSize
}

// empty
func (q *Queue) isEmpty() bool {
	return q.rear == q.front
}

// get
func (q *Queue) get() int {
	if q.isEmpty() {
		fmt.Println("队列为空")
		return -1
	}
	var r = q.data[q.front]
	q.front = (q.front + 1) % q.maxSize
	return r
}

// 长度
func (q *Queue) length() int {
	return (q.rear + q.maxSize - q.front) % q.maxSize
}

func main() {
	var q Queue = Queue{
		front:   0,
		rear:    0,
		maxSize: 6,
	}
	q.initQueue()
	fmt.Println(q.isEmpty())
	q.push(20)
	var _ = q.get()
	q.push(20)
	q.push(20)
	var _ = q.get()
	var _ = q.get()
	var _ = q.get()
	var _ = q.get()
	fmt.Println(q.length())
	q.push(20)
	q.push(20)
	q.push(20)
	// fmt.Println(q.front)
	fmt.Println(q.length())

}
