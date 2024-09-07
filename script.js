function firstWord(s) {
  // your code here

	 s = s.trim();

	let str="";
	for(let i=0;i<s.length;i++){
		if(s[i]==" ")
			return str;
		str+=s[i];
	}
	
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
