let display = document.getElementById("display");

let btns = Array.from(document.getElementsByClassName("btn"));

btns.map(btn => {
    btn.addEventListener('click' , (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText = "";
                break;
                case "CE":
                    if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                    }
                    break;
                    case "=":
                        try{
                            display.innerText = eval(display.innerText);
                        }catch{
                            display.innerText = "ERROR!";
                        }
                        break;
                        default:
                            display.innerText += e.target.innerText;

        }
    });
});