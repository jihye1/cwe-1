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

function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
  let x = -1;
  if (x = -1) console.log('Error!', x);
}

function CWE_670(x) { // STRAY_SEMICOLON
  while (++x <= 10) ;
  {
    sum += x;
  }
}

function CWE_843() { // BAD_TYPE_COERCION
  let backPosition;
  return "backgroundPosition: " + backPosition + "px; ";
}

function CWE_561() { // UNREACHABLE_CODE
  return;

  const bar = 1;
  console.log(bar);
}


function CWE_484() { // SWITCH_CASE_FALL_THROUGH
  let x;
  switch (x) {
  case '1': console.log('Do one thing');
  case '2': console.log('Do another thing');
  }
}
