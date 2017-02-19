(function(){
	list = document.getElementsByTagName("li");

	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener("click",function () {
			if(this.classList[0] == "lecture"){
				document.getElementsByClassName("lecture")[0].classList.add("selected");
				document.getElementsByClassName("exercise")[0].classList.remove("selected");
				document.getElementById("lecture").style.display="block";
				document.getElementById("exercise").style.display="none";

			}
			else{
				document.getElementsByClassName("lecture")[0].classList.remove("selected");
				document.getElementsByClassName("exercise")[0].classList.add("selected");
				document.getElementById("lecture").style.display="none";
				document.getElementById("exercise").style.display="block";
			}
		})

	}


	var quests = document.getElementsByClassName("question");
	console.log(quests);
	
	for(var i=0; i< quests.length; i++){
		quests[i].addEventListener("click",function(){
			var display = this.getElementsByClassName('answer')[0].style.display || 'none';
		
			this.getElementsByClassName('answer')[0].style.display = display=="none" ? 'block' : 'none' ;
		})
	}
	
})();

