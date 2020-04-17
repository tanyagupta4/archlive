Ivan Allen Mayoral Archive Tour
=========================================

The Ivan Allen Mayoral Archive Tour is an application created to bring the digital Ivan Allen Archives to an application. The application allows users to tour elements of the archive through an interactive map, informational pages, and a guided tour of events from the archive.  

This application was created in coordinance with the Georgia Tech Junior Design CS program. This application was built across Fall 2019 and Spring 2020 by the following team members: Tanya Gupta, Ben Pooser, Anthony Marshall, Daniel Wade, Matt McKelvey, and Akib Bin Nizam. The application was created for our client, Dr. Amanda Madden.

Release Notes
-------------
#### Release Version ####
Version Number: 1.0.0

#### Release Features ####
 * Guided Tour Through Archive
 
 	* The guided tour allows users the chance to walk through several events from the archive with the voice of a historical expert behind them. The guided tour starts by showing an user a location on a map, then allows users to learn about that location before guiding them to the next location also shown on a map. The guided tours main functionality is to allow users to walk through a geotagged tour while learning about how the archival events relate to each other.
 * Carosel of Events for Further Exploration/Information
 
 	* This feature allows users to scroll through several events and then click on those events that interest them. Once they do so, the users will be guided to a page full of curated historical information about that event.
	
 * Interactive Maps
 	
	* The interactive maps are another feature presented inside within each event from the above feature. Once a user clicks on an event, they will be sent to an informational page. However, since much of the information is multimodal, each event also has an option to discover relevant pieces of information on an interactive map. The interactive map itself holds documents, letters, etc. from the archives that are relevant to each specific event. The users can scroll through all the additional information on a map and see where all the letters and documents were sent from. 
* Links to Archive References

	* This feature is present inside of each event page as well and allows users to go directly to the online digital archive if they wish to do so.
* Proper Acknowledgements
 
 	* This feature is accessible on the main page of the application. Since this application is an informative one, we made sure to give the proper ackbowledgements to the historians, students, and teachers that all collaborated together to bring us the content for the application. 


#### Known Defects #### 

* App consistency across iOS and Android platforms 
	
	* We built this application in React-Native with a goal to make it available to both iOS and Android users. However, there are some minor visual inconsistencies across the application between both platforms in regards to button placement, text size, and animations.	
	
Besides this one known defect, the rest of the application functions as expected across both platforms. 

* Lack of Admin Portal 
	
	* There is currently no clean portal for our admin to log in and add more events and stops on the tour without touching the code. This was a stretch goal and was not reached.


#### Previous Defects ####

* Google Maps Implmentation on iOS
	
	* Struggled to allow google maps API to load up in a timely manner. 
	* Issue was resolved using loading buffers to not just have users looking at a blank screen.
	
* Carousel of Events
	
	* Unable to implement React-Native Snap-Carousel to properly display our custom event cards. 
	* Issue was resolved with further adjustments to our custom event cards. 
	
* Animating Tour Map Callouts
	
	* Unable to animate the map locations for the tour to automatially render their callout for the guided tour.
	* Resolved by showing the user their current tour location and that single locations callout.
	

Installation Guide
------------------

