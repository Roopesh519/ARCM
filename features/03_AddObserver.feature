Feature: Add Observer
    As a admin
    I want to add observer

    Scenario: Add Observer
        Given I am on the manager observer page
        When I click on "Add Observer" button
        Then I should navigate to the add observer page
        When I enter username as "<UserName>"
        And I enter first name as "<FirstName>"
        * I enter first name as "<LastName>"
        * I enter first name as "<MobileNumber>"
        * I enter first name as "<MainNumber>"
        * I enter first name as "<Address>"
        * I click on "Sub Division Name" button
        * I search sub division by "<Subdivision>"
        * I click on "<Subdivision>" button
        * I click on "Select patient" button
        * I click on "Patient" button
        * I click on "Yes" button
        Then I should see a message "Patient associated successfully"
        When I click on "submit" button
        Then I should see a message "Observer added successfully"

        Examples:
            | UserName         | FirstName | LastName | MobileNumber | MainNumber | Address              | Error Message                           |
            | invalidemail.com | John      | Doe      | 9999999999   | 9999999999 | 123 Main St. Apt #5  | Invalid user name                       |
            | user@domain      | Jane      | Smith    | 9999999999   | 9999999999 | 456 Elm St. Apt #3   | Invalid user name                       |
            | user@domain.com  | John      | Doe      | 12345abc     | 9999999999 | 789 Main St. Apt #4  | Invalid mobile number                   |
            | user@domain.com  | Jane      | Smith    | 9999999999   | 1234abcd   | 123 Elm St. Apt #2   | Invalid main number                     |
            |                  | John      | Doe      | 9999999999   | 9999999999 | 123 Maple St. Apt #6 | Please fill in all the mandatory fields |
            | user@domain.com  |           | Doe      | 9999999999   | 9999999999 | 456 Oak St. Apt #1   | Please fill in all the mandatory fields |
            | user@domain.com  | John      |          | 9999999999   | 9999999999 | 789 Pine St. Apt #7  | Please fill in all the mandatory fields |
            | user@domain.com  | John      | Doe      | 9999999999   |            | 123 Birch St. Apt #3 | Please fill in all the mandatory fields |




# yes id === add_admin
# no id === Cancel


#  clcik on submit  --- message === Organization user added successfully