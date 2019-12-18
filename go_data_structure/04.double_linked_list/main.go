package main

import "fmt"

// 双向链表的增删改查
type Node struct {
	id   int
	name string
	next *Node
	pre  *Node
}

//在末尾增加一个节点
func addAtLast(head *Node, node *Node) {
	var temp *Node = head
	for {
		if temp.next == nil {
			break
		}
		temp = temp.next
	}
	temp.next = node
	node.pre = temp
}

// 按照id的顺序添加节点
func addByOrder(head *Node, node *Node) {
	var temp *Node = head
	for {
		if temp.next == nil {
			temp.next = node
			node.pre = temp
			break
		}
		if temp.next.id > node.id {
			temp.next.pre = node
			node.next = temp.next
			temp.next = node
			node.pre = temp
			break
		}
		temp = temp.next
		// fmt.Println(temp)
	}
}

func main() {
	var head *Node = &Node{
		id: 0,
	}

	var node1 *Node = &Node{
		id:   1,
		name: "tuanjie1",
	}
	var node2 *Node = &Node{
		id:   2,
		name: "tuanjie2",
	}
	var node3 *Node = &Node{
		id:   3,
		name: "tuanjie3",
	}
	var node4 *Node = &Node{
		id:   4,
		name: "tuanjie4",
	}
	addByOrder(head, node1)
	addByOrder(head, node4)
	addByOrder(head, node3)
	addByOrder(head, node2)
	var temp = head.next
	for {
		fmt.Println(temp.name)
		if temp.next == nil {
			break
		}
		temp = temp.next
	}
}
