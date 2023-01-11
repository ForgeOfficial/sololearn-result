console.log("background.js is ready!");

(function () {
    'use strict';

    //PHP AND CSS
    axios.get('https://raw.githubusercontent.com/ForgeOfficial/sololearn-result/main/list.json').then((r) => {
        window.t = r.data.list;
    });

    setInterval(() => {

        if (!window.t) return;
        const test = window.t.find(u => u.url === document.URL);

        if (test) {
            if (test.buttons) {
                test.buttons.forEach(button => {
                    $(`div[class^=sl-learn-answer-option]`).each((i, b) => {
                        if ($(b).text() === button)
                            $(b).click();
                    })
                })
            } else if (test.texts) {
                $(`input[class^=sl-quiz-inputfield__input]`).each((i, input) => {
                    $(input).attr('placeholder', test.texts[i]);
                })
            } else if (test.menus) {
                test.menus.forEach((menu, i) => {
                    $(`span:contains(${menu})[class^=sl-order-answers-item__label]`).html(`Position <a style="color: #ff0000">(${i+1})</a>`);
                })
            }else
                $(`${test.selector}`).click();

            if (!test.texts && !test.menus)
                $("button[sl-test-data=btnActionButtonprimary]").click();
        } else
            $("button[sl-test-data=btnActionButtonprimary]").click();
    }, 200)
})();