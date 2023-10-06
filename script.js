const toggleSidebar = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});



// JavaScript code to handle the form and show/hide the task form

const taskFormDiv = document.getElementById('task-form-div');
const taskForm = document.getElementById('task-form');
const tasksButton = document.querySelector('.sidebar ul li:nth-child(2) a');

// Function to show the task creation form
function showTaskForm() {
    taskFormDiv.style.display = 'block';
}

// Function to hide the task creation form
function hideTaskForm() {
    taskFormDiv.style.display = 'none';
}

// Event listener for clicking the "Tasks" button in the sidebar
tasksButton.addEventListener('click', () => {
    // Show the task creation form when the "Tasks" button is clicked
    showTaskForm();
});

// Event listener for clicking the "Cancel" button in the form
document.getElementById('cancel-button').addEventListener('click', () => {
    // Hide the task creation form when the "Cancel" button is clicked
    hideTaskForm();
});

// Event listener for submitting the task creation form
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
    
    // Get and display the form data (you can send this data to your server)
    const formData = new FormData(taskForm);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Hide the task creation form after submission (you can modify this behavior)
    hideTaskForm();
});





document.addEventListener("DOMContentLoaded", function () {
    const valueInput = document.getElementById("assign-to");
    const valuesContainer = document.getElementById("valuesContainer");

    valueInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission on Enter key

            const value = valueInput.value.trim();

            if (value !== "") {
                // Create a new element to display the value
                const valueElement = document.createElement("div");
                valueElement.textContent = value;

                const closeIcon = document.createElement("span");
                closeIcon.className = "close-icon";
                closeIcon.textContent = "❌";
                valueElement.appendChild(closeIcon);

                // Add a click event listener to the close icon to remove the value
                closeIcon.addEventListener("click", function () {
                    valuesContainer.removeChild(valueElement);
                });

                // Add the value to the container
                valuesContainer.appendChild(valueElement);

                // Clear the input field
                valueInput.value = "";
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const valueInput = document.getElementById("who-can-view");
    const valuesContainer = document.getElementById("valuesContainer1");

    valueInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission on Enter key

            const value = valueInput.value.trim();

            if (value !== "") {
                // Create a new element to display the value
                const valueElement = document.createElement("div");
                valueElement.textContent = value;

                const closeIcon = document.createElement("span");
                closeIcon.className = "close-icon";
                closeIcon.textContent = "❌";
                valueElement.appendChild(closeIcon);

                // Add a click event listener to the close icon to remove the value
                closeIcon.addEventListener("click", function () {
                    valuesContainer.removeChild(valueElement);
                });

                // Add the value to the container
                valuesContainer.appendChild(valueElement);

                // Clear the input field
                valueInput.value = "";
            }
        }
    });
});









// Array to store file details and file objects
const fileDetails = [];

// Function to display file information
function displayFile(file) {
    const fileList = document.getElementById('file-list');

    // Create a new list item to display file info
    const listItem = document.createElement('div');
    listItem.classList.add('file-item');

    // Create headings for title, last modified, and file size
    const titleHeading = document.createElement('div');
    titleHeading.classList.add('file-heading');
    titleHeading.textContent = 'Title:';

    const lastModifiedHeading = document.createElement('div');
    lastModifiedHeading.classList.add('file-heading');
    lastModifiedHeading.textContent = 'Last Modified:';

    const sizeHeading = document.createElement('div');
    sizeHeading.classList.add('file-heading');
    sizeHeading.textContent = 'File Size:';

    // Create elements for title, last modified, and file size
    const titleElement = document.createElement('div');
    titleElement.classList.add('file-info');
    titleElement.textContent = file.name;

    const lastModifiedElement = document.createElement('div');
    lastModifiedElement.classList.add('file-info');
    lastModifiedElement.textContent = file.lastModifiedDate.toLocaleString();

    const sizeElement = document.createElement('div');
    sizeElement.classList.add('file-info');
    sizeElement.textContent = (file.size / 1024).toFixed(2) + ' KB';

    // Append headings and elements to the list item
    listItem.appendChild(titleHeading);
    listItem.appendChild(titleElement);
    listItem.appendChild(lastModifiedHeading);
    listItem.appendChild(lastModifiedElement);
    listItem.appendChild(sizeHeading);
    listItem.appendChild(sizeElement);

    // Append the list item to the file list
    fileList.appendChild(listItem);

    // Store the file object directly in the file item as a data attribute
    listItem.dataset.fileObject = JSON.stringify(file);

    // Add a click event listener to each file item for accessing the file object
    listItem.addEventListener('click', handleFileItemClick);
}

