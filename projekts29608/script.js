var tablica = Array(9).fill(null);
var gracz = 'X';

window.onload = function() {
    var komorki = document.getElementsByClassName('komorka');
    let obrazeek = document.getElementById("obrazek");
    for (var i = 0; i < komorki.length; i++) {
        komorki[i].addEventListener('click', function() {
            var index = Array.prototype.indexOf.call(komorki, this);
            if (tablica[index] === null) {
                tablica[index] = gracz;
                this.classList.add(gracz);
                if (gracz === "O") {
                    obrazeek.src = "MK1_1.png";
                    obrazeek.alt = "X";
                  } else {
                    obrazeek.src = "MK1_2.png";
                    obrazeek.alt = "O";
                }

                gracz = gracz === 'X' ? 'O' : 'X';
                sprawdzWygranego();
            }
        });
    }
};

function sprawdzWygranego() {
    var wygraneKombinacje = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < wygraneKombinacje.length; i++) {
        var [a, b, c] = wygraneKombinacje[i];
        if (tablica[a] && tablica[a] === tablica[b] && tablica[a] === tablica[c]) {
            document.getElementById("wygrana").style.visibility = "visible";
            if (tablica[a]==="O"){
                document.getElementById("tekstWygrana").innerText = ('Gold is the winner!');
            }else{
                document.getElementById("tekstWygrana").innerText = ('Blue is the winner!');
            }
            
            return;
        }
    }

    if (!tablica.includes(null)) {
        document.getElementById("wygrana").style.visibility = "visible";
        document.getElementById("tekstWygrana").innerText = ("It's a draw!");
    }
}





