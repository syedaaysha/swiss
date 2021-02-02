// performance start

$(document).ready(function(){
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['year', 'data'],
          ['2013',  1000],
          ['2014',  1170],
          ['2015',  660],
          ['2016',  1030]
        ]);

        var options = {
          // title: 'Company Performance',
          // hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          // vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
});
// performance end

// contrib start
$(document).ready(function(){
  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2]
        ]);

        var options = {
          // title: 'My Daily Activities',
          pieHole: 0.5,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
});
// contrib end

// asset start
$(document).ready(function(){
  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2]
        ]);

        var options = {
          // title: 'My Daily Activities',
          pieHole: 0.5,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
        chart.draw(data, options);
      }
});
// asset end

// cost start
$(document).ready(function(){
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250]
        ]);

        var options = {
          // chart: {
          //   title: 'Company Performance',
          //   subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          // }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
});
// cost end


// middle chart start
$(document).ready(function(){
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['My all',     100],
        ]);

        var options = {
          width: 315,
          height: 315,
          pieHole: 0.7,
          colors: ['#fff'],
          pieSliceTextStyle: {
            color: 'white',
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }
});
// middle chart end