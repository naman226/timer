let argus = process.argv.slice(2);
for (let argu of argus) {
  if (!isNaN(argu) && (argu > 0)) {
    argu = argu * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, argu);
  }
}

