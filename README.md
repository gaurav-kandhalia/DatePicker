React Recurring Date Picker Component

This project is a reusable Recurring Date Picker Component built using React and Next.js. The component allows users to select recurring patterns for tasks, such as Daily, Weekly, Monthly, or Yearly, with custom date ranges and task inputs.

The project includes multiple components to handle date selection, task management, and recurring logic, integrated with Tailwind CSS for styling.

Features
Recurring Date Selection: Choose recurring patterns (Daily, Weekly, Monthly, or Yearly).
Task Management: Add tasks with custom time and intervals for the selected dates.
Dynamic Highlighting: Dates with assigned tasks are highlighted.
Date Range Selection: Define start and end dates for the recurring pattern.
State Management: Managed using React Context API to ensure data is accessible across components.



Demo
Here's a walkthrough of the main components and their usage.

Main Component
The Main component provides the context for date selection and renders the Calender component, which is the primary user interface for date and task selection.

jsx

Calender Component
The Calender component allows users to select dates and assign tasks. It also supports viewing the tasks for highlighted dates.


Task Component
The Task component allows users to assign tasks, intervals, and specific times for the recurring dates.



Context API
The Context API (DatePickerProvider) manages the global state for the date picker, including selected dates, task details, and recurring pattern options.



Built With
React
Next.js
Tailwind CSS
React Datepicker


Folder Structure
bash
Copy code
.
├── components
│   ├── Calendar.js
│   ├── Card.js
│   ├── Task.js
│   ├── MyNotes.js
│   ├── Input.js
│   └── Pattern.js
├── context
│   └── context.js
├── utils
│   └── CalculateRecurringDates.js
└── pages
    └── index.js



    Author: Gaurav Kandhalia
GitHub: https://github.com/gaurav-kandhalia
LinkedIn: https://www.linkedin.com/in/gaurav-kandhalia-38157331b/




 all is working properly for daily , weekly , monthly ,yearly

user can select date, range between dates,

selected dates should get highlighted according to the inputs given by the user

a calender will show the hightlighted on which when user click it displays the information set according to the date

i have not stored the dates set by the user

website is not responsive 

i have not used any external function 

i have only used react DatePicker for the display of calender 

