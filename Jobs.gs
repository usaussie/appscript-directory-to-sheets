/**
 * 
 * THIS IS THE FILE THAT YOU WILL USE TO RUN TRIGGERED/SCHEDULED JOBS
 * 
 */
function get_users() {

  var users = listAllUsers(SEARCH_QUERY);

  // now parse to get the fields we want  
  var results = parse_user_results(users);

  console.log(results);
  //return;

  var write_to_sheet = write_to_google_sheet(results);

}

