function insertText() {
  var doc = DocumentApp.getActiveDocument();

 // ○日後の日付を生成
  var plusDays = 0;
  var targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + plusDays);
  var date_text = Utilities.formatDate(targetDate, 'Asia/Tokyo', 'MM/dd');

 // 最後の行にアジェンダを差し込む
  const paragraphes = DocumentApp.getActiveDocument().getBody().getParagraphs();
  var paragraphesLength = paragraphes.length;
  var insert_row = paragraphesLength;

 // 追加テキストを行ごとで配列化
  /**************************
  配列書式 => ["文字装飾","追加テキスト"],

  ↓使える文字装飾
  TITLE => タイトル装飾
  HEAD1 ~ HEAD4 => 見出し装飾
  NORMAL => 文字装飾なし
  BULLET => 箇条書き
  HR     => 区切り線
 **************************/
  var insertArray = [
    ["HEAD1", date_text],
    ["HEAD2", "アジェンダ"],
    ["HEAD3", "1.進捗状況確認"],
    ["BULLET", ""],
    ["HEAD3", "2.伝達事項"],
    ["BULLET", ""],
    ["HEAD3", "3.来週のアクション"],
    ["BULLET", ""],
    ["NORMAL", ""],
    ["NORMAL", ""],
  ];

  for (i=0; i<insertArray.length; i++) {
    switch (insertArray[i][0]) {
      case "TITLE":
        insert_paragraph = doc.insertParagraph(insert_row, insertArray[i][1]).setHeading(DocumentApp.ParagraphHeading.TITLE);
        break;
      case "HEAD1":
        insert_paragraph = doc.insertParagraph(insert_row, insertArray[i][1]).setHeading(DocumentApp.ParagraphHeading.HEADING1);
        break;
      case "HEAD2":
        insert_paragraph = doc.insertParagraph(insert_row, insertArray[i][1]).setHeading(DocumentApp.ParagraphHeading.HEADING2);
        break;
      case "HEAD3":
        insert_paragraph = doc.insertParagraph(insert_row, insertArray[i][1]).setHeading(DocumentApp.ParagraphHeading.HEADING3);
        break;
      case "HEAD4":
        insert_paragraph = doc.insertParagraph(insert_row, insertArray[i][1]).setHeading(DocumentApp.ParagraphHeading.HEADING4);
        break;
      case "BULLET":
        insert_paragraph = doc.insertListItem(insert_row, insertArray[i][1]).setGlyphType(DocumentApp.GlyphType.BULLET);
        break;
      case "HR":
        insert_paragraph = doc.insertParagraph(insert_row, insertArray[i][1]).insertHorizontalRule(0);
        break;
      default:
        insert_paragraph = doc.insertParagraph(insert_row, insertArray[i][1]).setHeading(DocumentApp.ParagraphHeading.NORMAL);
        break;
    }
    insert_row++;
  }
}
