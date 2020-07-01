# Cookie Delete

## Discussion

**Topics to discuss:**

- Passing methods as props

[React 4 - Events & States](https://docs.google.com/presentation/d/1XD1QxGNfEP_BmNRlHPyP2h5WTj6gi4ql0WemniTw4vY/edit#slide=id.g4424c630a5_0_7)

## Step 0: Previous Challenge

1. The word `Dark` in our button is not changing, it's weird to have it always saying `Dark Mode`. Let's give it a condition! If `theme` is equal to `light`, the return value of the conditional operator is `Dark`, else it will be `Light`.

```jsx
<ThemeButton onClick={toggleTheme}>
  {theme === "light" ? "Dark" : "Light"} Mode
</ThemeButton>
```

## Step 1: Delete Button

To delete a cookie, each one of our cookies will need a delete button.

1. In `CookieItem`, add the delete button under the price. We'll create a styled component for it.

2. In `styles.js`, create a styled component called `DeleteButtonStyled`. Instead of a button I'll use a `p` tag, our tag's color will be red.

```javascript
export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;
```

3. But we don't have a `red` color in our theme! In `App.js`, we will add our shade of red to both themes.

```javascript
const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};
```

4. Import `DeleteButtonStyled` in `CookieItem` and render it under the cookie's price

```jsx
<p className="cookie-price">{cookie.price} KD</p>
<DeleteButtonStyled>Delete</DeleteButtonStyled>
```

5. Check the browser, our `delete` is showing! The question is, can we add an `onClick` event on a `p` tag? Yes you can. You can add an `onClick` event on any tag.

6. Let's create a method that will handle the deleting in `CookieItem`, and for now let's give it an alert with the cookie's ID:

```javascript
const handleDelete = () => {
  alert(`Delete cookie #${cookie.id}`);
};
```

6. So let's add an `onClick` event that calls `handleDelete`

```jsx
<DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
```

## Step 2: Delete Method

Okay, what should happen when we click on the button? The cookie must be deleted from `cookies` in `CookieList`. You can't delete it from `props`, because `props` is read-only. So we will create a delete method in `CookieList` and pass it as a prop to `CookieItem`.

1. In `CookieList`, create a function that takes the ID of the cookie we want to delete and console log it:

```javascript
const CookieList = () => {
    const deleteCookie = cookieId => {
      console.log(`Delete cookie with the ID ${cookieId}`);
    };
```

2. Now we will pass this method as a prop to `CookieItem`:

```javascript
const cookieList = cookies.map((cookie) => (
  <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
));
```

3. In `CookieItem`, we will pass `props.deleteCookie` to `handleDelete`:

```javascript
const handleDelete = () => {
  props.deleteCookie(cookie.id);
};
```

4. Let's try it out. Yes! Our message is appearing!

5. Now let's actually delete a cookie. We will use `filter` to remove the cookie with the passed ID from our `cookies` array. The `+` before `cookieId` converts it from a string to a number.

```javascript
const deleteCookie = (cookieId) => {
  cookies = cookies.filter((cookie) => cookie.id !== +cookieId);
};
```

6. Nothing happened. Let's console log `cookies` to see what's happening:

```javascript
const deleteCookie = (cookieId) => {
  cookies = cookies.filter((cookie) => cookie.id !== +cookieId);
  console.log("CookieList -> cookies", cookies);
};
```

7. `cookies` is changing, but we can't see the change. We agreed that if we want to see our elements change dynamically we need to use state. So let's import `useState` to create our state.

```javascript
import React, { useState } from "react";
```

8. Our state will represent the cookies on the screen so we will call it `cookies`, but we already have a variable called `cookies` which is our data. We'll call our state `_cookies` , and we'll set the initial value to `cookies` which has all our cookies.

```javascript
const [_cookies, setCookies] = useState(cookies);
```

9. Let's fix our `deleteCookie` method to use our state and state method:

```javascript
const deleteCookie = (cookieId) => {
  const updatedCookies = _cookies.filter((cookie) => cookie.id !== +cookieId);
  setCookies(updatedCookies);
};
```

10. Let's try deleting now. Nothing happened. Let's check the Dev tools. `_cookies` is changing when we're deleting but it's not rendering. Why is that?

11. Because we're still mapping over `cookies`. Let's change it so that maps over `_cookies`.

```javascript
const cookieList = _cookies.map((cookie) => (
  <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
));
```

12. And it's working!
