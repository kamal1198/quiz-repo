function printHighscores() {
   //store scores
    var highscores = JSON.parse(window.localStorage.getItem("scores")) || [];
  
    //show scores high to low
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      //tag
      var liTag = document.createElement("tag");
      liTag.textContent = score.initials + " - " + score.score;
      var olEl = document.getElementById("scores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
  }
  
  document.getElementById("remove").onclick = clearHighscores;
  
  printHighscores();