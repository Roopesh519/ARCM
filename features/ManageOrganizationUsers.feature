Feature: Manage Organization Users
    As an admin
    I want to view the list of Organization Users
    So that I can manage them effectively

    Scenario: Navigate to Manage Organization Users
        Given I am on the profile page
        When I click on "Manage Organization Users" button
        Then I navigate to Manage Organization Users page

    Scenario: Display list of Organization Users
        Given I am on the Manage Organization Users page
        Then I should see a table with the following rows:
        | List of Users    | 
        | ID               | 
        | Username         |
        | First Name       | 
        | Last Name        | 
        | Permission       |
        | Status           | 
        | Created Date     |
        | Email Address    | 
        | Main Number      | 
        | Mobile Number    | 
        | Actions          | 
        And The table should display a list of Organization Users
        And I should see a total number of records displayed at the bottom  # said to remove
    
    # SORT OPERATIONS
    Scenario: Perform Sort Operation for ID
        Given I am on the Manage Organization Users page
        When I click on "ID" button
        Then The ID column must be in ascending order
        When I click on "ID" button
        Then The Id column must be in descending order

    Scenario: Perform Sort Operation for Username
        Given I am on the Manage Organization Users page
        When I click on "Username" button
        Then The ID column must be in ascending order
        When I click on "Username" button
        Then The Id column must be in descending order
      
    Scenario: Perform Sort Operation for First Name
        Given I am on the Manage Organization Users page
        When I click on "First Name" button
        Then The ID column must be in ascending order
        When I click on "First Name" button
        Then The Id column must be in descending order

    Scenario: Perform Sort Operation Status
        Given I am on the Manage Organization Users page
        When I click on "Status" button
        Then The ID column must be in ascending order
        When I click on "Status" button
        Then The Id column must be in descending order

    # SEARCH

    Scenario: Search with ID
        Given I am on the Manage Organization Users page
        When I click on "Search" bar                                 # should i make it button?
        And  I enter text as "ORG000005618"
        Then I should see the search detail

    Scenario: Search with Username
        Given I am on the Manage Organization Users page
        When I click on "Search" bar                                 # should i make it button?
        And  I enter text as "ORG000005618"
        Then I should see the search detail
    Scenario: Search with First Name
        
    Scenario: Search with Email Address

