# Cookie Delete

## Discussion

**Topics to discuss:**

- Passing methods as props

## Step 0: Previous Challenge

1. The word `Dark` in our button is not changing, it's weird to have it always saying `Dark Mode`. Let's give it a condition! If `theme` is equal to `light`, the return value of the conditional operator is `Dark`, else it will be `Light`.

```jsx
<ThemeButton onClick={toggleTheme}>
  {theme === "light" ? "Dark" : "Light"} Mode
</ThemeButton>
```

## Step 1: Delete Button

To delete a cookie, each one of our cookies will need a delete button.

1. In `CookieItem`, add the delete button under the price. My website's design is minimalistic, so instead of a button I'll add a `p` tag and give it a `className` called .

```jsx
<p className="cookie-price">{cookie.price} KD</p>
<p className="cookie-delete">Delete</p>
```

2. To distinguish the delete `p` tag from the others, we'll give it the color red.

3. In `App.js`, we will add our shade of red to both themes.

```javascript
const lightTheme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ff85a2",
  red: "#ff3232"
};

const darkTheme = {
  mainColor: "#fefafb", // main font color
  backgroundColor: "#242424", // main background color
  pink: "#ff85a2",
  red: "#ff3232"
};
```

4. In `styles`, add the class `cookie-delete` under the `p` tag of `CookieWrapper` and give the property `color` the color from our theme.

```javascript
p {
    text-align: center;

    &.cookie-price {
      color: ${props => props.theme.pink};
    }

    &.cookie-delete {
      color: ${props => props.theme.red};
    }
  }
```

5. Check the browser, our `delete` is showing! The question is, can we add an `onClick` event on a `p` tag? Yes you can. You can add an `onClick` event on any tag. So let's add an `onClick` event that gives an alert with the cookie's ID.

```jsx
<p
  className="cookie-delete"
  onClick={() => alert(`Delete cookie #${cookie.id}`)}
>
  Delete
</p>
```

## Step 2: Delete Method

Okay, what should happen when we click on the button? The cookie must be deleted from `cookies` in `CookieList`. You can't delete it from `props`, because `props` is read-only. So we will create a delete method in `CookieList` and pass it as a prop to `CookieItem`.

1. In `CookieList`, create a function that takes the ID of the cookie we want to delete:

```javascript
const CookieList = () => {
    const deleteCookie = cookieId => {};
```

2. We will use `filter` to remove the cookie with the passed ID from our `cookies` array. The `+` before `cookieId` converts it from a string to a number.

```javascript
const deleteCookie = cookieId => {
  cookies = cookies.filter(cookie => cookie.id !== +cookieId);
};
```

3. Now we will pass this method as a prop to `CookieItem`:

```javascript
const cookieList = cookies.map(cookie => (
  <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
));
```

4. In `CookieItem`, we will pass `props.deleteCookie` to `onClick`:

```jsx
<p className="cookie-delete" onClick={() => props.deleteCookie(cookie.id)}>
  Delete
</p>
```

5. Nothing happened. Let's console log `cookies` to see what's happening:

```javascript
const deleteCookie = cookieId => {
  cookies = cookies.filter(cookie => cookie.id !== +cookieId);
  console.log("CookieList -> cookies", cookies);
};
```

6. `cookies` is changing, but we can't see the change. We agreed that if we want to see our elements change dynamically we need to use state. So let's import `useState` to create our state.

```javascript
import React, { useState } from "react";
```

7. Our state will represent the cookies on the screen so we will call it `cookies`, but we already have a variable called `cookies` which is our data. We'll call our state `_cookies` , and we'll set the initial value to `cookies` which has all our cookies.

```javascript
const [_cookies, setCookies] = useState(cookies);
```

8. Let's fix our `deleteCookies` method to use our state and state method:

```javascript
const deleteCookie = cookieId => {
  const updatedCookies = _cookies.filter(cookie => cookie.id !== +cookieId);
  setCookies(updatedCookies);
};
```

9. Let's try deleting now. Nothing happened. Let's check the Dev tools. `_cookies` is changing when we're deleting but it's not rendering. Why is that?

10. Because we're still mapping over `cookies`. Let's change it so that maps over `_cookies`.

```javascript
const cookieList = _cookies.map(cookie => (
  <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
));
```

11. And it's working!
