console.log(__dirname);
console.log(__filename);

console.log("Log message");
console.warn("Warning message");
console.error("Error message");

setTimeout(() => {
  console.log("Message after 1 second");
}, 1000);

let i = 0;
const intervalId = setInterval(() => {
  console.log("Interval running:", ++i);
  if (i === 3) clearInterval(intervalId);
}, 1000);

console.log(process.platform);
console.log(process.version);
console.log(process.pid);
console.log(process.cwd());
console.log(process.argv);

process.nextTick(() => {
  console.log("Executed in next tick");
});

global.customVar = "I am global";
console.log(global.customVar);