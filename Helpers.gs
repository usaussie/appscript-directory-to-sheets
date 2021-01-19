/**
 * 
 * DO NOT CHANGE ANYTHING IN THIS FILE
 * 
 */
function listAllUsers(search_query) {
  
  var pageToken;
  var page;

  var result_array = [];

  do {
    page = AdminDirectory.Users.list({
      domain: GOOGLE_DOMAIN,
      orderBy: ORDER_BY,
      query: search_query,
      sortOrder: SORT_ORDER,
      maxResults: MAX_RESULTS_PER_PAGE,
      pageToken: pageToken,
      projection: PROJECTION_VALUE
    });
    var users = page.users;
    if (users) {
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        //Logger.log('%s (%s)', user.name.familyName, user.name.givenName, user.primaryEmail);
        //console.log(user);

        result_array.push(users[i]);

      }
    } else {
      Logger.log('No users found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);

  return result_array;

}

function write_to_google_sheet(array_data) {

  // write collected rows arrays to the sheet in one operation (quicker than individual appends)
  var ss = SpreadsheetApp.openByUrl(SHEET_URL).getSheetByName(SHEET_TAB_NAME);
  ss.getRange(ss.getLastRow() + 1, 1, array_data.length, array_data[0].length).setValues(array_data);

}
