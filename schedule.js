var firebaseConfig = {
    apiKey: "AIzaSyA45M0-rZGNcT9kGfpw3ty_lW7lGYhBac8",
    authDomain: "project001-d68e4.firebaseapp.com",
    databaseURL: "https://project001-d68e4.firebaseio.com",
    projectId: "project001-d68e4",
    storageBucket: "project001-d68e4.appspot.com",
    messagingSenderId: "903222888182",
    appId: "1:903222888182:web:6b6fb1db544b897a"
  };
firebase.initializeApp(firebaseConfig);
let employeeRole = "";
let employeeName = "";
let startDate = "";
let monthlyRate = "";

var database = firebase.database();

  // Code for handling the push

$("#submit-info").on("click", function(event) {
    event.preventDefault();
    employeeRole = $("#employee-role").val();
    record.role = employeeRole;

    employeeName = $("#employee-name").val();
    record.name = employeeName;

    startDate = $("#start-date").val();
    record.startingDate = startDate;

    monthlyRate = $("#monthly-rate").val();
    record.rate = monthlyRate;

    database.ref().push(record);
    // let reference = $("#name");
    //console.log(reference);
    // $("#newTable").append("<tr><td>" + employeeName + "</td></tr>");
            var markup = "<tr><td>" + $("#name").text(employeeName) + "</td><td>" + $("#role").text(employeeRole) + "</td><td>" + $("#start").text(startDate) + "</td><td>" + $("#rate").text(monthlyRate) + "</tr>";
            $("table tbody").append(markup);
        });  
    console.log("Hello there");

var record = {
    name: employeeName,
    role: employeeRole,
    startingDate: startDate,
    rate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

}