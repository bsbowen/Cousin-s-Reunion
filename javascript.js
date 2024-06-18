document.addEventListener("DOMContentLoaded", function() {
    const totalRaised = 400; // Amount raised so far
    const goalAmount = 1200; // Fundraising goal
    const fundraisingBar = document.getElementById("fundraising-bar");
    const totalRaisedElement = document.getElementById("total-raised");

    // Update the width of the fundraising bar based on the amount raised
    const percentageRaised = (totalRaised / goalAmount) * 100;
    fundraisingBar.style.width = percentageRaised + "%";

    // Update the total amount raised text
    totalRaisedElement.textContent = totalRaised;
});
