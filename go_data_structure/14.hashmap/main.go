package main

import "fmt"

/*
有一个公司,当有新的员工来报道时,要求将该员工的信息加入(id,性别,年龄,名字,住址..),
当输入该员工的 id 时, 要求查找到该员工的 所有信息. 要求:
1) 不使用数据库,,速度越快越好=>哈希表(散列)
2) 添加时，保证按照 id 从低到高插入 [课后思考：如果 id 不是从低到高插入，但要求各条链表仍是从低到
高，怎么解决?]
3) 使用链表来实现哈希表, 该链表不带表头[即: 链表的第一个结点就存放雇员信息]
*/

type Employee struct {
	id   int
	name string
	age  int
	next *Employee
}

type EmployeeList struct {
	head *Employee
}

func (e *EmployeeList) add(emp *Employee) {
	if e.head == nil {
		e.head = emp
	}
	var temp = e.head
	for {
		if temp.next == nil {
			break
		}
		temp = temp.next
	}
	temp.next = emp
}
func (e *EmployeeList) find(id int) {
	if e.head == nil {
		fmt.Println("该链表为空")
	}
	var temp = e.head
	for {
		if temp == nil {
			fmt.Println("没有查到该员工")
			break
		}
		if temp.id == id {
			fmt.Printf("找到了id为[%d],姓名为[%s]的员工", temp.id, temp.name)
			return
		}
		temp = temp.next
	}

}

type EmployeeTab struct {
	maxSize     int
	employeeArr []*EmployeeList
}

func (e *EmployeeTab) init(size int) {
	e.maxSize = size
	e.employeeArr = make([]*EmployeeList, size)
	for i := 0; i < size; i++ {
		e.employeeArr[i] = &EmployeeList{}
	}
}
func (e *EmployeeTab) add(employee *Employee) {
	var location = employee.id % e.maxSize
	e.employeeArr[location].add(employee)
}
func (e *EmployeeTab) find(id int) {
	var location = id % e.maxSize
	e.employeeArr[location].find(id)
}

func main() {
	var employeeTab = EmployeeTab{}
	employeeTab.init(5)
	var people1 = &Employee{
		id:   3,
		name: "tuanjie",
		age:  20,
	}
	employeeTab.add(people1)
	employeeTab.find(3)
	// employeeTab.employeeArr
	// fmt.Println(employeeTab.employeeArr)
}
