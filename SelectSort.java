public class SelectSort{
	public static void main(String[] args){
		int [] array = { 2,5,6,23,1,10};
		int i, j, min, tmp;
		for(i = 0 ; i < array.length; i++){
			min = i;
			for(j = i+1 ; j < array.length ; j++){ //i+1 이므로 length -1 하지 않는다.
				if(array[j] < array[min])
					min = j;
			}
			tmp = array[i];
			array[i] = array[min];
			array[min] = tmp;
		}

		for(int h = 0 ; h < array.length; h++){
			System.out.println(array[h]+ "");
		}

	}
}