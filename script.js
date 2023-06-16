const GameBoard = (() => {
    const Player = (name, marker) => {
        return {name, marker};
    }
    const Player1 = Player("Player 1", "X");
    const Player2 = Player("PLayer 2", "O");
    let gameEnd = false;
    let turnCount = 0;
    let winPos = [
        [1, 2, 3], [4, 5, 6], 
        [7, 8, 9], [1, 4, 7], 
        [2, 5, 8], [3, 6, 9], 
        [1, 5, 9], [3, 5, 7]
      ];
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).addEventListener(
          "click", 
          function() {
            if (this.textContent === "" && !gameEnd) {
                if (turnCount % 2 == 0){
                    this.textContent = Player1.marker;
                    this.classList.add(Player1.marker.toLowerCase());
                    turnCount++;
                    checkWin();

                }
                else{
                    this.textContent = Player2.marker;
                    this.classList.add(Player2.marker.toLowerCase());
                    turnCount++;
                    checkWin();
                }
            }
          }
        );
      }
      function checkWin() {
        for (let i = 0; i < winPos.length; i++) {
          if (
            document.getElementById(winPos[i][0]).textContent === Player1.marker &&
            document.getElementById(winPos[i][1]).textContent === Player1.marker &&
            document.getElementById(winPos[i][2]).textContent === Player1.marker
          ) {
            document.getElementById(winPos[i][0]).classList.add("win");
            document.getElementById(winPos[i][1]).classList.add("win");
            document.getElementById(winPos[i][2]).classList.add("win"); 
            gameEnded = true;
            setTimeout(function() {
              alert(Player1.marker + " wins!");
            }, 500);
          }else if (document.getElementById(winPos[i][0]).textContent === Player2.marker &&
            document.getElementById(winPos[i][1]).textContent === Player2.marker &&
            document.getElementById(winPos[i][2]).textContent === Player2.marker)
          {
            document.getElementById(winPos[i][0]).classList.add("win");
            document.getElementById(winPos[i][1]).classList.add("win");
            document.getElementById(winPos[i][2]).classList.add("win"); 
            gameEnded = true;
            setTimeout(function() {
              alert(Player2.marker + " wins!");
            }, 500);

            let bbut = document.createElement("BUTTON");
            bbut.innerHTML = "Reload";
            bbut.addEventListener("click", () => { 
                document.location.reload;
            })
            body.appendChild(bbut);

          }
        }
      }
})();



