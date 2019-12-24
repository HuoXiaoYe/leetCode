package main

import "fmt"

type heroNode struct {
	id    int
	name  string
	left  *heroNode
	right *heroNode
}

func preOrder(node *heroNode) {
	if node == nil {
		// fmt.Println("该二叉树为空，不可以进行前序遍历")
		return
	}
	fmt.Printf("id为%d,姓名为%s\n", node.id, node.name)
	preOrder(node.left)
	preOrder(node.right)
}
func infixOrder(node *heroNode) {
	if node == nil {
		// fmt.Println("该二叉树为空，不可以进行前序遍历")
		return
	}

	infixOrder(node.left)
	fmt.Printf("id为%d,姓名为%s\n", node.id, node.name)
	infixOrder(node.right)
}
func postOrder(node *heroNode) {
	if node == nil {
		// fmt.Println("该二叉树为空，不可以进行前序遍历")
		return
	}
	postOrder(node.left)
	postOrder(node.right)
	fmt.Printf("id为%d,姓名为%s\n", node.id, node.name)
}

func main() {

	var node2 = &heroNode{
		id:   2,
		name: "刘备2",
	}
	var node3 = &heroNode{
		id:   3,
		name: "刘备3",
	}
	var node4 = &heroNode{
		id:   4,
		name: "刘备4",
	}
	var root = &heroNode{
		id:   5,
		name: "刘备5",
	}
	var node6 = &heroNode{
		id:   6,
		name: "刘备6",
	}
	var node7 = &heroNode{
		id:   7,
		name: "刘备7",
	}
	var node8 = &heroNode{
		id:   8,
		name: "刘备8",
	}
	root.left = node3
	root.right = node7
	node3.left = node2
	node3.right = node4
	node7.left = node6
	node7.right = node8
	// fmt.Println("前序遍历：")
	// preOrder(root)

	// fmt.Println("中序遍历：")
	// infixOrder(root)

	fmt.Println("后序遍历")
	postOrder(root)
}
