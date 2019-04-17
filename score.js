//Javascript Home Work 1
var students;
var average_total;
var sum_total = 0;
var scores;
var combine_array = new Array(6);
students = ["山田", "田中", "西村", "井口", "検診", "光"];
scores = [90, 80, 50, 40, 70, 91];

for (i = 0; i < combine_array.length; i++) {

    combine_array[i] = [students[i], scores[i]];
}

document.write("<h3>There are six students. Their scores are as follows </h3>");

for (i = 0; i < combine_array.length; i++) {
    for (j = 0; j < 2; j++) {
        document.write(combine_array[i][j] + " ");
    }
    document.write("<br/>");
}

document.write("<h3>The following students ar students who get A.</h3>");

for (i = 0; i < combine_array.length; i++) {
    if (combine_array[i][1] >= 90) {
        document.write(combine_array[i][0] + " " + combine_array[i][1] + "<br/>");
    }
    sum_total += combine_array[i][1];
}

average_total = sum_total / combine_array.length;

document.write("The total score is ", sum_total + "<br/>");
document.write("The average is ", (average_total).toFixed(2) + "<br/>");
document.write("<h3>Sort scores in decending order. </h3>");

function bubbleSort(arrayTosort) {
    for (var i = arrayTosort.length - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arrayTosort[j - 1][1] > arrayTosort[j][1]) {
                var temp_marks = arrayTosort[j - 1][1];
                var temp_students = arrayTosort[j-1][0];
                arrayTosort[j - 1][1] = arrayTosort[j][1];
                arrayTosort[j - 1][0] = arrayTosort[j][0];
                arrayTosort[j][1] = temp_marks;
                arrayTosort[j][0] = temp_students;
            }
        }
    }
    return arrayTosort;
}

sorted_array = bubbleSort(combine_array);

for (i = sorted_array.length - 1; i >= 0; i--) {
    for (j = 0; j < 2; j++) {
        document.write(sorted_array[i][j] + " ");
    }
    document.write("<br/>");
}
