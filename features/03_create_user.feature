Feature: Add user
    As a admin
    I want to add Organization Users



Scenario: Cancel adding new User at beginning
        Given I navigate to the Add Organization User
        When I click on "Cancel" button
        Then I am on the Manage Organization Users page 


Scenario: Cancel adding new User at end
        Given I navigate to the Add Organization User
        When I enter username as "rama@7edge.com"
        And I enter First Name as "rama"
        * I enter Last Name as "sharma"
        * I enter Main Number as "7894561237"
        * I enter Mobile Number as "7894561237"
        * I click on "Sub Divisions" button
        * I click on "Clear All" button
        * I click on "SUB000000039-Sub - 1" button
        * I click on "User" button
        When I click on "Cancel" button
        Then I should see a message "Are you sure you want to cancel the changes?"
        When I click on "No" button
        Then I should remain in Add Organization User page
        When I click on "Cancel" button
        Then I should see a message "Are you sure you want to cancel the changes?"
        When I click on "Yes" button
        Then I am on the Manage Organization Users page       


#IGNORE
# Scenario:Create New User unsuccessful
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
#         When I click on "No" button
#         Then I should remain in Organization User page

#HAPPY PATH
    Scenario:Create New User success
        Given I am on the Manage Organization Users page
        When I click on "Add Organization User" button
        Then I navigate to the Add Organization User
        When I enter username as "rama@7edge.com"
        And I enter First Name as "rama"
        * I enter Last Name as "sharma"
        * I enter Main Number as "7894561237"
        * I enter Mobile Number as "7894561237"
        * I click on "Sub Divisions" button
        * I click on "Clear All" button
        * I click on "SUB000000039-Sub - 1" button
        * I click on "User" button
        When I click on "submit" button
        Then I should see a message "Are you sure you want to add this organization user?"
        When I click on "Yes" button
        Then I should see a message "Organization user added successfully"


      