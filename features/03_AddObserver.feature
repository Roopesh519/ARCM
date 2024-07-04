Feature: Add Observer
    As a admin
    I want to add observer

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter my username as "roopesh.yadava@7edge.com"
        And I enter my password as "Admin@1234"
        * I click on the "login" button
        Then I should see a dialog box to select preference for otp verification
        When I click on the "Select Preference" button
        And I select my Preference
        * I click on the "send" button
        Then I see otp verification page
        When I enter otp as "981256"
        And I click on the "verify otp" button
        Then I should see a message Do you want to trust this browser
        When I click on the "No, I Don't" button
        Then I navigate to profile page
        And I should see a message "Login successful"


    Scenario: Add Observer
        Given I am on the manager observer page
        When I click on "Add Observer" button
        Then I should navigate to the add observer page
        When I enter username as "<UserName>"
        And I enter first name as "<FirstName>"
        * I enter last name as "<LastName>"
        * I enter mobile number as "<MobileNumber>"
        * I enter main number as "<MainNumber>"
        * I enter address as "<Address>"
        When I click on "submit" button
        Then I should see a message "<Error_Message>"

        Examples:
            | UserName         | FirstName | LastName | MobileNumber | MainNumber | Address              | Error_Message                           |
            | invalidemail.com | John      | Doe      | 9999999999   | 9999999999 | 123 Main St. Apt #5  | Invalid user name                       |
            | user@domain      | Jane      | Smith    | 9999999999   | 9999999999 | 456 Elm St. Apt #3   | Invalid user name                       |
            | user@domain.com  | John      | Doe      | 12345abc     | 9999999999 | 789 Main St. Apt #4  | Invalid mobile number                   |
            | user@domain.com  | Jane      | Smith    | 9999999999   | 1234abcd   | 123 Elm St. Apt #2   | Invalid main number                     |
            |                  | John      | Doe      | 9999999999   | 9999999999 | 123 Maple St. Apt #6 | Please fill in all the mandatory fields |
            | user@domain.com  |           | Doe      | 9999999999   | 9999999999 | 456 Oak St. Apt #1   | Please fill in all the mandatory fields |
            | user@domain.com  | John      |          | 9999999999   | 9999999999 | 789 Pine St. Apt #7  | Please fill in all the mandatory fields |
            | user@domain.com  | John      | Doe      | 9999999999   |            | 123 Birch St. Apt #3 | Please fill in all the mandatory fields |

        
    # happy
    # Scenario: Adding user with correct credentials
    #     Given I am on the add observer page
    #     When I enter username as "<UserName>"
    #     And I enter first name as "<FirstName>"
    #     * I enter last name as "<LastName>"
    #     * I enter mobile number as "<MobileNumber>"
    #     * I enter main number as "<MainNumber>"
    #     * I enter address as "<Address>"
    #     * I click on "Sub Division Name" button
    #     * I click on "Subdivision" button
    #     * I click on "Select patient" button
    #     * I click on "Patient" button
    #     Then I should see a pop up box for confirmation
    #     When I click on "Yes" button
    #     Then I should see a message "Patient associated successfully"
    #     When I click on "submit" button
    #     Then I should see a message "Observer added successfully"


# yes id === add_admin
# no id === Cancel


#  clcik on submit  --- message === Organization user added successfully