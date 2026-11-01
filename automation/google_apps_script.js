/**
 * CAPSTONE 53: GOOGLE APPS SCRIPT AI POLICY MONITOR
 * 
 * Target: Google Sheets Automation
 * How to use:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Name your sheet "AI_Policy_Tracker"
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code and click Save
 * 5. Run 'setupSheet()' once to create headers
 * 6. Set up a Time-Driven Trigger (Triggers > Add Trigger > 'trackAiPolicyUpdates' > Time-driven > Daily)
 */

function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Timestamp",
    "Jurisdiction",
    "Agency / Source",
    "Regulation / Policy Title",
    "Publication Date",
    "Legal Category",
    "Summary of Provisions",
    "Official Source Link"
  ];
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var range = sheet.getRange(1, 1, 1, headers.length);
    range.setFontWeight("bold");
    range.setBackground("#1e293b");
    range.setFontColor("#38bdf8");
    sheet.setFrozenRows(1);
  }
}

function trackAiPolicyUpdates() {
  setupSheet();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var feeds = [
    {
      jurisdiction: "European Union",
      agency: "European Commission Digital Strategy",
      url: "https://digital-strategy.ec.europa.eu/en/rss.xml",
      tag: "EU AI Act / Policy"
    },
    {
      jurisdiction: "United States",
      agency: "NIST ITL News",
      url: "https://www.nist.gov/news-events/news/rss.xml",
      tag: "NIST AI Standards"
    },
    {
      jurisdiction: "United States",
      agency: "Federal Trade Commission",
      url: "https://www.ftc.gov/news-events/news-releases/rss.xml",
      tag: "FTC Enforcement"
    }
  ];

  var keywords = ["ai", "artificial intelligence", "deepfake", "algorithm", "regulation", "act", "compliance", "model"];
  var existingUrls = getExistingUrls(sheet);
  var newEntriesCount = 0;

  feeds.forEach(function(feed) {
    try {
      var response = UrlFetchApp.fetch(feed.url, { muteHttpExceptions: true });
      if (response.getResponseCode() === 200) {
        var xml = response.getContentText();
        var document = XmlService.parse(xml);
        var root = document.getRootElement();
        var channel = root.getChild("channel");
        if (channel) {
          var items = channel.getChildren("item");
          items.forEach(function(item) {
            var title = item.getChildText("title") || "";
            var link = item.getChildText("link") || "";
            var description = item.getChildText("description") || "";
            var pubDate = item.getChildText("pubDate") || new Date().toISOString();

            var combinedText = (title + " " + description).toLowerCase();
            var matchesKeyword = keywords.some(function(k) {
              return combinedText.indexOf(k) !== -1;
            });

            if (matchesKeyword && !existingUrls[link] && link) {
              sheet.appendRow([
                new Date(),
                feed.jurisdiction,
                feed.agency,
                title,
                pubDate,
                feed.tag,
                cleanHtml(description).substring(0, 250),
                link
              ]);
              existingUrls[link] = true;
              newEntriesCount++;
            }
          });
        }
      }
    } catch (e) {
      Logger.log("Error fetching feed " + feed.agency + ": " + e.toString());
    }
  });

  Logger.log("Tracking cycle complete. Added " + newEntriesCount + " new AI policy entries.");
}

function getExistingUrls(sheet) {
  var urls = {};
  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    var values = sheet.getRange(2, 8, lastRow - 1, 1).getValues();
    values.forEach(function(row) {
      if (row[0]) urls[row[0]] = true;
    });
  }
  return urls;
}

function cleanHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
