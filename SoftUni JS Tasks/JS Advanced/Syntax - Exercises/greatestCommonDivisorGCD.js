function sovle(n1, n2) {
  while (n2) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  console.log(n1);
}
sovle(15, 5);
