<h1>Hello there!<br/> </h1>

- 🌱 I’m currently working with: C# and .NET MAUI
- 👾 I have been working as a Software Engineer for: 5 years, along with 2 years of on the job shadowing
- 💬 Programming: Progress, Angular, Node, TypeScript, JavaScript, C#, .NET, Python, Go, CSS, HTML
- 📫 How to reach me: <a href="https://www.linkedin.com/in/mickmakhool/">LinkedIn</a>
- 😄 Pronouns: He/Him
- ⚡ Fun fact: I met my wife on World of Warcraft!

# 👨‍💻 Software Engineer Portfolio

This portfolio contains notable contributions throughout my career as a Software Engineer.

Within the last year, I have gone through a great deal of growth, 
and have been given the opportunity to improve upon my knowledge even more after transitioning into a brand new engineering team at the beginning of 2023. This transition 
allowed me to contribute to more complex business efforts that weren't previously within my scope.

Towards the end of 2023, I find myself within a new organization, providing new and fun challenges to overcome. My long-term goal that I plan on carrying into 2024 is to
provide my organization with modern solutions to replace their legacy applications that either aren't being supported anymore, or not fully meeting our team's expectations. 
The first project I take from the backlog was to find a new solution for their current time clock application.

# Projects

## CoeClock

I took a lead role in revolutionizing our time-clock system by replacing an outdated legacy application with a state-of-the-art solution. Harnessing the power of .NET MAUI, I laid the groundwork for the project, 
establishing a robust and scalable code infrastructure. A key aspect of the initiative was the development of a dynamic dashboard, meticulously crafted to serve as the central hub for the time clock and future 
applications, enhancing user accessibility and interaction.

Delving into the intricacies of data management, I initiated the creation of a MongoDB database from the ground up. This involved not only spinning up the database but also designing and implementing efficient data 
models, ensuring optimal storage, retrieval, and overall performance. A crucial part of this process was establishing a seamless service connection to facilitate smooth communication between the application and the 
database.

