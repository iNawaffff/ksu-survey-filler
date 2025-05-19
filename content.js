// content.js
(function() {
    //small delay for page elements to be ready
    setTimeout(function() {
        console.log("معبّي استبيانات: جاري محاولة تعبئة الاختيارات...");
        const form = document.getElementById('frm');

        if (!form) {
            console.error("معبّي استبيانات: لم يتم العثور على الاستبيان في الصفحة.");
            return; //stops if the main form not found
        }

        const questions = {};
        const RadioButtons = form.querySelectorAll('input[type="radio"]');



        RadioButtons.forEach(function(radioButton) {
            if (radioButton.name) {
                if (!questions[radioButton.name]) {
                    questions[radioButton.name] = [];
                }
                questions[radioButton.name].push(radioButton);
            }
        });

        let questionsFilled = 0;
        for (const questionName in questions) {
            const options = questions[questionName];

            if (options.length === 6) {
                const randomNumber = Math.floor(Math.random() * 6);
                options[randomNumber].click();
                questionsFilled++;
            } else if (options.length > 0) {

                options[0].click();
                questionsFilled++;
            }
        }

        if (questionsFilled > 0) {
            alert("معبّي استبيانات: تمت تعبئة الاختيارات.");
        } else {

            console.log("معبّي استبيانات: لم يتم تعبئة أي أسئلة.");
        }

    }, 500);
})();