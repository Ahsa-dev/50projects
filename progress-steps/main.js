var currentProgress = 1;

function handlePrevClick(event){
    document.querySelectorAll('#step'+currentProgress)[0].classList.remove('active');
    currentProgress--;
    setBarProgress();
    checkDisabledButtons();
}

function handleNextClick(event){
    currentProgress++;
    document.querySelectorAll('#step'+currentProgress)[0].classList.add('active');
    setBarProgress();
    checkDisabledButtons();
}

function checkDisabledButtons(){
    if(currentProgress == 1){
        document.querySelectorAll('#prev-button')[0].classList.add('disabled');
        document.querySelectorAll('#next-button')[0].classList.remove('disabled');
    } else if (currentProgress == 4) {
        document.querySelectorAll('#prev-button')[0].classList.remove('disabled');
        document.querySelectorAll('#next-button')[0].classList.add('disabled');
    } else {
        document.querySelectorAll('#prev-button')[0].classList.remove('disabled');
        document.querySelectorAll('#next-button')[0].classList.remove('disabled');
    }
}

function setBarProgress(){
    var barWidth = 33*(currentProgress-1);
    document.querySelectorAll('.progress-bar')[0].style.width = barWidth+"%";
}