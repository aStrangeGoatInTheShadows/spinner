//process.stdout.write('hello from spinner1.js... \rheyyy\n');

for (let i = 0; i <= 100000; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 700);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\|   ');
  }, 900);
}
// ... fill in the rest yourself ...