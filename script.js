
$(document).ready(
	function(){
		$(".lightbox-link").on("click", function(e){
			// prevent default is needed to avoid link taking us to a new page
			e.preventDefault();
			// primarily for testing
			alert("you have clicked!");
			// changes display option to reveal display:none element
			$(".outer-lightbox").css({"display": "block"})
		});

		// clicking anywhere on the page makes the image go away - only relevant if the link has been clicked
		$(".outer-lightbox").on("click", function(){
			$(".outer-lightbox").css({"display": "none"})
		});

		// creating a seperate link that iterates through an array of images
		var imgarray = ["monkeyteeth.jpg", "randomimage.jpg"]
		$(".next-iteration").on("click", function(e){
			alert("you triggered the next iteration")
			// var i = 0
			// i+=1
			// if i > imgarray.length {
			// i = 0}
			// $("#this-image").html("<img id="this-image" src=imgs/"+imagearray[i]+">")}
		});

		// create an array of images
	}
);

