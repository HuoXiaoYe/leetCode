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
		return
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
func (e *EmployeeList) show(i int) {
	if e.head == nil {
		fmt.Printf("第%d条链表为空\n", i+1)
		return
	}
	var temp = e.head
	fmt.Printf("第%d条链表信息如下", i+1)
	for {
		fmt.Printf("=>id:%d=name:%s", temp.id, temp.name)
		if temp.next == nil {
			break
		}
		temp = temp.next
	}
	fmt.Println()
}
func (e *EmployeeList) find(id int) {
	if e.head == nil {
		fmt.Println("该链表为空")
		return
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
func (e *EmployeeTab) show() {
	for i := 0; i < e.maxSize; i++ {
		e.employeeArr[i].show(i)
	}
}

func main() {
	var employeeTab = EmployeeTab{}
	employeeTab.init(5)
	var people1 = &Employee{
		id:   3,
		name: "tuanjie1",
		age:  20,
	}
	var people2 = &Employee{
		id:   30,
		name: "tuanjie2",
		age:  13,
	}
	var people3 = &Employee{
		id:   309,
		name: "tuanjie3",
		age:  14,
	}
	var people4 = &Employee{
		id:   413,
		name: "tuanjie4",
		age:  12,
	}
	var people5 = &Employee{
		id:   233,
		name: "tuanjie5",
		age:  21,
	}
	employeeTab.add(people1)
	employeeTab.add(people2)
	employeeTab.add(people3)
	employeeTab.add(people4)
	employeeTab.add(people5)
	employeeTab.show()
}
