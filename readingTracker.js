// 

// Repo cs81-module4a-reviewtracker Link
https://github.com/elcode7/cs81-module4a-reviewtracker

// This array stores reading data for the five days in a week.
// Each object represents one reading session with a day, book title, and minutes read.
// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log

// Function: addReadBook
// Purpose: Adds a new reading entry to the reading log.
// Inputs: day (string), book (string), minutes (number).
// Output: No return value; it modifies the readingLog array.
function addReadBook(day, book, minutes) {
  
  // Creates a new object using the function parameters.
  const newEntry = { day, book, minutes };
  
  // Push adds the new reading session to the end of the readingLog array.
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
// Function: totalReadingMinutes
// Purpose: Calculates the total minutes spent reading.
// Inputs: log (array of reading objects).
// Output: Returns a single number representing total reading time.
function totalReadingMinutes(log) {
  let total = 0;
  
  // This loop goes through each reading entry in the log.
  for (let entry of log) {
    total += entry.minutes;
  }
  // Returning the final total.
  return total;
}

// Returns the book read most frequently
// Purpose: Determines which book appears most often in the log.
// Inputs: log (array of reading objects).
// Output: Returns the title of the most frequently read book.
function mostReadBook(log) {
  const bookCounts = {};
  
  // Loop counts how many times each book appears in the log.
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;

  // This loop checks which book has the highest count.
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
   // Returns the book title with the highest frequency.
  return maxBook;
}
// Prints a summary of minutes read per day
// Purpose: Displays each day's reading activity in the console.
// Inputs: log (array of reading objects).
// Output: No return value; prints formatted output.
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// Existing test case: adds a Saturday reading entry.
addReadBook("Saturday", "Dune", 50);

// NEW TEST CASE:
// Adds a Sunday reading session to test the function with new data.
addReadBook("Sunday", "The Hobbit", 35);

// Prints a summary of all reading entries.
printDailySummary(readingLog);

// Displays the total minutes read during the week.
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Displays the total minutes read during the week.
console.log("Most read book:", mostReadBook(readingLog));


// IMPROVEMENT SUGGESTION:
// The addReadBook function could be improved by validating input.
// For example, checking that "minutes" is a positive number would
// prevent invalid or incorrect data from being added to the log.
