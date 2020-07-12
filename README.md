# Cookie Delete

## Discussion

**Topics to discuss:**

- Passing methods as props

[React 4 - Events & States](https://docs.google.com/presentation/d/1XD1QxGNfEP_BmNRlHPyP2h5WTj6gi4ql0WemniTw4vY/edit#slide=id.g4424c630a5_0_7)

## Step 0: Previous Challenge

1. Let's start with adding a `p` tag above our cookie name:

```jsx
<DetailWrapper>
  <p>Back to Cookies</p>
  <h1>{cookie.name}</h1>
```

2. To render the list of cookies, we need to set `cookie` to `null` or any value that gives us `false`. So we will pass `setCookie` as a prop from `App` to `CookieDetail`.

```jsx
<CookieDetail cookie={cookie} setCookie={setCookie}>
```

3. Now we will call `setCookie` without passing anything to it, this will set `cookie` to `undefined` which is `false`.

```jsx
<DetailWrapper>
  <p onClick={() => props.setCookie()}>Back to Cookies</p>
  <h1>{cookie.name}</h1>
```

3. And that's it!

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

6. Let's create a method called `handleDelete` that will handle the deleting in `CookieItem`, and for now let's give it an alert with the cookie's ID:

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
  <CookieItem
    cookie={cookie}
    key={cookie.id}
    setCookie={setCookie}
    deleteCookie={deleteCookie}
  />
));
```

3. In `CookieItem`, we will pass `props.deleteCookie` to `handleDelete`:

```javascript
const handleDelete = () => {
  props.deleteCookie(cookie.id);
};
```

4. Let's try it out. Yes! Our message is appearing!

5. Now let's actually delete a cookie. We will use `filter` to remove the cookie with the passed ID from our `cookies` array. Let's console log `cookies` to see what's happening

```javascript
const deleteCookie = (cookieId) => {
  const updatedCookies = _cookies.filter((cookie) => cookie.id !== cookieId);
  console.log("CookieList -> updatedCookies", updatedCookies);
};
```

6. `cookies` is changing, but we need to set our state

```javascript
const deleteCookie = (cookieId) => {
  const updatedCookies = _cookies.filter((cookie) => cookie.id !== +cookieId);
  setCookies(updatedCookies);
};
```

And it's working!

## Step 3: Data from App

At this point, `CookieList` and `CookieDetail` are each using their own copy of `cookies`! So we will move our `_cookies` state to `App.js` and pass it as a prop to both components.

1. Move the `_cookies` state and `deleteCookies` method to `App.js`

```javascript
const [_cookies, setCookies] = useState(cookies);

const deleteCookie = (cookieId) => {
  const updatedCookies = _cookies.filter((cookie) => cookie.id !== +cookieId);
  setCookies(updatedCookies);
};
```

2. In `App.js` pass `_cookies` and `deleteCookie` as a prop to `CookieList`.

```jsx
<CookieList
  cookies={_cookies}
  deleteCookie={deleteCookie}
  setCookie={setCookie}
/>
```

3. In `CookieList`, `map` over `cookies` that's coming as a prop from `App`. And instead of passing `deleteCookie` to `CookieItem`, pass `props.deleteCookie` which is coming from `App`

```javascript
const cookieList = props.cookies
  .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
  .map((cookie) => (
    <CookieItem
      cookie={cookie}
      deleteCookie={props.deleteCookie}
      setCookie={props.setCookie}
      key={cookie.id}
    />
  ));
```

4. Same thing with `CookieDetail`.

## Step 4: Delete Button Component

What if we want to add a delete button in `CookieDetail`? Do we need to create a new `handleDelete` method in `CookieDetail`? No! We will create a new component for our delete button and its method.

1. Create a new folder called `buttons` in `components`. In `buttons`, create a file called `DeleteButton.js`:

```javascript
import React from "react";

const DeleteButton = () => {
  return <div></div>;
};

export default DeleteButton;
```

1. Copy the delete button from `CookieItem`. Don't forget to import `DeleteButtonStyled` styled component and fix the path

```javascript
import React from "react";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteCookie(cookie.id);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
```

3. Import `DeleteButton` in `CookieItem`:

```javascript
import DeleteButton from "./buttons/DeleteButton";
```

4. Replace `DeleteButtonStyled` with `DeleteButton`:

```jsx
  <p>{cookie.price} KD</p>
  <DeleteButton />
</DetailWrapper>
```

5. As you can see, we got an error that `cookie` is undefined. So we need to pass `cookie`, but since we only need the ID let's just pass `cookie.id`:

```jsx
<DeleteButton cookieId={cookie.id} />
```

6. Let's try deleting a cookie from its detail page, we got the following error: `props.deleteCookie is not a function`.

7. We need to pass `deleteCookie` as a prop:

```jsx
<DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
```

8. It's working! Now import `DeleteButton` in `CookieDetail`:

```javascript
import DeleteButton from "./buttons/DeleteButton";
```

9. Render `DeleteButton` and pass `cookie.id` and `deleteCookie`:

```jsx
<DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
```

10. Let's try it out. It's working!
