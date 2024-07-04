Feature: Manage Organization Users
    As an admin
    I want to view the list of Organization Users
    So that I can manage them effectively

#UNHAPPY PATH
    Scenario Outline: Invalid Search with ID,First Name,Email
        Given I am on the Manage Organization Users page
        When I click on "Search" bar
                                
        And  I enter text as "<details>"
        Then I should see a message "<message>"       

        Examples:
        |details                 |message                                               |
        |ORG000000000            |No exact matches found. Please try a different search |
        |unkown@7edge.com        |No exact matches found. Please try a different search |
        |unkown                  |No exact matches found. Please try a different search |

#HAPPY PATH Done
    Scenario: Navigate to Manage Organization Users
        Given I am on the profile page
        When I click on "Manage Organization Users" button
        Then I am on the Manage Organization Users page

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
       
    
    # SORT OPERATIONS  Done
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
        Then I should see the search detail "<details>" in the column with id "<columnId>"

        Examples:
        | details                    | columnId |
        | ORG000005618               | id       |
        | roopesh.yadava@7edge.com   | username |
        | Roopesh                    | first    |

        # Then I should see the search detail "<details>"
        # Examples:
        # |ORG000005618            |
        # |roopesh.yadava@7edge.com|
        # |Roopesh                 |
    
    #EXPORT Done
    Scenario: Performing Export
        Given I am on the Manage Organization Users page
        When I click on a "icon-export" button
        Then I should see a Popup box "Select columns to export"
        When I click on a "Export" button
        Then I should see a message "Organization user list exported successfully"

    #PAGE Done
    Scenario: Perform pagination and verify navigation
        Given I am on the Manage Organization Users page
        When I check for the pagination element
        Then I perform pagination if the element exists and verify navigation