![image](https://github.com/mmakhool/portfolio/assets/132611699/5658e686-d69a-40fc-ba52-67f4c8b23887)

Security was a top priority throughout the project. I implemented a comprehensive user authentication system, bolstering the application's defenses. The user experience was further enhanced with the seamless integration 
of password hashing, contributing to a fluid and secure interaction for users.

## Support Toolbox

A team we worked close with had a large amount of Tier 1 support tickets that were going directly to Tier 2 and Tier 3 teams. Our business support team is unable to fully 
support their ticket requests, as there were no tools available to support their team's intake requests at this level. With this application, we will have the capability 
to build tools that support their needs at the Tier 1 level. This will help enable the team to focus on coding new technology and expand our knowledge of their requests.

Throughout the initial creation of the Toolbox UI and Backend for Frontend, I had to constantly adapt and learn various processes that our team was not yet familiar 
with, including: Terraform, Circle configs, authorization through bearer tokens, and API connectors. Additionally, I learned how to program with Angular, 
NodeJS, and TypeScript to match the syntax of the already-existing Admin Shell.

I took the lead on developing the backend service and controller for our first tool to help resolve tickets related to "Verification Mismatch" errors on first contact. 
Currently, there is a disconnect in the verification status of client liabilities between our primary platform and Credit Qualifier. Team members receive a verification 
mismatch status edit in our main platform when attempting to change the loan status. I worked closely with the engineering team that supports CQ throughout the 
development process, who assisted us with building and deploying with CircleCI and HAL. 

One of the first major roadblocks that we hit was in the development of the SQS Services within our application and how it's communicating with the specific queue that 
we are trying to reach. At first, I didn't really know how to develop the code for these services and there wasn't a lot of recent in-house repositories that utilized 
SQS, so a lot of the research was done through online sources and AWS documentation.

![image](https://github.com/mmakhool/Portfolio/assets/132611699/d2d70e83-fbe7-47dc-98e8-1c2e80f4196f)

![image](https://github.com/mmakhool/Portfolio/assets/132611699/68f31acc-5235-45af-8a7a-3579d886523b)

## LTW

Our main platform retrieves team member licensing data from Central Staging Area. Team member data in "CSA" is set for decommission on 6/28/23. License the 
World will be the new source of truth for the team member banker licensing data. A new process is required in order for our platform to retrieve licensing data from the 
new source LTW.

We collaborated with the proper teams and created a class that will be triggered by loan timer. The class will run to verify that we have NMLS 
ID. If the ID is missing it will call RHDS to obtain the ID using the CBID. If NMLS ID already exists, the class will call LTW to retrieve licensing data for the 
assigned loan officer and write this data to our platform's maintenance database. 

I took advantage of the recent move from Progress Developer Studio to Visual Studio Code to write the Progress code for the Tidal program that will run the main procedure 
developed by some of my collegues. Even though the creation of the Tidal job was rather quick, learning how to use VS Code to handle a lot of the processes that we were 
use to doing on Progress Developer Studio was an interesting (and welcomed) change. Additionally, I worked closely the Unix team to better understand the Tidal job 
scheduling processes, and relayed that knowledge to my team members.

# Mentorship

## Software Engineering Mentorship with Chris Wilder

Shortly after my initial attempt at the career advancement panel in early 2022, a mentorship program was implemented. I was given feedback and a list of focus 
points to improve upon. This list emphasized more immersion with AWS Terraform, OO Principles, and taking on more complex coding projects, while taking the lead on more 
assignments. To help me accomplish these goals, I was provided the opportunity to have a mentor.

My mentor, Chris Wilder, was a perfect selection for me, as he was able to provide insight on software engineering principles and processes that I was not quite 
familiar with, including REST API, Object-Oriented Programming, CICDs, AWS Terraform, and CircleCI. Since then, I have dramatically improved on those focus points and 
utilize these skills daily.

Overall, the mentorship program was a massive success. Chris and I continue to communicate frequently, and he has proven to be an incredibly valuable resource for our 
team. Additionally, I was the first on our team to embed within another team for educational purposes and to be able to focus on those feedback areas I was 
given.

## Embedding with our API Team

In 2022, I had the pleasure of embedding within our API team for 3 months as part of our mentorship program. This was one of the greatest experiences I have had 
as a learning developer, and I ended up gaining more knowledge in that time than I could have imagined. During my time with the API team, I was given the goal 
to lead 3 Features and to present during a code review.

### DashDog2

DashDog was the first feature I lead with Chris Wilder and Joel Smith, who mentors Chris. The DashDog application provides important health checks for AWS East and West 
and all OA services. We used Svelt and Go throughout the development process, which was my first time utilizing other programming languages outside of Progress.

![image](https://github.com/mmakhool/Portfolio/assets/132611699/b5b05c55-afef-4d3d-aa19-9152bf7926d9)

![image](https://github.com/mmakhool/Portfolio/assets/132611699/d1ae29d4-6953-4f34-b06c-58226fbfebd8)


### Input Validation

I worked closely with one of my favorite Senior SEs to enhance the validation in our PUT, POST, and DELETE APIs before data is saved into the database. We developed input 
validation classes and created unit tests to verify the information being passed through, developed architecture diagrams, and documentation to support and reference the 
API validation process, and coordinate with consumers of the API to conduct testing and confirm services are functioning correctly.

### QE Tools

QE Tools is a group of endpoints broke out into it's own gateway for testing purposes only and is not used in production. Before the end of the embedding 
period, I was tasked with the creation of an endpoint for PageCount, which is a BA Tool that supports accurate county recording costs for clients in counties that charge 
recording fees. The goal was to emulate a manual request to trigger a 200 response and return a success message. 
This was an exceptionally meaningful project for me, as it was essentially a culmination of everything I learned while embedded.

# HackWeek

After becoming a Software Engineer, Hackweek was one of the events I wanted to be apart of the most. I knew it would be a great way for me to get out of my 
comfort zone and work on something different with people outside of my team. So far, I have participated in 3 different Hackweek events and 1 24-hour Hackathon with 
the API team.

## OA Support Teams Room Chat Bot - Hackathon 2023

Utilized Power Automate to build a chat bot that responds to questions being asked in the OA Support Teams room. Power Automate didn't quite allow for multiple 
people to drive on the work, so I assisted in the testing portions by prompting the bot to respond to certain messages and documented the findings including the 
amount of time it took the bot to respond and the context it responds with.

## Login Metrics - Hackweek 2021/2022

The goal of this project was to create a tidal job program that will acquire login data that will also be able to run ad hoc with user-entered 
dates on a screen on each environment of the main platform to ensure user-licensing compliance. I utilized an existing SOC Audit codetable/driver to contain the report that our
tidal job runs. The driver program also gives us the capabilities to run the report at will without having to wait for the tidal job to run.

![image](https://github.com/mmakhool/Portfolio/assets/132611699/9d70cef2-5da4-457b-8dad-3c0e513e4dfc)

![image](https://github.com/mmakhool/Portfolio/assets/132611699/4232e87b-9708-4758-8f9a-c82761adf273)

# Training

Throughout 2022 and 2023, I spent additional time with book-learning and participating in code exercises that were mostly unrelated to our current work or 
stories.

## Capture the Flag

CTF was probably my favorite exercise that we did this year. The goal of this multi-team competition was to solve challenges to find "Flags" contained in past versions 
of webpages and mock Github repositories. Flags were also awarded for completing various coding challenges. Our team tied for second place with over 20 teams 
competing!

## Design Patterns eBook

This book was introduced to me by a Senior SE on the API team. It contains easy-to-understand guides on design patterns principles that we currently utilize in 
enterprise.

## C# Player's Guide

One of the most interesting textbooks I have ever read, the C# Players guide takes the process of learning C# from the beginning, and turns it into a Role-Playing 
Game where you complete quests and fight bosses in the form of C# coding exercises. Each activity in the book awards experience points that you keep track of 
throughout the guide.

# Feedback

Follow [this link](https://github.com/mmakhool/Portfolio/blob/main/Feedback) to be taken to the Feedback section of my portfolio.

![image](https://github.com/mmakhool/Portfolio/assets/132611699/720552ee-e891-4b50-8299-b997d9fb964a)
