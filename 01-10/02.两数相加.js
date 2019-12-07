/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 
逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
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

var addTwoNumbers = function(l1, l2) {
    var result = new ListNode();
    var temp = result;
    let num = 0;
    let params = 0;
    console.log(l1)
    console.log(l2)
    while(l1||l2){
        let x = (l1 != null) ? l1.val : 0;
        let y = (l2 != null) ? l2.val : 0;
        num = (x + y + params) % 10
        temp.val = num;
        params = x + y + params >= 10 ? 1 : 0;
        if(l1!=null) l1 = l1.next;
        if(l2!=null) l2 = l2.next;
        if(l1||l2){
            temp.next = new ListNode();
            temp = temp.next
        }
    }
    if(params){
        temp.next = new ListNode(params)
    }
    return result
};

/*
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(null);
    let nextRst = result;
    // 进位
    let carry = 0; // 传递给下一层级的值
    let val = 0; // 传递给当前层级的值
  
    while (l1 != null || l2 != null) {
      // todo
      let x = l1 != null ? l1.val : 0;
      let y = l2 != null ? l2.val : 0;
  
      val = (x + y + carry) % 10;
      carry = Math.floor((x + y + carry) / 10);
  
      nextRst.next = new ListNode(val);
      nextRst = nextRst.next;
  
      if (l1 != null) l1 = l1.next;
      if (l2 != null) l2 = l2.next;
    }
  
    if (carry) {
      nextRst.next = new ListNode(carry);
    }
  
    return result.next;
  };



*/