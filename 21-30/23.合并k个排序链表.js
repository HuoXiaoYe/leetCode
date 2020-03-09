
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


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head) return head;
    let pre = null, p = head;
    let cur = head;
    for(let i=0;i<k;i++){
        if(p==null) return head;
        p = p.next;
    }
    for(var i=0;i<k;i++){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head.next = reverseKGroup(cur,k);
    return pre
};






/*
[ ListNode { val: 1, next: ListNode { val: 4, next: null } },
  ListNode { val: 1, next: ListNode { val: 3, next: null } },
  ListNode { val: 2, next: ListNode { val: 6, next: null } } ]
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function (lists) {
    let res = new ListNode(-1);
    let temp = res;
    let arr = []
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
    return res.next
};
