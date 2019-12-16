/*
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function (l1, l2) {
    let res = new ListNode(-1);
    let temp = res;
    while (l1 !== null || l2 !== null) {
        let x = l1 ? l1.val : Number.MAX_VALUE
        let y = l2 ? l2.val : Number.MAX_VALUE
        console.log(x ,"============", y)
        // console.log(Number.MAX_VALUE)
        if (x > y) {
            temp.next = new ListNode(y);
            temp = temp.next
            l2 = l2 ? l2.next : null
        } else if (x == y) {
            temp.next = new ListNode(y);
            temp = temp.next
            temp.next = new ListNode(x);
            temp = temp.next
            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        } else { // x < y
            temp.next = new ListNode(x);
            temp = temp.next
            l1 = l1 ? l1.next : null
        }
    }
    return res.next
};

let l1 = { val: 1, next: { val: 2, next: { val: 5, next: null } } }
let l2 = { val: 1, next: { val: 4, next: { val: 6, next: null } } }

let rs = mergeTwoLists(l1, l2)
console.log(rs)