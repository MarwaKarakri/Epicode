document.addEventListener("DOMContentLoaded", function () {
    interface Smartphone {
        carica: number;
        numeroChiamate: number;
    }
    class User implements Smartphone {
        carica = 0;
        numeroChiamate = 0;
        numeroTelefono: number;
        nomeUtente: string;

        constructor(carica: number, numeroTelefono: number, nomeUtente: string) {
            this.carica = carica;
            this.numeroTelefono = numeroTelefono;
            this.nomeUtente = nomeUtente;
        }
        //ricarica
        public ricarica(unaRicarica: number): void {
            
            this.carica = this.carica + unaRicarica;
        }


        //riduzione credito di 0,20 ogni minuto, per evitare che attenda minuti inutili, ho inserito un input in cui digitare la durata della chiamata.
        public chiamata(minutiDurata: number): void {
            this.numeroChiamate++;
            if ((+minutiDurata / 60 * 0.20) <= this.carica) {
                this.carica -= +minutiDurata / 60 * 0.20;
                this.carica = +this.carica.toFixed(2);
            } else {
                alert('fatti una ricarica')
              this.numeroChiamate--;
        } }
        //credito disponibile
        public numero404(creditoRes: number): void {
            alert(`il tuo credito residuo è: ${creditoRes} €`)
        } 
        //registro numero chiamate
        public getNumeroChiamate(): void {
            alert(`Oggi hai effettuato: ${this.numeroChiamate} chiamate`)
        } 
        //cancella il registro chiamate
        public azzeraChiamate(): void {
            this.numeroChiamate = 0
        } 
    }

    let FirstUser = new User(0, 3295327688, "Raouia");
    let SecondUser = new User(0, 3895992743, "Mauro");
    let ThirdUser = new User(0, 3486635555, "Marwa");
    console.log(FirstUser);

    let telefono = <HTMLInputElement>document.querySelector("#numero");
    telefono.value;

    let dieciEuro = <HTMLElement>document.querySelector("#dieci");
    let ventiEuro = <HTMLElement>document.querySelector("#venti");
    let cinqueantaEuro = <HTMLElement>document.querySelector("#cinquanta");
    let centoEuro = <HTMLElement>document.querySelector("#cento");
    let login = <HTMLElement>document.querySelector("#login");
    let logout = <HTMLElement>document.querySelector("#logout");
    let inEntrata = <HTMLInputElement>document.querySelector("#numeroCall");
    let secondi = <HTMLInputElement>document.querySelector("#secondiCall");
    let inUscita = <HTMLElement>document.querySelector("#inoltraCall");
    let registroCall = <HTMLElement>document.querySelector("#infoCall");
    let canc = <HTMLElement>document.querySelector("#azzeraCall")



    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        login.addEventListener("click", function () {
            if (dieciEuro.style.display === 'none' || +telefono.value === FirstUser.numeroTelefono || +telefono.value === SecondUser.numeroTelefono || +telefono.value === ThirdUser.numeroTelefono) {
                dieciEuro.style.display = 'inline-block';
                ventiEuro.style.display = 'inline-block';
                cinqueantaEuro.style.display = 'inline-block';
                centoEuro.style.display = 'inline-block';
                login.style.display = 'none';
                telefono.disabled = true;
                logout.style.display = 'inline-block';
                inEntrata.style.display = 'block';
                secondi.style.display = 'block';
                inUscita.style.display = 'block';
                registroCall.style.display = 'inline-block';
                canc.style.display = 'inline-block';
                
            } else {
                alert('Non sei nostro cliente')
            }
        });
    }
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        logout.addEventListener("click", function () {
            if (dieciEuro.style.display === 'inline-block') {
                dieciEuro.style.display = 'none';
                ventiEuro.style.display = 'none';
                cinqueantaEuro.style.display = 'none';
                centoEuro.style.display = 'none';
                login.style.display = 'inline-block';
                telefono.disabled = false;
                logout.style.display = 'none';
                inEntrata.style.display = 'none';
                secondi.style.display = 'none';
                inUscita.style.display = 'none';
                registroCall.style.display = 'none';
                
            }
        });
    }
    dieciEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(10);
            console.log(FirstUser);
        } else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(10);
            console.log(SecondUser);
        } else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(10);
            console.log(ThirdUser);
        } else {
            alert("Non sei un nostro cliente");
        }
    });
    ventiEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(20);
            console.log(FirstUser);
        } else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(20);
            console.log(SecondUser);
        } else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(20);
            console.log(ThirdUser);
        } else {
            alert("Non sei un nostro cliente");
        }
    });
    cinqueantaEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(50);
            console.log(FirstUser);
        } else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(50);
            console.log(SecondUser);
        } else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(50);
            console.log(ThirdUser);
        } else {
            alert("Non sei un nostro cliente");
        }
    });
    centoEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(100);
            console.log(FirstUser);
        } else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(100);
            console.log(SecondUser);
        } else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(100);
            console.log(ThirdUser);
        } else {
            alert("Non sei un nostro cliente");
        }
    });

    inUscita.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono && +inEntrata.value !== 404) {
            FirstUser.chiamata(+secondi.value)
            console.log(FirstUser);
        } else if (+telefono.value === SecondUser.numeroTelefono && +inEntrata.value !== 404) {
            SecondUser.chiamata(+secondi.value)
            console.log(SecondUser);
        } else if (+telefono.value === ThirdUser.numeroTelefono && +inEntrata.value !== 404) {
            ThirdUser.chiamata(+secondi.value)
            console.log(ThirdUser);
        } else if (+telefono.value === FirstUser.numeroTelefono && +inEntrata.value === 404) {
            FirstUser.numero404(FirstUser.carica)
        } else if (+telefono.value === SecondUser.numeroTelefono && +inEntrata.value === 404) {
            SecondUser.numero404(SecondUser.carica)
        } else if (+telefono.value === ThirdUser.numeroTelefono && +inEntrata.value === 404) {
            ThirdUser.numero404(ThirdUser.carica)
        }
    })
    registroCall.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            return FirstUser.getNumeroChiamate()
        } else if (+telefono.value === SecondUser.numeroTelefono) {
            return SecondUser.getNumeroChiamate()
        } else if (+telefono.value === ThirdUser.numeroTelefono) {
            return ThirdUser.getNumeroChiamate()
        }
    })

    canc.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.azzeraChiamate()
        } else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.azzeraChiamate()
        } else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.azzeraChiamate()
        }
    })
});
