# Fontrivia

Fontrivia.

Fontrivia is a website developed by us (Isabelle and Ethan) that helps any other internet user to learn about all 5 different typographies that Google Fonts has to offer.
The 5 Google Font Typographies are:

1. Serif
2. Sans-Serif
3. Monospace
4. Display
5. Script/Handwriting

At the end of learning about these fonts, users will get to test themselves to see how much they've learnt about each font type and from then on will be able to choose a font for their next project. It also is a small little game from us.


## Design Process

When designing this website, the idea we had in mind was to make it as simple as possible. Our main goal was to get users to understand more about the google fonts provided to the internet from Google.

This project was mainly made for, well, everyone. Whether you are a student trying to write a report and is unsure what font to use or a full-stack developer wondering what font to use for your next website. This website caters to you!

From a developers point of view, we imagine that you using our website would go something like this:

"Oh no, I need a font to ✨Beautify✨ my website but i'm not sure which to use... I know! I will go to {this website} and find out more about fonts to use on my project!"

One website that we used when that is related to the design of the website is https://www.happyhues.co/palettes/14. We used this website to reference colour schemes to make the website look good.

## Features
Our website can be broken down to 11 different html pages with 2 being "filler" pages.
Each page has its own specific features

Main Pages

- Login (login.html)
- Register (register.html)
- Home Page (index.html)
- Sans-Serif typography (sans-serif.html)
- Serif typography (serif.html)
- Monospace typography (monospace.html)
- Display typography (display.html)
- Script/Handwriting typography (script.html)
- Test your knowledge on typography (testyourknowledge-quiz.html)


Filler Pages

- Loading page (loadingpage.html)
- Test your knowledge on typography start page (testyourknowledge-start.html)

### Existing Features

I'll be talking about each page and what features they have in short words.

- Login (Implemented a login system that takes in user input and is checked against the database that is stored from registering)
- Register (Implemented a registration system that takes in user input and stores it inside a database at restdb.io)
- Home Page (There is a Carousell to display information of the 5 fonts the user will learn about in the website)
- Typography pages (Sans-Serif, Serif, Monospace, Display, Script) (Each page has a button that when pressed, shows an example of that font type for a better user experience)
- Test your knowledge on typography (If the user is up for a challenge, they can head over to this page and test themselves on the existing fonts.)

### Features Left to Implement

Some features that we could have implemented given the time are:

- A Leaderboard system for highest streak (testyourknowledge-quiz.html)

## Technologies Used


- [JQuery](https://jquery.com)
  - The project uses **JQuery** to simplify DOM manipulation.
- [Google-Fonts](https://developers.google.com/fonts/docs/developer_api)
  - This project uses **Google Fonts** to load all the fonts to teach users about each type of typography.
- [Random-Fact](https://www.programmableweb.com/api/random-useless-facts)
  - This project uses **Random Facts API** to entertain the user while they wait at the loading page.
- [Bootstrap](https://getbootstrap.com/)
  - This project uses **Bootstrap** to ensure easier use of media queries + CSS.

## Testing

1. Registration form:
   1. Go to the "Regsiter" page
   2. Try to submit the empty form and verify that an error message about the required fields appears
   3. Try to submit the form with an invalid email address and verify that a relevant error message appears
   4. Try to submit the form with all inputs valid and verify that a success message appears

2. Login form:
   1. Go to the "Login" page
   2. Try to login with non-existent credentials and it should not let you in.
   3. Try to submit your login credentials and a pop up should appear that says "Login successful"

3. Typography pages:
   1. Go to any typography page (Sans-Serif, Serif, Monospace, Display, Script)
   2. Try to click the load button, the next button that appears should be a "Randomize me!" button
   3. Each time it randomizes, a new Font of that typography and/or a new sentence/phrase would be shown.


### Interaction on different browsers and screen sizes

With the help of Bootstrap and some CSS tools, we have made the website responsive across all devices.

### Bugs and known issues

Recently, there has been some pathing issues, please let us know so we can fix it. Thanks!

## Credits

- [10 Useful APIs for your next project](https://dev.to/harshsinha17/10-useful-apis-for-your-next-project-1nog)
  - Used this website to find both of the APIs used in our project
- [Making Sense of Google Font categories](https://www.designbyreese.com/googlefontcategories/)
  - Used this website to understand more about Fonts and their use

### Content

- Information used in typography pages were taken from:
  - [Making Sense of Google Font categories](https://www.designbyreese.com/googlefontcategories/)
  - List of Wikipedia articles I used:
    - [Sans-Serif fonts](https://en.wikipedia.org/wiki/Sans-serif)
    - [Serif fonts](https://en.wikipedia.org/wiki/Serif)
    - [Monospace fonts](https://en.wikipedia.org/wiki/Monospaced_font)
    - [Display fonts](https://en.wikipedia.org/wiki/Display_typeface)
    - [Script fonts](https://en.wikipedia.org/wiki/Script_typeface)

### Media

- Photos used in typography pages were taken from:
  - [Making Sense of Google Font categories](https://www.designbyreese.com/googlefontcategories/)
  - [Using Handwritten Typography in Web Design](https://www.envato.com/blog/handwritten-typography-web-design/)
  - [Monospace fonts](https://en.wikipedia.org/wiki/Monospaced_font)