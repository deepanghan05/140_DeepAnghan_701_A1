const readline = require('readline');

const gitQA = {
  "how to commit": "Use: git add . && git commit -m 'your message'",
  "how to push": "Use: git push origin main (or your branch name)",
  "what is git clone": "git clone copies a remote repository to your local machine.",
  "how to initialize git": "Use: git init to start a new Git repository in your project directory."
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: '
});

console.log("Welcome! I'm your Git Helper Bot. Ask me anything about Git.");

rl.prompt();

rl.on('line', (input) => {
  const userInput = input.toLowerCase();
  let response = "Sorry, I don't know that Git command.";

  for (const question in gitQA) {
    if (userInput.includes(question)) {
      response = gitQA[question];
      break;
    }
  }

  console.log('Bot:', response);

  if (userInput === 'bye') {
    rl.close();
  } else {
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log("Goodbye! Happy Git-ing!");
  process.exit(0);
});
