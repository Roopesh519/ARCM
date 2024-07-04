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
        * I click on "submit" button
        Then I should see a message "Patient associated successfully"

        Observer added successfully

        Examples:
        | UserName | FirstName | LastName|||||||||||||||||||


    # yes id === add_admin
    # no id === Cancel


    #  clcik on submit  --- message === Organization user added successfully