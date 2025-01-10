// src/cli.ts
import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import chat_agent from './ai.js';
process.removeAllListeners('warning');
process.on('warning', (warning) => {
    if (warning.name === 'DeprecationWarning' && warning.message.includes('punycode')) {
        return;
    }
    console.warn(warning);
});
const program = new Command();
// Initialize the CLI program
program
    .name('thoughtful-ai')
    .description('Thoughtful AI CLI - Your AI Support Assistant')
    .version('1.0.0');
async function startChat() {
    console.log(chalk.blue('\nWelcome to Thoughtful AI Support Assistant!\n'));
    let chatting = true;
    while (chatting) {
        try {
            const { question } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'question',
                    message: chalk.green('You (type "quit" to quit):'),
                    validate: (input) => {
                        if (input.trim().length === 0) {
                            return 'Please enter a question';
                        }
                        return true;
                    }
                }
            ]);
            if (question.toLowerCase().trim() === 'quit') {
                chatting = false;
                console.log(chalk.blue('\nThank you for using Thoughtful AI Support!\n'));
                process.exit(0); // Explicitly exit the process
            }
            // Show thinking indicator
            const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
            let i = 0;
            const loadingInterval = setInterval(() => {
                process.stdout.write(`\r${chalk.yellow(spinner[i])} Thinking...`);
                i = (i + 1) % spinner.length;
            }, 80);
            // Get AI response
            const response = await chat_agent(question);
            clearInterval(loadingInterval);
            process.stdout.write('\r'); // Clear the spinner line
            // Display the response
            if (response) {
                console.log(chalk.yellow('\nAI Assistant:'), response, '\n');
            }
        }
        catch (error) {
            console.error(chalk.red('\nError:'), error instanceof Error ? error.message : 'An unknown error occurred');
            console.log(chalk.gray('Please try again or type "quit" to quit.\n'));
        }
    }
}
// Chat command
program
    .command('chat')
    .description('Start an interactive chat session with the AI assistant')
    .action(startChat);
// Add help information
program
    .helpCommand('help [command]', 'Display help for a specific command')
    .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ thoughtful-ai chat         Start a chat session');
    console.log('  $ thoughtful-ai help         Display help information');
});
// Add error handling for process termination
process.on('SIGINT', () => {
    console.log(chalk.blue('\n\nGoodbye! Thank you for using Thoughtful AI Support!\n'));
    process.exit(0);
});
process.on('SIGTERM', () => {
    console.log(chalk.blue('\n\nGoodbye! Thank you for using Thoughtful AI Support!\n'));
    process.exit(0);
});
// Parse command line arguments
program.parse();
