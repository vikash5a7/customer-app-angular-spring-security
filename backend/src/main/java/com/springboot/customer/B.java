package com.springboot.customer;

import java.util.Arrays;
import java.util.Scanner;

class B {
	// Function to find a pair in an array with a given sum using sorting
	public static void findPair(int[] nums, int target) {
		// sort the array in ascending order
		Arrays.sort(nums);

		// maintain two indices pointing to endpoints of the array
		int low = 0;
		int high = nums.length - 1;

		// reduce the search space `nums[low…high]` at each iteration of the loop

		// loop till the search space is exhausted
		while (low < high) {
			// sum found
			if (nums[low] + nums[high] == target) {
				System.out.println("Pair found (" + nums[low] + "," + nums[high] + ")");
				return;
			}

			// increment `low` index if the total is less than the desired sum;
			// decrement `high` index if the total is more than the desired sum
			if (nums[low] + nums[high] < target) {
				low++;
			} else {
				high--;
			}
		}

		// we reach here if the pair is not found
		System.out.println("Pair not found");
	}

	public static void main(String[] args) {
		int[] nums = { 8, 7, 2, 5, 3, 1 };
		int target = 10;

		int n;

		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the number of elements you want to store: ");
		// reading the number of elements from the that we want to enter
		n = sc.nextInt();
		// creates an array in the memory of length 10
		int[] array = new int[10];
		System.out.println("Enter the elements of the array: ");
		for (int i = 0; i < n; i++) {
			// reading array elements from the user
			array[i] = sc.nextInt();
		}

		findPair(nums, target);
	}
}