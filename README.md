# DevTinder

-  Create a Vite + React application
-  Remove unecessory code and create a Hello World app
- Install Tailwind Css
- Install Daisy Ui
- Add NavBar component to App.jsx
- Create a NavBar.jsx seprate Component file
- Install react router dom
- Create BrowserRouter >Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create  a footer
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware to with configurations: origin, credentials: true
- Whenever you're making API call so pass axios =>{withCrenditials: true}
- Install react-redux + @reactjs/toolkit =>- https://redux-toolkit.js.org/introduction/getting-started
- configureStore => add reducer to store
-- useDispatch:- store data into reduxStore
--useSelector :- move data from store to UI
-- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
-- Navbar should update as user logs in
- Refactor our code to add constants file + create a components folder
- You should not be access other routes without login
- If token is not present, redirect user to login page
- Logout
- Get the feed and add the feed in the store
- build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile
- New Page - See all my connections
- New Page - See all my Connection Requests
- Feature - Accept/Reject Connection Request

Remaining:
- Send/ignore the user card from Feed
- Signup New User
-E2E Testing


Body
   NavBar
   Route=/ => Feed
   Route=/login => Login
   Route=/connection => Connections
   Route=/profile => Profile