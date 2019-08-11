$(function() {
    
    var dates = ["7/1/16", "7/2/16", "7/3/16", "7/4/16", "7/5/16", "7/6/16", 
                 "7/7/16", "7/8/16", "7/9/16", "7/10/16", "7/11/16", "7/12/16"];
    
    var route66ao = makeRandArray(1500, 12);
    var route66ag = makeRandArray(1000, 12);
    var route66bo = makeRandArray(1300, 12);
    var route66bg = makeRandArray(600, 12);
    var route66co = makeRandArray(100, 12);
    var route66cg = makeRandArray(0, 12);
    
    var hanamuraao = makeRandArray(1000, 12);
    var hanamuraag = makeRandArray(1200, 12);
    var hanamurabo = makeRandArray(2000, 12);
    var hanamurabg = makeRandArray(300, 12);
    
    var kingsrowao = makeRandArray(2000, 12);
    var kingsrowag = makeRandArray(1700, 12);
    var kingsrowbo = makeRandArray(500, 12);
    var kingsrowbg = makeRandArray(200, 12);
    var kingsrowco = makeRandArray(1500, 12);
    var kingsrowcg = makeRandArray(1500, 12);
    
    var numbaniao = makeRandArray(3000, 12);
    var numbaniag = makeRandArray(1200, 12);
    
    var dashLine = [5, 10];
    
    var mccree = $("#route66-chart")[0].getContext("2d");
    var chart = new Chart(mccree, {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Alpha Oil",
                    borderColor: "red",
                    data: route66ao,
                    fill: false
                },
                {
                    label: "Alpha Natural Gas",
                    borderColor: "red",
                    data: route66ag,
                    fill: false,
                    borderDash: dashLine
                },
                {
                    label: "Beta Oil",
                    borderColor: "blue",
                    data: route66bo,
                    fill: false
                },
                {
                    label: "Beta Natural Gas",
                    borderColor: "blue",
                    data: route66bg,
                    fill: false,
                    borderDash: dashLine
                },
                {
                    label: "Charlie Oil",
                    borderColor: "green",
                    data: route66co,
                    fill: false
                },
                {
                    label: "Charlie Natural Gas",
                    borderColor: "green",
                    data: route66cg,
                    fill: false,
                    borderDash: dashLine
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: "Route 66"
            }
        }
    });
    var genji = $("#hanamura-chart")[0].getContext("2d");
    var chart = new Chart(genji, {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Alpha Oil",
                    borderColor: "red",
                    data: hanamuraao,
                    fill: false
                },
                {
                    label: "Alpha Natural Gas",
                    borderColor: "red",
                    data: hanamuraag,
                    fill: false,
                    borderDash: dashLine
                },
                {
                    label: "Beta Oil",
                    borderColor: "blue",
                    data: hanamurabo,
                    fill: false
                },
                {
                    label: "Beta Natural Gas",
                    borderColor: "blue",
                    data: hanamurabg,
                    fill: false,
                    borderDash: dashLine
                },
            ]
        },
        options: {
            title: {
                display: true,
                text: "Hanamura"
            }
        }
    });
    var orisa = $("#numbani-chart")[0].getContext("2d");
    var chart = new Chart(orisa, {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Alpha Oil",
                    borderColor: "red",
                    data: numbaniao,
                    fill: false
                },
                {
                    label: "Alpha Natural Gas",
                    borderColor: "red",
                    data: numbaniag,
                    fill: false,
                    borderDash: dashLine
                },
            ]
        },
        options: {
            title: {
                display: true,
                text: "Numbani"
            }
        }
    });
    var tracer = $("#kingsrow-chart")[0].getContext("2d");
    var chart = new Chart(tracer, {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Alpha Oil",
                    borderColor: "red",
                    data: kingsrowao,
                    fill: false
                },
                {
                    label: "Alpha Natural Gas",
                    borderColor: "red",
                    data: kingsrowag,
                    fill: false,
                    borderDash: dashLine
                },
                {
                    label: "Beta Oil",
                    borderColor: "blue",
                    data: kingsrowbo,
                    fill: false
                },
                {
                    label: "Beta Natural Gas",
                    borderColor: "blue",
                    data: kingsrowbg,
                    fill: false,
                    borderDash: dashLine
                },
                {
                    label: "Charlie Oil",
                    borderColor: "green",
                    data: kingsrowco,
                    fill: false
                },
                {
                    label: "Charlie Natural Gas",
                    borderColor: "green",
                    data: kingsrowcg,
                    fill: false,
                    borderDash: dashLine
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: "King's Row"
            }
        }
    });
    
    function makeRandArray(startingPoint, length) {
        var array = [startingPoint];
        var curr = startingPoint;
        for (var i = 1; i < length; i++) {
            curr = curr - Math.floor(Math.random() * 200);
            if (curr <= 0) {
                array.push(0);
            }
            else {
                array.push(curr);
            }
        }
        return array;
    }
});