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
            | UserName                                 | FirstName | LastName | MobileNumber | MainNumber | Address             |
            | invalidemail.com                         | John123   | Doe!     | 12345abc     | +12-345    |                     |
            | verylongemail@domainthatdoesnotexist.com | Jane!     | Smith123 | abcdefgh     | 1234abcd   | @#$%^&*()           |
            |                                          |           |          |              |            |                     |
            | user@domain                              |           |          |              |            | 123 Main St. Apt #5 |
            | validemail@domain.com                    | John      | Doe      | 123456       | 78901      |                     |
            | invalid@User                             | Jane      | Smith    | 12345        | 12a45      | 456 Elm St. Apt #3  |
            | validemail2@domain.com                   | J@ne      | Smith    | 987654       | 123456     |                     |
            | anotherinvalid@.com                      | John      | Doe      | 1234!6789    | 1234567890 | 123 Main St. Apt #5 |




# yes id === add_admin
# no id === Cancel


#  clcik on submit  --- message === Organization user added successfully