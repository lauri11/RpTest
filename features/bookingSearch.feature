Feature: As a user
  I want to have a possibility
  to book a hotel for given dates

  Scenario: I want to search for an accommodation for given dates
    Given I navigate to Booking main page
    And I set New York as destination in the Search form of Booking main page
    And I set today as check-in date
    And I set today plus 7 days as check-out date
    When I submit the Search form
    Then I see results returned from the search and displayed on the page
    And I see each result contain New York as location
