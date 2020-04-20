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
#### System Requirements and Prerequisties ####
In order to run this application on either a computer simulator or to have it installed to your phone, please install either the newest version of xcode to run the iOS version of the application or the newest version of Android Visual Studio to run the android version of the application. The installation for xcode can be found [here](https://developer.apple.com/xcode/resources/ "here") (*Please note: you will need to sign in with your Apple ID to install xcode*), while the installation for android visual studio can be found [here](https://visualstudio.microsoft.com/vs/android/ "here").

#### Dependent Libraries ####
For the application to run properly on either iOS or Android, please install the following:

* [Node](https://nodejs.org/en/ "Node")

To make sure that this installation worked, paste the following two commands into your terminal:

	node -v
	npm - v
	
 Both commands should return the version that was installed, thus signaling that the installation was successful.


#### Build and Run Instructions ####
Now that you have either Android Studio or Xcode installed as well as Node, please follow these steps to run the application on the simulator provided by either xcode or android visual studio. 

##### iOS #####

Please make sure xcode and node is installed before continuing.

1.Clone this repository using the clone or download button at the top right of this page. Copy the HTTPS link, and then, in your terminal type in the following command: 

	git clone <replace with the copied link>
	
2.Now, navigate to inside the archlive folder we just created using the git clone command above.
	
	cd <path of where you created the repository/archlive>

3.Now that you are inside the archlive folder, please type the following command in: 

	sudo gem install cocoapods

4.After this, cd into the iOS folder from inside the archlive repository by using the following command:

	cd ios

5.Once you are inside the ios folder, please type in the following command into the terminal:
	
	pod install

6.Now we cd back into the main archive folder by using the following command in terminal: 

	cd ..

7.We know install all of our dependencies using the following:
	
	npm install

8.You should be ready to run the application now. Please type in the following command:
	
	react-native run-ios
9.If you wish to run the application on your iPhone, please plug your iPhone into the computer and run this command instead:
	
	react-native run-ios --device --configuration Release

##### Android ######

Please make sure Android Visual Studio and Node are downloaded before continuing. 

1.Clone this repository using the clone or download button at the top right of this page. Copy the HTTPS link, and then, in your terminal type in the following command: 

	git clone <replace with the copied link>
	
2.Now, navigate to inside the archlive folder we just created using the git clone command above.
	
	cd <path of where you created the repository/archlive>
	
3.After this, cd into the android folder from inside the archlive repository by using the following command:

	cd android

4.Now that you are inside the android folder, please type the following command in: 

	./gradlew clean


5.Now we cd back into the main archive folder by using the following command in terminal: 

	cd ..

6.We know install all of our dependencies using the following:
	
	npm install

7.You should be ready to run the application now. Please type in the following command:
	
	react-native run-android

#### Troubleshooting ####

If you face any troubles using the appropriate set of instructions above, then try these following troubleshooting guidelines. 

**iOS**
* Application fails to build very quickly (within a few milliseconds)

	* Open up the Xcode application
	* Open the archlive project workspace: This is found inside the archlive/ios folder
	* Open up the workspace
	* Click on signing and capabilities (this is located in different places depending in the version of xcode you are using. Google where you can find this for your version).
	* Assign your Apple ID as the development team
	* Try rebuilding

* Build fails due to a "cannot resolve ..." error
	
	* Try running npm-install again
	* Cd into the iOS folder and run pod install again
	* Try rebuilding


**Android**

* Application fails to build for debug.java
	* Go to ./android in cmd 
	* Type "gradlew clean"
	* Try rebuilding
	


