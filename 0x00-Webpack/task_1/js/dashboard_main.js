import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(() => {
  // Append paragraphs in order
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');

  // Create button and paragraph with ID
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  // Append copyright paragraph
  $('body').append('<p>Copyright - Holberton School</p>');
});

