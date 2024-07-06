Feature: Add Organization Users
    As a admin
    I want to add Organization Users

    # Scenario: Login with valid credentials
    #     Given I am on the login page
    #     When I enter my username as "rahul.mallya@7edge.com"
    #     * I enter my password as "Admin@1234"
    #     * I click on the "login" button
    #     Then I should see a dialog box to select preference for otp verification
    #     When I click on the "Select Preference" button
    #     * I select my Preference
    #     * I click on the "send" button
    #     Then I see otp verification page
    #     When I enter otp as "981256"
    #     * I click on the "verify otp" button
    #     Then I should see a message Do you want to trust this browser
    #     When I click on the "No, I Don't" button
    #     Then I navigate to profile page
    #     * I should see a message "Login successful"
        

    Scenario: Add Organization Users
        Given I am on the add Organization Users page
        When I enter username as "<UserName>"
        And I enter first name as "<FirstName>"
        * I enter last name as "<LastName>"
        * I enter mobile number as "<MobileNumber>"
        * I enter main number as "<MainNumber>"
        When I click on "submit" button
        Then I should see a message "<Error_Message>"

        Examples:
            | UserName         | FirstName | LastName | MobileNumber | MainNumber | Error_Message                           |
            | invalidemail.com | John      | Doe      | 9999999999   | 9999999999 | Invalid user name                       |
            | user@domain      | Jane      | Smith    | 9999999999   | 9999999999 | Invalid user name                       |
            | user@domain.com  | John      | Doe      | 12345abc     | 9999999999 | Invalid Mobile Number                   |
            | user@domain.com  | Jane      | Smith    | 9999999999   | 1234abcd   | Invalid Main Number                     |
            |                  | John      | Doe      | 9999999999   | 9999999999 | Please fill in all the mandatory fields |
            | user@domain.com  |           | Doe      | 9999999999   | 9999999999 | Please fill in all the mandatory fields |
            | user@domain.com  | John      |          | 9999999999   | 9999999999 | Please fill in all the mandatory fields |
            | user@domain.com  | John      | Doe      | 9999999999   |            | Please fill in all the mandatory fields |


    Scenario: Adding user with correct credentials
        Given I am on the Add Organization User page
        When I enter username
        And I enter first name
        * I enter last name
        * I enter mobile number
        * I enter main number
         * I click on "Sub Divisions" button
        * I click on SUBS button
        * I click on User button
        When I click on "submit" button
        Then I should see a message "Are you sure you want to add this organization user?"
        When I click on "Yes" button                        
        # have not added YES in above line so that it doesnot create new user
         Then I should see a message "Organization user added successfully"
