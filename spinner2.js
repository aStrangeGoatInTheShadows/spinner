
const spinner = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r\|   ',
  '\r\/   ',
  '\r\-   ',
  '\r\\   '
]

// No input or output. Just a spinning character
const spin = () => {
  for (let bar in spinner) {
    setTimeout(() => {
      process.stdout.write(spinner[bar]);
    }, bar * 200);
  }
}

spin();
console.log();
