public class BubbleSort{
	public static void main(String[] args){
		// int [] array = { 2,5,6,23,1,10};
		int [] array = { 1,2,3,4,5,6};
		int i, j, flag, tmp;
		for(i = 0 ; i < array.length-1 ; i++){
			flag = 0;
			for(j = 0; j < array.length-1-i ; j++){
				System.out.println("비교");
				if(array[j] > array[j+1]){
					tmp = array[j];
					array[j] = array[j+1];
					array[j+1] = tmp;
					flag = 1;
				}
			}
			if(flag == 0)
				break;
		}

		for(int h = 0 ; h < array.length; h++){
			System.out.println(array[h]+ "");
		}

	}
}