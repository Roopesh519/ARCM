Feature: Add Organization Users
    As a admin
    I want to add Organization Users

    # Scenario: Login with valid credentials
    #     Given I am on the login page
    #     When I enter my username as "roopesh.yadava@7edge.com"
    #     And I enter my password as "Admin@1234"
    #     * I click on the "login" button
    #     Then I should see a dialog box to select preference for otp verification
    #     When I click on the "Select Preference" button
    #     And I select my Preference
    #     * I click on the "send" button
    #     Then I see otp verification page
    #     When I enter otp as "981256"
    #     And I click on the "verify otp" button
    #     Then I should see a message Do you want to trust this browser
    #     When I click on the "No, I Don't" button
    #     Then I navigate to profile page
    #     And I should see a message "Login successful"


    Scenario: Add Organization Users
        Given I am on the manager Organization Users page
        # When I click on "Add Organization Users" button
        # Then I should navigate to the add Organization Users page
        And I am on the add Organization Users page
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

        
    #HAPPY PATH
    Scenario:Create New User success
        Given I am on the manage Organization Users page
        When I click on "Add Organization User" button
        Then I should navigate to the Add Organization User page
        When I enter username as "rama@7edge.com"
        When I enter first name as "ram"
        * I enter last name as "Sharma"
        * I enter mobile number as "7894567894"
        * I enter main number as "7894567894"
        * I click on "Sub Divisions" button
        * I click on "Clear All" button
        * I click on "SUB000000039-Sub - 1" button
        * I click on "User" button
        When I click on "submit" button
        Then I should see a message "Are you sure you want to add this organization user?"
        When I click on "Yes" button
        Then I should see a message "Organization user added successfully"




#Organization user added successfully





































































































































































































































# Feature: Add user
#     As a admin
#     I want to add Organization Users



# Scenario: Cancel adding new User at beginning
#         Given I navigate to the Add Organization User
#         When I click on "Cancel" button
#         Then I am on the Manage Organization Users page 


# Scenario: Cancel adding new User at end
#         Given I navigate to the Add Organization User
#         When I enter username as "rama@7edge.com"
#         And I enter First Name as "rama"
#         * I enter Last Name as "sharma"
#         * I enter Main Number as "7894561237"
#         * I enter Mobile Number as "7894561237"
#         * I click on "Sub Divisions" button
#         * I click on "Clear All" button
#         * I click on "SUB000000039-Sub - 1" button
#         * I click on "User" button
#         When I click on "Cancel" button
#         Then I should see a message "Are you sure you want to cancel the changes?"
#         When I click on "No" button
#         When I click on "Cancel" button
#         Then I should see a message "Are you sure you want to cancel the changes?"
#         When I click on "Yes" button
#         Then I am on the Manage Organization Users page       

#     Scenario Outline: Add Users error messages
#         Given I am on the Manage Organization Users page
#         When I click on "Add Organization User" button
#         Then I navigate to the Add Organization User
#         When I enter username as "<UserName>"
#         And I enter first name as "<FirstName>"
#         * I enter last name as "<LastName>"
#         * I enter mobile number as "<MobileNumber>"
#         * I enter main number as "<MainNumber>"
#         * I click on a "sub_divisions" button 
#         When I click on "submit" button
#         Then I should see a message "<Error_Message>"

#         Examples:
#             | UserName         | FirstName | LastName | MobileNumber | MainNumber | Error_Message                           |
#             | invalidemail.com | John      | Doe      | 9999999999   | 9999999999 | Invalid user name                       |
#             | user@domain      | Jane      | Smith    | 9999999999   | 9999999999 | Invalid user name                       |
#             | user@domain.com  | John      | Doe      | 12345abc     | 9999999999 | Invalid mobile number                   |
#             | user@domain.com  | Jane      | Smith    | 9999999999   | 1234abcd   | Invalid main number                     |
#             |                  | John      | Doe      | 9999999999   | 9999999999 | Please fill in all the mandatory fields |
#             | user@domain.com  |           | Doe      | 9999999999   | 9999999999 | Please fill in all the mandatory fields |
#             | user@domain.com  | John      |          | 9999999999   | 9999999999 | Please fill in all the mandatory fields |
#             | user@domain.com  | John      | Doe      | 9999999999   |            | Please fill in all the mandatory fields |
#             | user@domain.com  | John      | Doe      | 9999999999   | 9999999999 | Please fill in all the mandatory fields |
    
#     Scenario: Sub Division Clear All
#         Scenario:Create New User success
#         Given I am on the Manage Organization Users page    
#         When I click on "Add Organization User" button
#         Then I navigate to the Add Organization User
#         When I enter username as "rama@7edge.com"
#         And I enter First Name as "rama"
#         * I enter Last Name as "sharma"
#         * I enter Main Number as "7894561237"
#         * I enter Mobile Number as "7894561237"
#         * I click on a "sub_divisions" button
#         * I click on "Clear All" button
#         When I click on "submit" button
#         Then I should see a message "Please fill in all the mandatory fields"


# #HAPPY PATH
#     Scenario:Create New User success
#         Given I am on the Manage Organization Users page
#         When I click on "Add Organization User" button
#         Then I navigate to the Add Organization User
#         When I enter username as "rama@7edge.com"
#         And I enter First Name as "rama"
#         * I enter Last Name as "sharma"
#         * I enter Main Number as "7894561237"
#         * I enter Mobile Number as "7894561237"
#         * I click on "Sub Divisions" button
#         * I click on "Clear All" button
#         * I click on "SUB000000039-Sub - 1" button
#         * I click on "User" button
#         When I click on "submit" button
#         Then I should see a message "Are you sure you want to add this organization user?"
#         When I click on "Yes" button
#         Then I should see a message "Organization user added successfully"


      
