const schedules = {
    Monday: [
        { time: "9:00 AM - 12:00 PM", course: "IPT" },
        { time: "1:00 PM - 3:00 PM", course: "ADS" },
        { time: "3:00 PM - 6:00 PM", course: "Networking" }
    ],
    Tuesday: [
        { time: "10:00 AM - 11:30 AM", course: "STS" },
        { time: "2:30 PM - 4:00 PM", course: "Ethics" },
        { time: "5:30 PM - 6:00 PM", course: "Quantitative Method" },
        { time: "7:00 PM - 8:30 PM", course: "Art Appreciation" }
    ],
    Thursday: [
        { time: "7:00 AM - 9:00 AM", course: "IPT" },
        { time: "1:00 PM - 3:00 PM", course: "Networking" },
        { time: "3:00 PM - 6:00 PM", course: "ADS" },
        { time: "6:00 PM - 8:00 PM", course: "SIA" }
    ],
    Friday: [
        { time: "7:00 AM - 10:00 AM", course: "SIA" },
        { time: "10:00 AM - 11:30 AM", course: "STS" },
        { time: "1:00 PM - 2:00 PM", course: "Ethics" },
        { time: "2:30 PM - 4:00 PM", course: "Quantitative Method" },
        { time: "7:00 PM - 8:30 PM", course: "Art Appreciation" }
    ]
};

function showSchedule(day) {
    const container = document.getElementById('schedule-container');
    const schedule = schedules[day];
    let html = `<table>
        <tr>
            <th>Time</th>
            <th>Course</th>
        </tr>`;
    schedule.forEach(item => {
        html += `
        <tr>
            <td>${item.time}</td>
            <td>${item.course}</td>
        </tr>`;
    });
    html += `</table>`;
    container.innerHTML = html;
}