var toDo = [
  {
    item: "HTML/CSS/JavaScript",
  },
  {
    item: "Node/SQL",
  },
  {
    item: "React/Mongo",
  },
  {
    item: "Software/Mobile Day",
  },
  {
    item: "Learn something new",
  },
  {
    item: "You pick",
  },
  {
    item: "Research day",
  }
];

var myWeek = [];


function scheduler() {
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

function shuffle() {
  var j, x, i;
  for (i = toDo.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = toDo[i];
    toDo[i] = toDo[j];
    toDo[j] = x;
  }
  createSchedule();
}

function createSchedule() {
  for (i = 0; i < myWeek.length; i++) {
    if (myWeek[i].work === "off") {
      myWeek[i].item = toDo[i].item + " deep dive and a project"
    }
    if (myWeek[i].work === "half day") {
      myWeek[i].item = toDo[i].item + " and project or research"
    }
    if (myWeek[i].work === "full day") {
      myWeek[i].item = toDo[i].item
    }
    if (myWeek[i].work === "busy") {
      myWeek[i].item = toDo[i].item + " quick n' dirty"
    }

  }
  runResults();
}

function runResults() {
  $("#results").css("display", "block");
  $("#main").css("display", "none");
  $("#results").html("<table>")
  $("#results").append("<th>Day</th>" + "<th>Work</th>" + "<th>Learn</th>")
  for (i = 0; i < myWeek.length; i++) {
    $("#results").append("<tr>")
    $("#results").append("<td>" + myWeek[i].day + "</td>" + "<td>" + myWeek[i].work + "</td>" + "<td>" + myWeek[i].item + "</td>")
    $("#results").append("</tr>")
  }
  $("#results").append("<button onclick='reset()'>Reset</button>");
  $("#results").append("</table>")
}

function reset() {
  event.preventDefault();
  $("#results").css("display", "none");
  $("#main").css("display", "block");
}

