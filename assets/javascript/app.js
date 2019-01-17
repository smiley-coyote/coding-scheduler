var toDo =[
  {
    item: "HTML/CSS/JavaScript"
  },
  {
    item:"Node/SQL"
  },
  {
    item:"React/Mongo"
  },
  {
    item:"Software/Mobile Day"
  },
  {
    item:"Learn something new or catch up on something old"
  }
];

var myWeek = [];


function scheduler(){
  event.preventDefault();
  myWeek = [
    {
      day: "Monday",
      work: $("#monday").val(),
      item: ""
    },
    {
      day: "Tuesday",
      work: $("#tuesday").val(),
      item: ""
    },
    {
      day: "Wednesday",
      work: $("#wednesday").val(),
      item: ""
    },
    {
      day: "Thursday",
      work: $("#thursday").val(),
      item: ""
    },
    {
      day: "Friday",
      work: $("#friday").val(),
      item: ""
    },
    {
      day: "Saturday",
      work: $("#saturday").val(),
      item: ""
    },
    {
      day: "Sunday",
      work: $("#sunday").val(),
      item: ""
    }
  ]
shuffle();
}

function shuffle(){
  var j, x, i;
  for (i = toDo.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = toDo[i];
      toDo[i] = toDo[j];
      toDo[j] = x;
  }
  createSchedule();
}

function createSchedule(){
  for(i=0;i<myWeek.length; i++){
    for(x=0;x<toDo.length; x++){
    }
  }
}