function telephoneCheck(str) {
    return /^1? ?(\(\d\d\d\)|\d\d\d)( |-)?\d\d\d( |-)?\d\d\d\d$/.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));