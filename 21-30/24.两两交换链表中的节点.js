/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:
给定 1->2->3->4, 你应该返回 2->1->4->3.
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
var swapPairs = function(head) {
    if(head == null) return head
    let temp1 = head;
    let temp2 = head.next
    // 长度为奇数  需要考虑吗？？
    while(true){
        if(temp1==null||temp2==null) break
        // js中没有指针 怎么进行节点交换呢
        [temp1.val, temp2.val] = [temp2.val,temp1.val]
        temp1 = temp2.next;
        if(temp1) temp2 = temp1.next
    }
    return head
};