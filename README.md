# UFOs
UCB Module Challenge: Use Java Script, HTML and CSS to create a custom webpage that showcases different UIFO sightings around the world.

# Overview of the Analysis

# Results
The picture below shows us how the finished webpage with the multiple search criterias looks like.


To initiate a search, type in the specific criteria/fields you want to start looking into. For example - A state and the shape of the UFO. After entering the informaton, press enter or return on your keyboard, HOWEVER if there are more fields that need to be filled, press enter or retuen after the last information has been entered. There are two possible search results based on what filters were written into the HTML for the page.

* Results with only BOTH(or all) searched values appearing on the SAME row.
In this example we are looking for fireball shaped UFO's that appeared in ca - California.

Fireballs in California

This is the block of code used to yield search results if the user only wants rows where all the values they typed in the search field(s) appear in the same row. It is currently the one in use on the HTML of the page and can be found on lines     

AndCaseFilter

* Results showing ALL rows with ANY of the searched values.
The example below uses a different block of code than the one shown above. When we type in fireball for UFO shape and co-Colarado for the state, the search results would show ALL rows with "triangle" and "co" present in them, regardless of whether they exist in the same row or not.

Colarado and triangle

This is the block of code that yielded the results above. It is found in lines and is currently "commented out" in the HTML   of the current page.

OrCaseFilter



# Summary
## Drawback of This Webpage
At first glance and if not familiar with how to search for information on the page, the user might assume that all search fields might need to be filled up or completed in order to start a search. If the page was to remain the same, a simple change of "Search by" instead of "Enter date(etc..)" would be helpful for a person new to the page.   

## Additional Recommendations for Further Development
* Instead of the user deleting what they have typed on the each field or criteria, a "clear all" button for all the search fields or for each specific search field or criteria would be helpful.
* Having an additional button that reloads or refreshes the page would also be a helpful tool for the user to have instead of hitting the reload button on top of the page if they want to start a new search
