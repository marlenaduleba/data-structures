import { TreeNode } from "./../../src/data-structures/BinaryTree";
import { isValidBST } from "./../../src/algorithms/BinarySearchTreeCheck";

/**
 * Test suite for the isValidBST function.
 */
describe("isValidBST", () => {
  // Test to verify an empty tree is considered a valid BST
  it("should return true for an empty tree", () => {
    expect(isValidBST(null)).toBe(true);
  });

  // Test to verify a single node tree is a valid BST
  it("should return true for a single node tree", () => {
    const root = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });

  // Test to verify a valid BST with multiple nodes
  it("should return true for a valid BST", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(6);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(20);

    expect(isValidBST(root)).toBe(true);
  });

  // Test to ensure the function correctly identifies a non-BST where a right node violates the BST property
  it("should return false for a binary tree that is not a BST (right node too small)", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(8); // Incorrect, should be > 10

    expect(isValidBST(root)).toBe(false);
  });

  // Test to ensure the function correctly identifies a non-BST where a left node violates the BST property
  it("should return false for a binary tree that is not a BST (left node too large)", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(15); // Incorrect, should be < 10
    root.right = new TreeNode(20);

    expect(isValidBST(root)).toBe(false);
  });

  // Test to verify the function's accuracy with deeper tree structures
  it("should return false for a complex tree that is not a BST", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(6);
    root.right.left = new TreeNode(9); // Incorrect, should be > 10
    root.right.right = new TreeNode(20);

    expect(isValidBST(root)).toBe(false);
  });
});
