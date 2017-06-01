console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';



function makeMiddleEarth() {
  // your answers here

  //create a section tag with an id of 'middle-earth'
  $('body').append($("<section></section>").attr('id', "middle-earth"));


  for(var i = 0; i < lands.length; i++){
    $('#middle-earth').append($("<article></article>").attr('id', lands[i]));
    $($('article')[i]).append($("<h1></h1>").html(lands[i]));
  }


}

makeMiddleEarth();

var theShire = $("article").eq(0);
var rivendell = $("article").eq(1);
var mordor = $("article").eq(2);

function makeHobbits(){
  // your answers here
   $('article').eq(0).append("<ul></ul>");
   for(var i = 0; i < hobbits.length; i++){

      $('ul').append($("<li></li>").attr('class', 'hobbit').html(hobbits[i]));

   }
}

makeHobbits();

var frodo = $($('li').eq(0));
var sam = $($('li').eq(1));
var merry = $($('li').eq(2));
var pippin = $($('li').eq(3));
function keepItSecretKeepItSafe(){
  // your answers here
  frodo.append($($('<div></div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry')));

}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
   $('article').eq(1).append("<aside></side>");
   $('aside').append("<ul></ul>");
   for(var i = 0; i < buddies.length; i++){

      $('ul').eq(1).append($("<li></li>").html(buddies[i]));

   }

}

makeBuddies();

function beautifulStranger(){
  // your answers here

   $('aside ul li').eq(3).html('Aragorn');
}

beautifulStranger();

function leaveTheShire(){
  // your answers here

 
    $('aside').append($('ul').eq(0));

  
}



leaveTheShire();

var fellowshipMembers = $('article').eq(1).find('li');

function forgeTheFellowship() {
  // your answers here

  $(rivendell).append($("<div></div>").attr('id', 'the-fellowship'));
  for(var i = 0; i < fellowshipMembers.length; i++){

 
    $('#the-fellowship').append($(fellowshipMembers).eq(i));
    alert($(fellowshipMembers.eq(i)).text() + " have joined your party"); 
  }

}

forgeTheFellowship();

function theBalrog(){
  // your answers here

  $(fellowshipMembers).eq(0).html("Gandalf the White");
  $(fellowshipMembers).eq(0).css({"border-color": "grey",
                                  "border-width": "1px",
                                  "border-style": "solid",
                                    "background-color": "white"});




}

theBalrog();

var boromir = $(fellowshipMembers).eq(4);

function hornOfGondor() {
  // your answers here

  alert("the horn of gondor has been blown, Boromir's been killed by the Uruk-hai"); 

    boromir.remove();
}

hornOfGondor();

var sam = $(fellowshipMembers).eq(5);
frodo = $(fellowshipMembers).eq(4);


function itsDangerousToGoAlone() {
  // your answers here
  mordor.append($(fellowshipMembers).eq(5));
  mordor.append($(fellowshipMembers).eq(6));
  mordor.append($("<div></div>").attr('id', 'mount-doom'));
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  mordor.append($("<div></div>").attr('id', 'gollum'));
  $('#gollum').append($('#the-ring'));
  $('#gollum').append($('#mount-doom'));
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  $('#gollum').remove();

  for(var i = 5; i < 9; i ++){

    theShire.append($(fellowshipMembers).eq(i));
  }



}

thereAndBackAgain();
