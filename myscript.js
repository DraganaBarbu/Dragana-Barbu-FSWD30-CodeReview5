var persons = [
  	{
		name: 'John',
		surname: 'Doe',
		favoritePerformers: ["fsfs fsfs", "dad lkn", "bal bla"],
		age: 18+"+",
	   	myPhoto: "boy1.jpg",	
		likes: 0    // store likes
	},

	{
		name: 'Jane',
		surname: 'Doe',
		favoritePerformers: ["ball", "dasd", "eradfc"],
		age: 18+"+",
		myPhoto: "girl1.jpg",
		likes: 0
	},

	{
		name: 'Petra',
		surname: 'Hartmann',
		favoritePerformers: ["ölmfs", "ödkam", "sdaas"],
		age: 18+"+",
		myPhoto: "girl2.jpg",
		likes: 0
	},

	{
		name: 'Lyn',
		surname: 'Muster',
		favoritePerformers: ["fljsdnf", "kfjcnsdk", "lfkjngd"],
		age: 18+"+",
		myPhoto: "boy2.jpg",
		likes: 0
	}
];

$("#name1").append("Name: " + persons[0].name);
$("#surname1").append("Surname: " + persons[0].surname);
$("#age1").append("Age: " + persons[0].age);
$('#img1').html('<img src=' + persons[0].myPhoto + ' width="100%">');

$("#name2").append("Name: " + persons[1].name);
$("#surname2").append("Surname: " + persons[1].surname);
$("#age2").append("Age: " + persons[1].age);
$('#img2').html('<img src=' +persons[1].myPhoto + ' width="100%">');

$("#name3").append("Name: " + persons[2].name);
$("#surname3").append("Surname: " + persons[2].surname);
$("#age3").append("Age " + persons[2].age);
$('#img3').html('<img src=' + persons[2].myPhoto + ' width="100%">');

$("#name4").append("Name: " + persons[3].name);
$("#surname4").append("Surname: " + persons[3].surname);
$("#age4").append("Age: " + persons[3].age);
$('#img4').html('<img src=' + persons[3].myPhoto + ' width="100%">');


//THE  LIKES 
var click = persons[0].likes; 
$("#like1").click(function() { 
	click++; 
	$('#l1').html(click);
});

var like = persons[1].likes; 
$("#like2").click(function() { 
	like++; 
	$('#l2').html(like);
});

var gef = persons[2].likes;
$("#like3").click(function() { 
	gef++; 
	$('#l3').html(gef);
});

var likes = persons[3].likes;
$("#like4").click(function() { 
	likes++; 
	$('#l4').html(likes);
});