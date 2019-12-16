package main

import "fmt"

type singleList struct {
	id   int
	name string
	next *singleList
}

// 在链表的末尾加入一个新的节点
func addAtLast(head *singleList, node *singleList) {
	var temp = head
	for {
		if temp.next == nil {
			break
		}
		temp = temp.next
	}
	temp.next = node
}

// 按照id的大小有序的加入节点
func addByID(head *singleList, node *singleList) {
	var temp = head
	for {
		if temp.next == nil {
			temp.next = node
			return
		}
		if temp.next.id >= node.id {
			node.next = temp.next
			temp.next = node
			return
		}
		temp = temp.next
	}
}

func main() {
	var head *singleList = &singleList{
		id:   0,
		next: nil,
	}
	var node1 *singleList = &singleList{
		id:   1,
		name: "tuanjie1",
		next: nil,
	}
	var node2 *singleList = &singleList{
		id:   2,
		name: "tuanjie2",
		next: nil,
	}
	var node3 *singleList = &singleList{
		id:   3,
		name: "tuanjie3",
		next: nil,
	}
	var node4 *singleList = &singleList{
		id:   4,
		name: "tuanjie4",
		next: nil,
	}
	var node444 *singleList = &singleList{
		id:   4,
		name: "tuanjie4",
		next: nil,
	}

	addByID(head, node1)
	addByID(head, node2)
	addByID(head, node4)
	addByID(head, node3)
	addByID(head, node444)
	var temp = head.next
	for {
		if temp == nil {
			break
		}
		fmt.Printf("输出======%s\n", temp.name)
		temp = temp.next
	}
}
