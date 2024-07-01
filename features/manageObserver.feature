Feature: Manage Observers
    As a admin
    I want to manage Observers

    Scenario: Navigate to manage observer
        Given I am on the profile page
        When I click on "Manage Observer" button
        Then I navigate to manage observer page

    Scenario: Listing the observers
        Given I am on the manage observer page
        When 