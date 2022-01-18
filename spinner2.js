const spinner = function() {
  let symbolArray = ['|', '/', '-', '\\',];
  let counter = 0;
  while (counter < 2) {
    for (let i = 0; i < symbolArray.length; i++) {
      setTimeout(() => process.stdout.write('\r' + symbolArray[i] + '   '), (i + 1) * 100);
    }
    counter++;
  }
  setTimeout(() => console.log('\n'), symbolArray.length * 2 * 100);
};

spinner();

