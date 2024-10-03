$(document).ready(function() {
    // Wait for the page to fully load
    setTimeout(function() {
        var custom_date_range = $("#custom_date_range_input").val();
        var Id = $("#userId").val();
        
        // Ensure the custom date and ID exist before calling the function
        if (custom_date_range && Id) {
            Attendance_Search(custom_date_range, Id);
        } else {
            console.error("custom_date_range or Id is not set!");
        }
    }, 100); // Optional delay to ensure the values are loaded properly
});
