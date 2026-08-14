function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}


function CWE_484() { // SWITCH_CASE_FALL_THROUGH
  let x;
  switch (x) {
  case '1': console.log('Do one thing');
  case '2': console.log('Do another thing');
  }
}


function CWE_670(x) { // STRAY_SEMICOLON
  while (++x <= 10) ;
  {
    sum += x;
  }
}
