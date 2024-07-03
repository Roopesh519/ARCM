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
    Scenario Outline: Perform Sort Operation for ID
        Given I am on the Manage Organization Users page
        When I click on "<Button>" button
        Then The "<Button>" column must be in ascending order
        When I click on "<Button>" button
        Then The "<Button>" column must be in descending order

          Examples:
        |ID          |
        |Username    |
        |First Name  |
        |Status      |
    # SEARCH

    Scenario Outline: Search with ID,First Name,Email
        Given I am on the Manage Organization Users page
        When I click on "Search" bar                                 
        And  I enter text as "<details>"
        Then I should see the search detail

        Examples:
        |ORG000005618            |
        |roopesh.yadava@7edge.com|
        |Roopesh                 |


