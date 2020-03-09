// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输
// 入前序遍历序列 {1,2,4,7,3,5,6,8} 和中序遍历序列 {4,2,7,1,5,3,8,6}，则重建二叉树并返回。


function ListNode(val) {
    this.val = val;
    this.left = null;
    this.right = null
}

let arr1 = [1, 2, 4, 7, 3, 5, 6, 8];
let arr2 = [4, 2, 7, 1, 5, 3, 8, 6]
/**
 * 
 * @param {*} arr1 前序遍历
 * @param {*} arr2 中序遍历
 */
// [1,2,3].indexof
function createBinaryTree(arr1, arr2) {
    if (arr2.length == 1) {
        return new ListNode(arr2[0])
    }
    if (arr2.length == 3) {
        // 这是一颗子树
        let leftV = arr2[0]
        let rootV = arr2[1]
        let rightV = arr2[2];
        let root = new ListNode(rootV);
        let left = new ListNode(leftV);
        let right = new ListNode(rightV)
        root.left = left;
        root.right = right
        return r
    }
    if (arr2.length == 2) {
        //判断是左子树还是右子树
        if (arr1[arr1.indexOf(arr2[0]) + 1] == arr[2]) { // 右子节点 
            let rootV = arr2[0]
            let rightV = arr2[1]
            let root = new ListNode(rootV);
            let right = new ListNode(rightV)
            root.right = right
            return r
        } else { // 左子节点
            let rootV = arr2[1]
            let leftV = arr2[0]
            let root = new ListNode(rootV);
            let left = new ListNode(leftV)
            root.left = left
            return r
        }

        return
    }

    let rootV = arr1[0];
    let leftArr = arr2.splice(0, arr2.indexOf(rootV)) // [4,2,7]
    let rightArr = arr2.splice(arr2.indexOf(rootV) + 1) // [5,3,8,6]

    // let root = new ListNode(rootV);
    console.log(arr1.slice(1, leftArr.length + 1))
    console.log(arr1.slice(leftArr.length + 1))
    // 递归创建子树
    root.left = createBinaryTree(arr1.slice(1, leftArr.length+1),leftArr);
    root.right = createBinaryTree(arr1.slice(leftArr.length + 1),rightArr)
    return root;
}


createBinaryTree(arr1, arr2);
