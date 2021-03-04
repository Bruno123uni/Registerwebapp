name_of_the_student_array = [];

function submit()
{
    var display_student_array = [];

    for(var y = 1 ; y < 5; y++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_" + y).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);

    }
    console.log(name_of_the_student_array);
    var length_array = name_of_the_student_array.length;
    console.log(length_array);
    for(var x = 0 ; x < length_array; x++) {
        display_student_array.push("<h4>Name - "+name_of_the_student_array[x] + "</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array)
 var length_array = name_of_the_student_array.length;
 console.log(length_array)
 display_student_name_sorting = [];
for(var t = 0; t < length_array; t++){
    display_student_name_sorting.push("<h4>Name - "+ name_of_the_student_array[t]+ "</h4>");
    console.log(display_student_name_sorting);
}
console.log(display_student_name_sorting);
document.getElementById("display_name_with_commas").innerHTML =  display_student_name_sorting;

var remove_commas = display_student_name_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}