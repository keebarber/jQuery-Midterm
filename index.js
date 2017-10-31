$(function() {
	var tableSelected;

//On click, opens table reserve form, if table is reserved, nothing happens
$(".table").on("click", function() {
	var className = $(this).attr("class");
	$(this).addClass("selected");
	if (className === "table reserved") {
		$(this).off("click");
			}
	else {
		$("#reserveTable").show(300);
		let tablenum = $(this).text();
		$("#tablenum").text(tablenum);
		}
});

//Allows for reserving table on pressing the enter key from an input
$("input").on("keypress", function(event) {
	if (event.key == "Enter") {
	var reserveName = $("#reserveName").val();
	var reserveSize = $("#reserveSize").val();


	$(".details", ".selected").append("<p></p>").text("Party Size:" + reserveSize);
	// $(".details").append("<br/>");
	// $(".details", ".selected").prepend("<p></p>").text("Name:" + reserveName);


	$(".selected").addClass("reserved");
	$(".selected").removeClass("selected");
	// $("#reserveTable").css("display", "none");
	$("#reserveTable").hide(300);
	}

});
//jQuery for keypress on enter
// $('input[type=text]').on('keydown', function(e) {
//     if (e.which == 13) {
//         e.preventDefault();
//     }
// });

//Closes reserve table form and marks table selected as reserved
$("#submit").on("click", function() {
	var reserveName = $("#reserveName").val();
	var reserveSize = $("#reserveSize").val();


	$(".details", ".selected").append("<p>Party Size: " + reserveSize + "</p>");
	// $(".details").append("<br/>");
	$(".details", ".selected").prepend("<p>Name: " + reserveName +"</p>");


	$(".selected").addClass("reserved");
	$(".selected").removeClass("selected");
	// $("#reserveTable").css("display", "none");
	$("#reserveTable").hide(300);

});

//Closes reserve table form without marking table as reserved
$("#goback").on("click", function() {
	 $(".selected").removeClass("selected");
	 // $("#reserveTable").css("display", "none");
	 $("#reserveTable").hide(300);

	 return false;
});

//On mouseover of reserved tables, hides mouse cursor to prevent selecting
$(".table").hover(function() {
	let className = $(this).attr("class");
 	if (className === "table reserved") {
 		$(this).css("cursor", "not-allowed");
 		// $(".details", this).css("display", "block");
 		$(".details", this).show(100);
 		}
 		else {
 			$(this).css("background-color", "rgb(220,220,220)");
 		}
 	},
 	function() {
 		// $(".details", this).css("display", "none");
 		$(".details", this).hide(100);
 		$(this).css("background-color", "#EEEEEE");
 	}
);

});