// Function to handle file item click
function handleFileItemClick() {
    // Access the file object from the data attribute of the clicked file item
    const fileObject = JSON.parse(this.dataset.fileObject);
    // You can now access the file object (fileObject) for further processing
    console.log('Clicked file:', fileObject);
}

// Function to handle file input change event
document.getElementById('file').addEventListener('change', function (event) {
    const files = event.target.files; // Get selected files

    // Iterate through the selected files
    for (const file of files) {
        displayFile(file);
    }
});






















// Function to execute when the "Save" button in main-content1 is clicked
document.querySelector('#main-content1 button#save-button').addEventListener('click', function () {
    // Get the div1 element
    const div1 = document.querySelector('#div1');
    
    // Get the div1-firstline element
    const div1Firstline = document.querySelector('#div1-firstline');

    // Clear existing content in div1 (excluding div1-firstline)
    while (div1.children.length > 1) {
        div1.removeChild(div1.lastChild);
    }
    
    // Add "Assigned To:" label before values from valuesContainer
    const assignedToLabel = document.createElement('h3');
    assignedToLabel.textContent = 'Assigned To:';
    div1.appendChild(assignedToLabel);
    
    // Retrieve values from valuesContainer (the "Assign to" label) added by pressing Enter
    const valuesContainer = document.getElementById('valuesContainer');
    const valuesContainerValues = valuesContainer.querySelectorAll('div:not(.close-icon)');
    valuesContainerValues.forEach(valueElement => {
        const value = valueElement.textContent;
        const paragraph = document.createElement('h3');
        paragraph.textContent = value;
        div1.appendChild(paragraph);
    });

    const userEmail = localStorage.getItem('userEmail');

    
    const assignedByHeader = document.createElement('h3');
    if (userEmail) {
    assignedByHeader.textContent = 'Assigned by: ' + userEmail;
    div1.appendChild(assignedByHeader);
    }else{
        assignedByHeader.textContent = 'Assigned by:';
       div1.appendChild(assignedByHeader);
    }

    // Get all label and input elements from main-content1
    const labelsAndInputs = document.querySelectorAll('#main-content1 label, #main-content1 input, #main-content1 select, #main-content1 textarea');
    
    // Iterate over each label and input element in main-content1
    labelsAndInputs.forEach(element => {
        // Check if the element is an input (textbox, dropdown, or textarea)
        if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'select' || element.tagName.toLowerCase() === 'textarea') {
            // Get the value of the input
            const value = element.value;
            
            // Create a new paragraph element to display the value
            const paragraph = document.createElement('p');
            
            // Set the paragraph's text content to the value
            paragraph.textContent = value;

        
            
            // Append the paragraph to div1
            div1.appendChild(paragraph);
        } else {
            // Clone the element (label) if it's not "Who Can View," "Assign To," or "valuesContainer"
            if (element.getAttribute('for') !== 'who-can-view' && element.getAttribute('for') !== 'assign-to' && element.getAttribute('for') !== 'valuesContainer') {
                const clone = element.cloneNode(true);
                div1.appendChild(clone);
            }
        }
    });

    // Retrieve values from dynamically added divs after "Enter" key press
    const dynamicallyAddedDivs = document.querySelectorAll('#main-content1 .dynamic-div');
    dynamicallyAddedDivs.forEach(div => {
        const labelsAndInputsInDiv = div.querySelectorAll('label, input, select, textarea');
        labelsAndInputsInDiv.forEach(element => {
            if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'select' || element.tagName.toLowerCase() === 'textarea') {
                const value = element.value;
                const paragraph = document.createElement('p');
                paragraph.textContent = value;
                div1.appendChild(paragraph);
            } else {
                // Clone the element (label) if it's not "Who Can View," "Assign To," or "valuesContainer"
                if (element.getAttribute('for') !== 'who-can-view' && element.getAttribute('for') !== 'assign-to' && element.getAttribute('for') !== 'valuesContainer') {
                    const clone = element.cloneNode(true);
                    div1.appendChild(clone);
                }
            }
        });
    });
});






