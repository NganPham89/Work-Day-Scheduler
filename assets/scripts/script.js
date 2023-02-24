// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



let todayDate = dayjs();
$('#currentDay').text(todayDate.format('dddd, MMMM D (hh:mm:ss)'));


let currentTime = dayjs().format('hh:mm');







//9-5 is 8 hours, 5pm is 17, need to make 8 blocks, add class="time-block" to each block

let allTimeSlots = ["09:00", "10:00", "11:00", "12:00", "01:00", "02:00", "03:00", "04:00", "05:00"]

function generateBlock() {
  for (var i = 0; i < allTimeSlots.length; i++) {
    let newTimeBlock = $('<div>');
    let newHourLabel = $('<div>');
    let newDescription = $('<textarea>');
    let newButton = $('<button>');
    $('.container-fluid').append(newTimeBlock.append(newHourLabel, newDescription, newButton));
    newTimeBlock.attr({ id: "h" + [i + 9], class: "row time-block" });
    newHourLabel.attr("class", "col-2 col-md-1 hour text-center py-3");
    newDescription.attr({ id: "hr" + [i + 9], class: "col-8 col-md-10 description", row: "3" });
    newButton.attr({ class: "btn saveBtn col-2 col-md-1", 'aria-label': "save" });
    newButton.html(`<i class="fas fa-save" aria-hidden="true"></i>`);
    if (i < 4) {
      newHourLabel.text(allTimeSlots[i] + " AM");
    } else {
      newHourLabel.text(allTimeSlots[i] + " PM");
    }
  }
}

generateBlock();


let saveButton = $(".saveBtn");

saveButton.click(function () {
  let descriptionValue = $(this).siblings(".description").val();
  let descriptionKey = $(this).parent().attr("id");
  localStorage.setItem(descriptionKey, descriptionValue);
})

function retrieveDescription() {
  for (var i = 0; i < allTimeSlots.length; i++) {
    let descriptionKey = "h" + [i + 9];
    $("#hr" + [i+9]).val(localStorage.getItem(descriptionKey));
  }
}




/* let timeBlockPlan = {
  description: timeBlockDescription,
  time: currentTime
};
tempPlanContainer.push(timeBlockPlan);
console.log(tempPlanContainer); */














$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
