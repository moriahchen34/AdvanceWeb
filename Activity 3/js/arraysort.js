const evennumbers = [40, 100, 1, 5, 25, 10];
document.getElementById("arraysort").innerHTML = myArrayMax(evennumbers);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}