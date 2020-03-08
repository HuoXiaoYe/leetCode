/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(!head) return head;
    let p = resHead = new ListNode(0);
    p.next = head;
    let front = null, tail = null;
    for(let i=0;i<m-1;i++){
        p = p.next;
    }
    tail = p.next;
    front = p;
    let pre = tail;
    let cur = pre.next;
    for(var i=0;i<n-m;i++){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    tail.next = cur;
    front.next = pre
    return resHead.next
};