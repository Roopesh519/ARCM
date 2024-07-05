# Feature: View,Edit,activate and Deactivate
#     As a admin
#     I want to perform View,Edit,activate and Deactivate operations 

#     Scenario:Performing View operations
#         Given I am on the Manage Organization Users page
#         When I click on "Search" bar
#         And I enter text as "ORG000005822"
#         * I store the search result
#         * I click on three dots
#         * I click on View
#         Then I navigate to View Organization User
#         * I validate the detail

#     Scenario: Activate an organization user
#         Given I am on the Manage Organization Users page
#         When I click on "Search" bar
#         And I enter text as "ORG000005822"
#         * I click on three dots
#         And I click on Activate
#         Then I see a message "Are you sure you want activate this organization user?"
#         And I click on activate button
#         Then I see a message "Organization user activated successfully"


#         Organization user deactivated successfully