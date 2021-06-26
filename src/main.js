const BOT_USER_OAUTH_TOKEN = 'Paste your Bot user OAuth Token'
const SLACK_POST_URL = 'https://slack.com/api/chat.postMessage'

// Docsに書き込む処理
function insertText() {
  var doc = DocumentApp.getActiveDocument();

  // ドキュメントの行数を取得
  const paragraphes = DocumentApp.getActiveDocument().getBody().getParagraphs();
  var paragraphesLength = paragraphes.length;

  if(paragraphesLength == 1){
    // 白紙の文書の場合は一番上に挿入する
    var insert_row = 0;
  }else{
    // すでにテキストがある場合は最後の行に挿入する
    var insert_row = paragraphesLength - 1;
  }

  // 箇条書きで表示
  insert_paragraph = doc.insertListItem(insert_row, 'test').setGlyphType(DocumentApp.GlyphType.BULLET);

}

// Post message
function doPost(e) {
  // メッセージを取得
  var get_text = e.parameter.text;

  var response = {
    response_type: 'in_channel',
    text: get_text,
  };

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
};
