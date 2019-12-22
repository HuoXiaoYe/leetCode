package main

import "fmt"

type Info struct {
	id     int
	name   string
	gender int
}

func add(list []Info, info Info) []Info {
	list = append(list, info)
	return list
}

func main() {
	var arr1 = []Info{
		Info{
			id:     1,
			name:   "tuanjie",
			gender: 1,
		},
		Info{
			id:     2,
			name:   "xiaoye",
			gender: 1,
		},
	}
	var newPeople Info = Info{
		id:     3,
		name:   "boabao",
		gender: 0,
	}
	var list = add(arr1, newPeople)
	fmt.Println(list)
}
