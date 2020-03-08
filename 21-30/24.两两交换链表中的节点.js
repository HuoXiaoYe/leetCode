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
    if(head ==null || head.next == null) return head;
    let dummyHead = p = new ListNode();
    p.next = head;
    let node1,node2;
    while((node1 = p.next) && (node2 = p.next.next)){
        node1.next = node2.next;
        node2.next = node1;
        p.next = node2;
        p = node1;
    }
    return dummyHead.next
};