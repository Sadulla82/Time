function updateClock(city, elementId) {
    const options = { timeZone: city, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formatter = new Intl.DateTimeFormat([], options);

    function update() {
        const now = new Date();
        const formattedTime = formatter.format(now);
        document.getElementById(elementId).innerText = formattedTime;
    }

    update(); // Initial call
    setInterval(update, 1000); // Update every second
}

function calculateTimeDifference() {
    const city1 = document.getElementById('city1').value;
    const city2 = document.getElementById('city2').value;

    updateClock(city1, 'clock1');
    updateClock(city2, 'clock2');

    const nowCity1 = new Date().toLocaleString("en-US", { timeZone: city1 });
    const nowCity2 = new Date().toLocaleString("en-US", { timeZone: city2 });

    const nowCity1Date = new Date(nowCity1);
    const nowCity2Date = new Date(nowCity2);

    const timeDiff = (nowCity2Date - nowCity1Date) / (1000 * 60 * 60); // Difference in hours

    document.getElementById('result').innerText = `The time difference between the selected cities is ${timeDiff} hours.`;
}

// Call the function to ensure clocks are updated on page load
window.onload = function() {
    const defaultCity1 = document.getElementById('city1').value;
    const defaultCity2 = document.getElementById('city2').value;
    updateClock(defaultCity1, 'clock1');
    updateClock(defaultCity2, 'clock2');
};
