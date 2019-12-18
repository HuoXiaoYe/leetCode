
/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
*/







/*
[ ListNode { val: 1, next: ListNode { val: 4, next: null } },
  ListNode { val: 1, next: ListNode { val: 3, next: null } },
  ListNode { val: 2, next: ListNode { val: 6, next: null } } ]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // console.log(lists)
    var res = new ListNode(-1);
    var temp = res;
    var arr = []
    lists.forEach(item => {
        while (true) {
            if (item == null) break
            arr.push(item.val)
            item = item.next
        }
    })

    arr.sort((a, b) => (a - b))
    arr.forEach((item)=>{
        temp.next = new ListNode(item);
        temp = temp.next
    })
    // console.log(res.next)
    return res.next
};

var lists = [{ val: 1, next: { val: 4, next: null } },
{ val: 1, next: { val: 3, next: null } },
{ val: 2, next: { val: 6, next: null } }];


mergeKLists(lists)
