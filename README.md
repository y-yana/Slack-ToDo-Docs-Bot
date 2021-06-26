# Write to Google Docs from Slack &#x1f916; &#x1f4c4;
This Slack Bot can write messages received from Slack to Google Docs.

## &#x1f440; Details
Messages sent by Slack are bulleted and added to Google Docs.<br>
This bot can be used with `/todo` in Slack.

## &#x1f914; Example of use
- &#x1f4e4; Messages sent on Slack
> `/todo` Reply to email
- &#x1f4e5; Messages receive on Slack
> 「Reply to email」を追加しました！<br>
> https&#58;/<span>/docs.google.com</span>/document/hogehoge~

## &#x1f331; Necessary
There are two things you need to get this Slack bot to work.
1. `Bot User OAuth Token`
2. `Google Docs URL you want to write`

## &#x1f60e; How to set up
### 1. Setup GAS(Google App Script)
1. Prepare your GAS and paste the `src/main.js` code into your script editor.
> &#x1f647; I'm sorry, but I won't go into detail about how to prepare a GAS project.
2. Open [Slack App page](https://api.slack.com/apps/) and click `Create New App`.
> &#x1f44d; Notice: You can also add new features to your existing Slack app.
3. Copy `Bot User OAuth Token` from `OAuth Tokens for Your Workspace`.
4. Paste code for `BOT_USER_OAUTH_TOKEN` in editor (Line: 1).
5. Copy the URL of the Google Docs you want to write.
6. Paste code for `Paste your Docs url` in editor (Line: 33).

### 2. Deploy GAS
In App script editor
1. Click deploy button -> new deploy.
2. Type is `Web Application`
3. Description is `todo bot`
4. Execute by `Me`
5. Access user `Everyone`
6. Ship your code `Deploy`
> If show This app isn't verified. page, click Go to foobar (unsafe).
7. Copy exec URL

### 3. Setup Slack Bot
Open the [Slack App](https://api.slack.com/apps/) and set the following:
- **Slash Commands**

| title | value |
|:-----------:|:------------:|
| Command | /todo |
| Request URL | Copied exec URL by Step 2 |

- **Permissions**: Add `Commands` scope for your bot.

### 	&#x1f389; Now you can use `/todo` command in your Slack
