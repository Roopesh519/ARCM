Feature: Perform action on the observer
    As a admin
    I want to view, edit, activate and deactivate

    Scenario: Search for already existing observer with ID
        Given I am on the manage observer page
        When I search for a particular observer with ID
        Then I should see the list of observer with the searched ID