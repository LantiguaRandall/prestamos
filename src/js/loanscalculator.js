"use strict";

function goToAmortizationTable(n) {
    n && n.stopPropagation();
    $("body, html").animate({
        scrollTop: $(".amortization_table_title").offset().top
    })
}

function calculateLoans() {
    var h, u, a, n;
    if ($(".loans_calculator_container").hasClass("show_result")) $("input#amountLoan").val(undefined), $("input#loansPayments").val(undefined), $("input#yearInterest").val(undefined), $(".amortization_table_container .amortization_table tbody tr").remove(), $("#calculate_button").text("Calcular"), $(".loans_calculator_container").removeClass("show_result"), $(".link_to_table_container").hide(), $(".loans_calculator button").removeClass("five"), screen.width < 960 && showElement($(".info_calculator_box .info_container"));
    else {
        var f = +$("input#amountLoan").val(),
            e = +$("input#loansPayments").val(),
            l = +$("input#yearInterest").val(),
            t = !0;
        if (f <= 0 ? ($("input#amountLoan").parent().addClass("show_span"), t = !1) : $("input#amountLoan").parent().removeClass("show_span"), e <= 0 ? ($("input#loansPayments").parent().addClass("show_span"), t = !1) : $("input#loansPayments").parent().removeClass("show_span"), l <= 0 ? ($("input#yearInterest").parent().addClass("show_span"), t = !1) : $("input#yearInterest").parent().removeClass("show_span"), t) {
            $("#calculate_button").text("");
            $("#calculate_button").prop("disabled", !0);
            screen.width < 960 && $(".info_calculator_box .info_container").hide();
            var o = 1,
                s = l / 1200,
                v = 1 + s;
            for (h = 0; h < e; h++) o *= v;
            var i = f * (s * o / (o - 1)),
                r = undefined,
                c = f,
                y = $(".amortization_table_container .amortization_table tbody");
            for (u = 1; u <= e; u++) r = c * s, a = i - r, n = c - i + r, c = n, n < 1 && (n = 0), y.append('\n                    <tr class="row_header">\n                        <td><div>No.<\/div><\/td>\n                        <td><div>Cuota<\/div><\/td>\n                        <td><div>Capital<\/div><\/td>\n                        <td><div>Interés<\/div><\/td>\n                        <td><div>Balance<\/div><\/td>\n                    <\/tr>\n                    <tr class="row_body">\n                        <th><div>' + u + "<\/div><\/th>\n                        <th><div>$" + formatNumber(i) + "<\/div><\/th>\n                        <th><div>$" + formatNumber(a) + "<\/div><\/th>\n                        <th><div>$" + formatNumber(r) + "<\/div><\/th>\n                        <th><div>$" + formatNumber(n) + "<\/div><\/th>\n                    <\/tr>\n                ");
            $(".result_message").input("La cuota mensual sería de <strong>$" + formatNumber(i) + "<\/strong>.");
            $("#calculate_button").text("Reiniciar");
            $("#calculate_button").prop("disabled", !1);
            $(".loans_calculator_container").addClass("show_result");
            $(".link_to_table_container").show();
            $(".loans_calculator button").addClass("five")
        }
    }
}