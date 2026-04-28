function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
function CWE_476() { // NULL_POINTER
    var obj;
    var y = obj.x;  // UNINITIALIZED_LOCAL_VAR
    console.log(y);
}

function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
  let x = -1;
  if (x = -1) console.log('Error!', x);
}
