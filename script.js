
let startTime, updatedTime, difference, tInterval;
        let running = false;
        let lapCounter = 1;

        function start() {
            if (!running) {
                startTime = new Date().getTime();
                tInterval = setInterval(getShowTime, 1);
                running = true;
            }
        }

        function pause() {
            if (running) {
                clearInterval(tInterval);
                running = false;
            }
        }

        function reset() {
            clearInterval(tInterval);
            running = false;
            document.getElementById('display').innerHTML = "00:00:00";
            document.getElementById('laps').innerHTML = "";
            lapCounter = 1;
        }
        
        

        function lap() {
            if (running) {
                const lapTime = document.getElementById('display').innerHTML;
                const lapList = document.getElementById('laps');
                const lapItem = document.createElement('li');
                lapItem.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
                lapList.appendChild(lapItem);
                lapCounter++;
            }
        }

        function getShowTime() {
            updatedTime = new Date().getTime();
            difference = updatedTime - startTime;
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
            document.getElementById('display').innerHTML = hours + ":" + minutes + ":" + seconds;
        }

        
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);