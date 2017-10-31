$(function() {
	var tableSelected;

//On click, opens table reserve form, if table is reserved, nothing happens
$(".table").on("click", function() {
	var className = $(this).attr("class");
	$(this).addClass("selected");
	if (className === "table reserved") {
		}
	else {
	$("#reserveTable").css("display", "block");
	let tablenum = $(this).text();
	$("#tablenum").text(tablenum);
		}
});

//Closes reserve table form and marks table selected as reserved
$("#submit").on("click", function() {
	$(".selected").addClass("reserved");
	$(".selected").removeClass("selected");
	$("#reserveTable").css("display", "none");
});

//Closes reserve table form without marking table as reserved
$("#goback").on("click", function() {
	 $(".selected").removeClass("selected");
	 $("#reserveTable").css("display", "none");
	 return false;
});

//On mouseover of reserved tables, hides mouse cursor to prevent selecting
$(".table").on("mouseover", function() {
	let className = $(this).attr("class");
 	if (className === "table reserved") {
 		$(this).css("cursor", "none");
 	}
});
// $(".table").on("click", function() {
// 	var className = $(this).attr("class");
// 	//var tableSelected = event.target;
// 	if (className === "table reserved") {

// 	}
// 	else {
// 		$(this).toggleClass("reserved");
// 		$("#reserveTable").css("display", "block");
// 		return tableSelected;
// 	}
// });

// $("#submit").on("click", function() {
// 	$("#reserveTable").css("display", "none");
// });


// $(".table").on("hover", 
// function() {
// 	let className = $(this).attr("class");
// 	if (className === "table reserved") {
// 		$(this).css("cursor", "none !important");
// 	}
// }, 
// function() {
// 	$(this).css("cursor", "show");
// });

// $(".table").on("mouseover", function() {
// 	let className = $(this).attr("class");
//  	if (className === "table reserved") {
//  		$(this).css("cursor", "none");
//  	}
// });

// $("#goback").on("click", function(tableSelected) {
// 	let className = $(tableSelected).attr("class");
//  	if (className === "table reserved") {

//  		$(tableSelected).toggleClass("reserved");
//  		$("#reserveTable").css("display", "none");
//  	}
//  	else {
//   		$("#reserveTable").css("display", "none");
//  	}
// });
});