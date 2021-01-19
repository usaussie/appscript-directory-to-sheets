# appscript-directory-to-sheets
Pull directory info about users from GSuite / Workspace and put results into Google Sheets

Per discussion on the EDUCAUSE GSuite Community Group, i put this together in about 30 mins over lunch one day.

You should be able to change the details in the custom.gs file to your needs.

# GET STARTED
- You'll need to create a new Google Sheet, and then log in as a Google Super Admin (or account with Admin Directory SDK permissions)
- Create a new appscript project at script.google.com
- Add the 3 files from this repo
- change the values in the custom.gs file
- run the get_users() function in the jobs.gs file once.
- That will popup and prompt you for permissions (must be run as a super admin), and after it runs, it should show results in your google sheet. Note, this popup is just you granting permissions to yourself to run the scripts using the APIs.
- That's it.

# TODO
- Add support for custom schemas etc, or more easily configurable method for handling returned fields.
