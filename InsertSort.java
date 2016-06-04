public class InsertSort{
	public static void main(String[] args){
		//http://bitnori.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%82%BD%EC%9E%85%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
		int[] array = {4,1,8,2,10};
		int i;// 비교 인덱스
		int j;// 정렬된 배열 인덱스
		int key; // 비교 값
		for(i = 1 ; i < array.length; i++){
			key = array[i];
			j = i-1;
			while( j>=0 && array[j] > key){
				array[j+1] = array[j];
				j--;
			}
			array[j+1] = key;
		}

		for(int h = 0 ; h < array.length; h++){
			System.out.println(array[h]+ "");
		}
	}
}