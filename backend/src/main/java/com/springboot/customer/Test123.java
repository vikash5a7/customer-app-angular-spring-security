package com.springboot.customer;

public class Test123 {
	public static void main(String[] args) {
		String input = "hello there! how are you";

		reverseTheWord(input);
	}

	private static void reverseTheWord(String input) {

		String[] inputArray = input.split(" ");
		String output = "";
		for (String inputValue : inputArray) {
			StringBuilder rev = new StringBuilder(inputValue).reverse();
			output = output + " " + rev;
		}
		System.out.println(output.trim());
	}
}