// Add an event listener to the "Edit Task" button in div1
const div1EditTaskButton = document.getElementById('div1-button1');
div1EditTaskButton.addEventListener('click', function () {
    // Hide the current main content section (main-content)
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'none';

    // Display the desired main content section (main-content1)
    const mainContent1 = document.getElementById('main-content1');
    mainContent1.style.display = 'block';
});










let isFirstSave = true; // Initialize the flag to true

// Function to handle saving a task
function saveTask() {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    // Get the user's email from local storage
    const userEmail = localStorage.getItem('userEmail');

    // Create a new paragraph element to display the information
    const taskInfoElement = document.createElement('p');
    
    if (isFirstSave) {
        taskInfoElement.textContent = `Created this task by ${userEmail} on ${formattedDate}`;
        isFirstSave = false; // Set the flag to false after the first save
    } else {
        taskInfoElement.textContent = `Modified this task by ${userEmail} on ${formattedDate}`;
    }

    // Append the task information to div4
    const div4 = document.getElementById('div4');
    div4.appendChild(taskInfoElement);
}

// Add an event listener to the "Save" button in main-content
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveTask);





// Function to handle file selection in div2
function handleFileUpload(event) {
    const fileList = event.target.files;

    // Get the user's email from local storage
    const userEmail = localStorage.getItem('userEmail');

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    // Create and display a message for each selected file
    const div4 = document.getElementById('div4');
    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const fileMessage = document.createElement('p');
        fileMessage.textContent = `${userEmail} submitted a document on ${formattedDate}`;
        div4.appendChild(fileMessage);
    }
}

// Add an event listener to the file input in div2
const fileInput = document.getElementById('file');
fileInput.addEventListener('change', handleFileUpload);







// Function to handle marking tasks in div3
function handleTaskMarking(button) {
    // Get the user's email from local storage
    const userEmail = localStorage.getItem('userEmail');

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    // Get the value of the clicked button
    const buttonValue = button.textContent;

    // Create and display a message for marking the task
    const div4 = document.getElementById('div4');
    const taskMessage = document.createElement('p');
    taskMessage.textContent = `${userEmail} marked this task: "${buttonValue}" on ${formattedDate}`;
    div4.appendChild(taskMessage);
}

// Add event listeners to all buttons with class "status-section" in div3
const statusButtons = document.querySelectorAll('.status-section button');
statusButtons.forEach((button) => {
    button.addEventListener('click', () => handleTaskMarking(button));
});





// Function to handle posting updates in div3
function handlePostUpdate() {
    // Get the user's email from local storage
    const userEmail = localStorage.getItem('userEmail');

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    // Get the text from the textarea with ID 'post-update-textarea'
    const updateText = document.getElementById('post-update-textarea').value;

    // Check if the textarea is not empty before posting the update
    if (updateText.trim() !== '') {
        // Create and display a message for the update
        const div4 = document.getElementById('div4');
        const updateMessage = document.createElement('p');
        updateMessage.textContent = `${userEmail} posted an update: "${updateText}" on ${formattedDate}`;
        div4.appendChild(updateMessage);

        // Clear the textarea after posting the update
        document.getElementById('post-update-textarea').value = '';
    }
}

// Add an event listener to the "Post Update" button with ID 'post-update-button'
const postUpdateButton = document.getElementById('post-update-button');
postUpdateButton.addEventListener('click', handlePostUpdate);







// Add an event listener to each status button in div3
const statusButtons1 = document.querySelectorAll('.status-section button');
const statusLabel = document.getElementById('status-label');

statusButtons1.forEach((button) => {
    button.addEventListener('click', () => {
        // Get the value and text of the clicked button
        const statusValue = button.value;
        const statusText = button.textContent;

        // Update the status label in div1
        statusLabel.textContent = `Status: ${statusText}`;
        statusLabel.style.backgroundColor = 'green';
        statusLabel.style.color = 'black';
        statusLabel.style.display = 'block';
    });
});
