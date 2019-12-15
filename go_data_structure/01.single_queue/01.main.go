package main

import "fmt"

type Queue struct {
	MaxSize int
	Front   int
	Rear    int
	data    [5]int
}

// 往队列里增加数据
func (q *Queue) addQueue(val int) {
	// 判断队列是否已经满了
	if q.Rear == q.MaxSize {
		fmt.Println("队列已满")
		return
	}
	q.data[q.Rear] = val
	q.Rear++
}

//从队列中取数据
func (q *Queue) getQueue() int {
	// 判断队列是否为空
	if q.Front+1 >= q.Rear {
		fmt.Println("队列为空")
	}
	q.Front++
	return q.data[q.Front]
}

// 返回队列元素的个数
func (q *Queue) length() int {
	return q.Rear - q.Front - 1
}

// 判断队列是否为空
func (q *Queue) isEmpty() bool {
	return q.Front+1 == q.Rear
}
func main() {
	var q = Queue{
		MaxSize: 5,
		Front:   -1,
		Rear:    0,
	}
	fmt.Println(q.isEmpty())
	q.addQueue(0)
	q.addQueue(1)
	q.addQueue(2)
	fmt.Println(q.isEmpty())
	fmt.Println(q.length())

}
