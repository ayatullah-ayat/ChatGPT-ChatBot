## Chatbot Powered By ChatGPT

<h1 align="center">Welcome to Chatgpt-Chatbot 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/ayatullah-ayat" target="_blank">
    <img alt="Twitter: fuergaosi" src="https://img.shields.io/twitter/follow/fuergaosi.svg?style=social" />
  </a>
  </a>
  <a href="https://discord.gg/8fXNrxwUJH" target="blank">
    <img src="https://img.shields.io/discord/1058994816446369832?label=Join%20Community&logo=discord&style=flat-square" alt="join discord community of github profile readme generator"/>
  </a>
</p>


[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/dMLG70?referralCode=bIYugQ)

## 🌟 Features

- Interact with WeChat and ChatGPT:
   - Use ChatGPT on WeChat with [wechaty](https://github.com/wechaty/wechaty) and [Official API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)
   - Add conversation support
   - Support command setting

- Deployment and configuration options:
   - Add Dockerfile, deployable with [docker](#use-with-docker)
   - Support deployment using [docker compose](#use-with-docker-compose)
   - Support [Railway](#use-with-railway) and [Fly.io](#use-with-flyio) deployment

- Other features:
   - Support [Dall·E](https://labs.openai.com/)
   - Support [whisper](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)
   - Support setting prompt
   - Support proxy (in development)

1. Clone the project and enter the project directory
   ```shell
   git clone https://github.com/ayatullah-ayat/ChatGPT-ChatBot && cd ChatGPT-ChatBot
   ```


> How to get OPENAI API KEY? [Click here](https://platform.openai.com/account/api-keys)


## Use with nodejs

> You need NodeJS 18.0.0 version and above

```sh
# Clone the project
git clone https://github.com/ayatullah-ayat/ChatGPT-ChatBot && cd ChatGPT-ChatBot
# Install dependencies
npm install
# Copy the configuration file according to the template
cp .env.example .env
# Edit the configuration file
vim .env
# Start the Frontend
npm run start

# Start the Backend
npm run dev
```

> Please make sure your WeChat account can log in [WeChat on web](https://wx.qq.com/)

## 📝 Environment Variables

| name                         | description                                                                                                                                                                          |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API                          | API endpoint of ChatGPT                                                                                                                                                              |
| OPENAI_API_KEY               | [create new secret key](https://platform.openai.com/account/api-keys)                                                                                                                |
| MODEL                        | ID of the model to use. Currently, only gpt-3.5-turbo and gpt-3.5-turbo-0301 are supported.                                                                                          |
| TEMPERATURE                  | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |
| CHAT_TRIGGER_RULE            | Private chat triggering rules.                                                                                                                                                       |
| DISABLE_GROUP_MESSAGE        | Prohibited to use ChatGPT in group chat.                                                                                                                                             |
| CHAT_PRIVATE_TRIGGER_KEYWORD | Keyword to trigger ChatGPT reply in WeChat private chat                                                                                                                              |
| BLOCK_WORDS                  | Chat blocker words, (works for both private and group chats, Use, Split)                                                                                                             |
| CHATGPT_BLOCK_WORDS          | The blocked words returned by ChatGPT(works for both private and group chats, Use, Split)                                                                                            |


