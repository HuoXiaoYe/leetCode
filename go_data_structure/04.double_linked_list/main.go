package main

import "fmt"

/**
Node...
*/
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

// 根据id删除对应的节点
func delByID(head *Node, id int) {
	if head.next == nil {
		fmt.Println("链表为空，不能删除")
		return
	}
	var temp = head.next
	for {
		if temp.id == id { // 删除temp
			temp.pre.next = temp.next
			if temp.next != nil {
				temp.next.pre = temp.next
			}
			break
		}
		if temp.next == nil {
			break
		}
		temp = temp.next
	}
}

// 根据id修改节点
func updateNode(head *Node, node *Node) {
	if head.next == nil {
		fmt.Println("链表为空，不能修改")
		return
	}
	var temp *Node = head
	for {
		if temp.id == node.id { //找到了对应的节点
			temp.name = node.name
		}
		if temp.next == nil {
			break
		}
		temp = temp.next
	}
}

// 根据id的值查找对应的节点

func fingNodeByID(head *Node, id int) *Node {
	if head.next == nil {
		fmt.Println("链表为空,拒绝查找")
		return nil
	}
	var temp *Node = head
	for {
		if temp.id == id {
			return temp
		}
		if temp.next == nil {
			return nil
		}
		temp = temp.next
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
	var newNode *Node = &Node{
		id:   4,
		name: "xiaoye",
	}
	addByOrder(head, node1)
	addByOrder(head, node4)
	delByID(head, 1)
	addByOrder(head, node3)
	addByOrder(head, node2)
	updateNode(head, newNode)
	var rs = fingNodeByID(head, 4)
	fmt.Println(rs)
	// var temp = head.next
	// for {
	// 	fmt.Println(temp.name)
	// 	if temp.next == nil {
	// 		break
	// 	}
	// 	temp = temp.next
	// }
}
