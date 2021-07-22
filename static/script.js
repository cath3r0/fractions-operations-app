document.addEventListener('DOMContentLoaded', () => {

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