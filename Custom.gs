/**
 * 
 * THIS SHOULD BE THE ONLY FILE YOU CHANGE.
 * 
 * ALL THE OTHER FILES ARE JUST FOR RUNNING THE JOBS/QUERIES ETC
 * 
 */

// for storing the results in google sheets
const SHEET_URL = "https://docs.google.com/spreadsheets/d/your-sheet-id/edit#gid=0";
const SHEET_TAB_NAME = "Sheet1";

// set up basic API call parameters
const GOOGLE_DOMAIN = 'something.edu'; // YOURDOMAIN.EDU
const ORDER_BY = 'EMAIL'; // EMAIL, FAMILY_NAME, GIVEN_NAME
const MAX_RESULTS_PER_PAGE = 100;
const PROJECTION_VALUE = 'FULL'; // BASIC, CUSTOM, FULL
const SORT_ORDER = 'ASCENDING'; // ASCENDING, DESCENDING
// set up your search query according to the documentation at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
const SEARCH_QUERY = 'orgUnitPath=/my-org-name';

// this is where we'll loop through each user object from google, and grab just the fields we'd like to collect/write to a sheet
function parse_user_results(users) {

  var result_array = [];
  if (users) {

      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        //Logger.log('%s (%s)', user.name.familyName, user.name.givenName, user.primaryEmail);
        //console.log(user);

        // loop through organizations to get the details we need
        var dept_title = ''
        var dept_department = '';
        if(user.organizations) {
          var organizations = user.organizations;
          
          var title_array = []
          var dept_array = [];

          for (var a = 0; a < organizations.length; a++) {

            title_array.push(organizations[a].title);
            dept_array.push(organizations[a].department)
            
          }

          // combine the collected info into a single string, using the delimeter provided
          dept_title = title_array.join(', ');
          dept_department = dept_array.join(', ');
          
        }
        
        var this_array = [
          user.primaryEmail,
          user.name.familyName, 
          user.name.givenName,
          user.orgUnitPath,
          dept_title,
          dept_department
        ];

        //console.log(this_array);
        //return;

        result_array.push(this_array);

      }
    } else {
      Logger.log('No users found.');
    }

    return result_array;

}
