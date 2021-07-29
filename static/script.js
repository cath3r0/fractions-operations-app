function validateForZero() {
    var inputs = document.getElementsByClassName('needs-validation')

    Array.prototype.slice.call(inputs).forEach(function (input) {
        input.addEventListener('change', function (event) {
            if (input.value.startsWith('0')) {
                input.classList.add('is-invalid')
            }
            else if (input.classList.contains('is-invalid')) {
                input.classList.remove('is-invalid');
            }

        }, false)
    })

    var num2 = document.getElementById("num2");
    var operation = document.getElementById("operation");
    var onChange = function (event) {
        if (operation.value === 'division' && num2.value.startsWith('0')) {
            num2.classList.add('is-invalid')
        } else if (num2.classList.contains('is-invalid')) {
            num2.classList.remove('is-invalid');
        }
    };

    num2.addEventListener('change', onChange, false)

    operation.addEventListener('change', onChange, false)
}

document.addEventListener('DOMContentLoaded', () => {

    validateForZero();

    const form = document.getElementById("mainForm");

    const url = '/';

    const ajaxSend = async (data, operation) => {
        const fetchResp = await fetch(url + operation, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!fetchResp.ok) {
            throw new Error();
        }
        return await fetchResp.text();
    };

    form.addEventListener("submit", function (e) {

        e.preventDefault();
        var a = document.getElementsByClassName('is-invalid');
        if (a.length != 0) {
            let num = document.getElementById("resNum");
            num.value = '';
            let denom = document.getElementById("resDenom");
            denom.value = '';
            return;
        }

        const formData = new FormData(this);
        const myData = {
            "fractions": [
                {
                    "numerator": parseInt(formData.get("num1")),
                    "denominator": parseInt(formData.get("denom1"))
                },
                {
                    "numerator": parseInt(formData.get("num2")),
                    "denominator": parseInt(formData.get("denom2"))
                }
            ]
        };
        const operation = formData.get("operation");

        ajaxSend(myData, operation)
            .then((response) => {
                let res = JSON.parse(response);
                let num = document.getElementById("resNum");
                num.value = res.numerator;
                let denom = document.getElementById("resDenom");
                denom.value = res.denominator;
            })
            .catch((err) => {
                console.error(err);
            })

    });

});