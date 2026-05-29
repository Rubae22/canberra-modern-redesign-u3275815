# Canberra Modern — Website Redesign

**Student ID:** u3275815
**Unit:** Front-end Web Design (11056)
**Live URL:** [ADD GITHUB PAGES LINK HERE BEFORE SUBMISSION]

---

## Overview

This project involved redesigning and developing a responsive website for Canberra Modern. Canberra Modern is an organisation focused on promoting and preserving Canberra’s modernist architecture through events, talks, exhibitions and media content.

The final website includes ten pages covering the homepage, events, architecture listings, media pages, forms and confirmation pages. The website was first designed in Figma before being developed using HTML, CSS and JavaScript. The redesign aimed to improve the usability, navigation and visual hierarchy of the existing Canberra Modern website while creating a visual style that better reflected mid-century modern design principles.

---

## Low-Fidelity Prototypes

The project began with low-fidelity wireframes to explore the layout and structure of each page before moving into high-fidelity designs in Figma. The final website was then developed directly from these Figma mockups, with most layouts staying fairly consistent throughout the coding process aside from small adjustments made during responsive testing and development.

### Home Page
The homepage wireframe included a large hero section, featured events and information about the organisation. This structure stayed mostly the same in the final website.

One major change was turning the static hero image into a working image carousel using JavaScript. I felt this made the homepage feel more visually engaging while also helping showcase more architectural photography without taking up additional space.

### Events and Architecture Pages

The events page was designed with separate sections for upcoming and past events using a responsive card layout. Originally I planned to include a moving image strip near the bottom of the page, however after testing it I felt it distracted from the content, so I simplified it into a static image section instead.

The architecture page used alternating image and text layouts for featured buildings. This was implemented using Flexbox and helped avoid the page feeling repetitive when scrolling.

### Media and Forms

The media page contains tabbed sections for radio content, blog posts and videos. The basic structure followed the wireframes, however the functionality was expanded during development using JavaScript. ARIA attributes were also added to improve accessibility and keyboard navigation.

The contact and registration forms followed the original wireframes closely, using responsive layouts that adapt from two columns on desktop to single columns on smaller screens.

### Success Pages
Both success pages (event registration and contact) were minimal confirmations. These were implemented as designed — a centred card with a large heading, confirmation message, and a "Go Back" link.

---

## Reflection

### What Went Well

One of the stronger parts of the project was translating the visual style from Figma into the final coded website while keeping the overall aesthetic consistent. The typography, colour palette and spacing stayed close to the original mockups and helped create a clearer visual identity compared to the original Canberra Modern website.

The responsiveness of the layouts also worked well throughout the project. Using Flexbox and media queries made it easier to adapt content across desktop, tablet and mobile screen sizes without redesigning entire sections. The event cards and forms translated especially well responsively because the layouts collapsed naturally without feeling cramped.

Another thing that improved throughout the project was my understanding of accessibility, semantic HTML and front-end development generally. Before this assignment I had very limited experience using ARIA attributes and more advanced CSS and JavaScript techniques, however using AI tools throughout development helped me better understand how and why certain coding approaches were being used. Rather than only copying solutions, I spent time testing, modifying and learning from the generated code while building the website.

### What Could Be Improved

f I continued developing the project, I would spend more time improving image optimisation and performance. Because architecture and photography are such important parts of Canberra Modern’s identity, the website relies heavily on large images which could affect loading performance on slower connections.

I would also spend more time refining smaller interaction details throughout the website. While the navigation and interactive elements function correctly, some transitions and hover states still feel fairly basic and could be made more polished.

There are also areas of the CSS and JavaScript that could be organised more efficiently. As I became more confident throughout development, I realised there were sections of code that could probably be simplified or structured more clearly. Using AI during the project also helped me recognise better coding approaches and areas where my original solutions could be improved or cleaned up further. Overall, the project helped improve both my technical and design skills, particularly in translating research and Figma mockups into a responsive website with a stronger visual hierarchy and user experience.

---

## GenAI Acknowledgement

Generative AI tools, primarily Claude, were used throughout parts of the design and development process. AI was used to help translate my Figma designs into HTML, CSS and JavaScript, assist with troubleshooting coding issues, and help structure parts of the written rationale.

All generated responses were reviewed, edited and adapted throughout development to fit the project requirements and my own design decisions. The final submitted project reflects my own understanding and implementation throughout the assignment.

---

## File Structure

```
canberra-modern/
├── index.html                    # Home page
├── events.html                   # Events listing (upcoming + past)
├── architecture.html             # Architecture building listings
├── media.html                    # Media hub (tabbed: radio, blog, videos)
├── media-blog.html               # Individual blog post
├── event-register.html           # Event registration form
├── event-register-success.html   # Registration confirmation
├── contact.html                  # Contact form
├── contact-success.html          # Contact confirmation
├── readme.md                     # This rationale document
└── assets/
    ├── css/
    │   └── styles.css            # Main stylesheet (one file, whole site)
    ├── js/
    │   └── javascript.js         # Nav toggle, carousel, tab switching, form redirect
    └── images/
        └── [all site images]
```
