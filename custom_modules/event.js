function loadingScreen() {
    console.log("Loading screen");
}

function hideLoadingScreen() {
    console.log("Loading Screen Hidden");
}

function getDataFromAPI(callback) {
    console.log("Start pulling data");
    setTimeout(() => {
        console.log("Finished pulling data")
        callback();
    }
        , 5000);
}

loadingScreen();
getDataFromAPI(hideLoadingScreen);