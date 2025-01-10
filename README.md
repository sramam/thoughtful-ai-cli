# Thoughtful AI

A CLI tool for interacting with Thoughtful AI's AI agents.

### Features

- Problem was reduced to its core and solved
- Maintains a message history of 10 messages
- Provides summarized/formatted answers, using markdown.
- [System Prompt](./system.md)
- Time Accounting:
    | Task          | Duration    |
    |---------------|-------------|
    | Coding        | 43 minutes  |
    | Testing       | ~20 minutes |
    | Documentation | ~30 minutes |

## tl;dr

This is a sample run log:

```sh
pnpm start

> thoughtful-ai-cli@1.0.0 start /Users/shramam/dev/sramam/jobhunt-25/smarter-dx-cli
> node dist/cli.js chat


Welcome to Thoughtful AI Support Assistant!

✔ You (type "quit" to quit): Who are customers of thoughtful AI?
⠴ Thinking...
AI Assistant: I'm sorry, but I do not have specific information about the customers of Thoughtful AI. However, I can provide details about the services and benefits offered by Thoughtful AI. Please let me know if you would like to know more about that.

✔ You (type "quit" to quit): yes please
⠼ Thinking...
AI Assistant: - **Services Offered**:
  - Thoughtful AI offers a suite of AI Agents designed to automate various aspects of healthcare revenue cycle management (RCM). This includes:
    - **Eligibility Verification Agent (EVA)**: Automates the verification of a patient’s eligibility and benefits information in real-time.
    - **Claims Processing Agent (CAM)**: Streamlines the submission and management of claims.
    - **Payment Posting Agent (PHIL)**: Automates the posting of payments to patient accounts.

- **Benefits**:
  - **Increased Productivity**: By reducing the time staff spend on repetitive tasks, healthcare providers can focus more on patient care.
  - **Reduced Costs**: Automation helps in lowering administrative costs associated with manual processes.
  - **Minimized Errors**: The use of AI Agents helps in reducing errors in critical processes like claims management and payment posting.
  - **Improved Efficiency**: Integration with existing EHR and practice management systems enhances overall operational efficiency.

If you have any more questions or need further information, feel free to ask!

✔ You (type "quit" to quit): what is an EVA?
⠦ Thinking...
AI Assistant: - **EVA (Eligibility Verification Agent)**:
  - EVA is an AI-powered agent designed to automate the process of verifying a patient's eligibility and benefits information in real-time.
  - It eliminates manual data entry errors and reduces claim rejections by providing accurate and timely verification.

If you have any more questions or need further information, feel free to ask!

✔ You (type "quit" to quit): why should I use thoughtful AI?
⠋ Thinking...
AI Assistant: - **Cost Reduction**:
  - Using Thoughtful AI's agents can significantly lower administrative costs associated with revenue cycle management.

- **Operational Efficiency**:
  - The automation of tasks reduces manual work and improves the overall efficiency of healthcare processes.

- **Error Reduction**:
  - AI Agents help minimize errors in critical processes like claims management and payment posting, leading to more accurate outcomes.

- **Increased Productivity**:
  - By freeing up staff time from repetitive tasks, healthcare providers can focus more on patient care, ultimately improving service delivery.

If you have any more questions or need further information, feel free to ask!

✔ You (type "quit" to quit): Does thoughful AI help me as a patient?
⠸ Thinking...
AI Assistant: I'm sorry, but I do not have specific information on how Thoughtful AI directly helps patients. Thoughtful AI primarily focuses on automating healthcare revenue cycle management and optimizing administrative processes for healthcare providers. If you have any questions about their services for healthcare providers, please let me know!

✔ You (type "quit" to quit): What does the claims processing agent (CAM) do?
⠹ Thinking...
AI Assistant: - CAM streamlines the submission and management of claims.
- It improves accuracy and reduces manual intervention.
- CAM accelerates reimbursements for healthcare providers.

✔ You (type "quit" to quit): quit

Thank you for using Thoughtful AI Support!
```


## Usage

### Prerequisites

 - [`node.js` Installation instructions](https://nodejs.org/en/download)
 - [`pnpm` Installation instructions](https://pnpm.io/installation)
 - [OpenAI API key](https://platform.openai.com/api-keys)

### pnpm (preferred)

```bash
git clone https://github.com/sramam/thoughtful-ai-cli.git
cd thoughtful-ai-cli
pnpm install
cp .env.example .env
# add your OpenAI API key to the .env file
pnpm start
```

### npm

```bash
git clone https://github.com/sramam/thoughtful-ai-cli.git
cd thoughtful-ai-cli
npm install
cp .env.example .env
# add your OpenAI API key to the .env file
npm run start
```