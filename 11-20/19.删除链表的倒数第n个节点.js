/*
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
示例：
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：
给定的 n 保证是有效的。
进阶：
你能尝试使用一趟扫描实现吗？
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n == 0) return head;
    if (head == null) return null;
    if (head.next == null) return null;
    let temp1 = head;
    let temp2 = head
    let cur = 0;
    let prev = 0;
    let flag = true 
    let delPrev = temp2;
    while(temp1){
        cur++ // 第一个节点
        if(cur-prev>=n+1){ // n + 1 = 3
            flag = false
            delPrev = temp2;
            temp2 = temp2.next
            prev++
        }
        temp1 = temp1.next;
    }
    // console.log(delPrev,head)
    if(delPrev == head&&flag){
        if(n==1){
            head.next = null
        }else{
            head = head.next
            console.log(head)
        }
    }else{
        delPrev.next = delPrev.next.next ? delPrev.next.next : null;
    }
    return head
};