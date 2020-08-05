 $('.slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    dotsClass: "my-dots"

                }
            }
        ]
    });

    $('.slider-documents').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    dotsClass: "my-dots"

                }
            }
        ]
    });


    function countup(className) {
        var countBlockTop = $("." + className).offset().top;
        var windowHeight = window.innerHeight;
        var show = true;

        $(window).scroll(function () {
            if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                show = false;

                $('.' + className).spincrement({
                    from: 1,
                    duration: 3000,
                });
            }
        })
    }

    countup('information-count');


    var topPopularChart = document.getElementById("topPopularChart");
    var topGrantChart = document.getElementById("topGrantChart");


    Chart.defaults.global.defaultFontFamily = "Didact Gothic";
    Chart.defaults.global.defaultFontSize = 14;
    var topPopularChartData = {
        labels: [
            "0105000 — Бастауыш білім беру",
            "1201000 — Автомобиль көлігіне техникалық қызмет көрсету, жөндеу және пайдалану",
            "0101000 — Мектепке дейінгі тәрбие және оқыту",
            "0301000 — Емдеу ісі",
            "1305000 — Ақпараттық жүйелер (қолдану саласы бойынша)"
        ],
        datasets: [
            {
                data: [58, 50, 42, 39, 37],
                backgroundColor: [
                    "#FE718F",
                    "#49AAEC",
                    "#FED266",
                    "#5CC5C5",
                    "#A274FE"
                ]
            }]
    };

    var topGrantChartData = {
        labels: [
            "1504000 — Фермер шаруашылығы (бейін бойынша)",
            "1201000 — Автомобиль көлігіне техникалық қызмет көрсету, жөндеу және пайдалану",
            "1114000 — Дәнекерлеу ісі (түрлері бойынша)",
            "0508000 — Тамақтандыруды ұйымдастыру",
            "1211000 — Тігін өндірісі және киімдерді үлгілеу"
        ],
        datasets: [
            {
                data: [636, 599, 596, 526, 406],
                backgroundColor: [
                    "#FE718F",
                    "#49AAEC",
                    "#FED266",
                    "#5CC5C5",
                    "#A274FE"
                ]
            }]
    };

    var pieChart1 = new Chart(topPopularChart, {
        type: 'pie',
        data: topPopularChartData
    });
    var pieChart2 = new Chart(topGrantChart, {
        type: 'pie',
        data: topGrantChartData
    });

    pieChart1.canvas.parentNode.style.width = '50%';
    pieChart2.canvas.parentNode.style.width = '50%';
