/*
反转一个单链表。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function (head) {
    let res = null;
    let temp = head;
    while (true) {
        if (temp == null) break;
        let node = new ListNode(temp.val);
        node.next = res;
        res = node;
        temp = temp.next;
    }
    return res
};