public class ArrayStack{
	private int top;
	private int maxSize;
	private Object[] stackArray;

	public ArrayStack(int maxSize){
		this.maxSize = maxSize;
		this.stackArray = new Object[maxSize];
		this.top = -1;
	}

	public boolean isEmpty(){
		return top == -1; //-1 이면 비어있는 것

	}

	public boolean isFull(){
		return top == maxSize-1;
	}

	public void push(Object item){
		if(isFull()){
			throw new Error("Full");
		}
		top++;
		stackArray[top] = item;
	}

	public Object pop(){
		if(isEmpty()){
			throw new Error("Empty!");
		}
		top--;
		return stackArray[top];
	}

	@java.lang.Override
	public java.lang.String toString() {
		return "ArrayStack{" +
				"top=" + top +
				", maxSize=" + maxSize +
				", stackArray=" + java.util.Arrays.toString(stackArray) +
				'}';
	}

	public static void main(String[] args){
//		System.out.println("aa");
		ArrayStack arrayStack = new ArrayStack(5);
		arrayStack.push(3);
		arrayStack.toString();
	}

}