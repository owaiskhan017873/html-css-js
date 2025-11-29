function press(value) {
        document.getElementById("display").value += value;
    }

    function clearDisplay() {
        document.getElementById("display").value = "";
    }

    function calculate() {
        let exp = document.getElementById("display").value;


        let arr = [];
        for (let i = 0; i < exp.length; i++) {
            arr.push(exp[i]);
        }

        let finalExp = arr.join("");

        let result;


        if (finalExp.includes('+') || finalExp.includes('-') || finalExp.includes('*') || finalExp.includes('/')) {
            try {
                result = eval(finalExp);
            } catch (e) {
                result = "Error";
            }
        } else {
            result = "Invalid";
        }

        document.getElementById("display").value = result;
    }