# Première List !

Dans une application, on a très souvent des listes de données qu'on a envies d'afficher.

Donc comment afficher cette liste par exemple ?

```js
const vegetables = ['carrot', 'tomato', 'cucumber', 'celery'];
```

La [beta documentation de React](https://beta.reactjs.org/learn/rendering-lists) explique très bien les listes.

Mais expliqué est une chose, pratiquer en est une autre.

Comme React c'est du JSX et donc du JS pour parcourir une liste on utilise `.map`.

```js
const vegetables = ['carrot', 'tomato', 'cucumber', 'celery'];

const VegetablesList = () => {
  return (
    <ul>
      {vegetables.map((vegetable) => (
        <li key={vegetable}>{vegetable}</li>
      ))}
    </ul>
  );
};
```

Je m'arrête ici pour la théorie. Dans la vidéo solution, je vais vraiment t'expliquer
comment ce `map()` fonctionne.

Dans le module 1, on avait vue que `React.createElement()` acceptait les tableaux.

## Exercise

J'ai une liste de course, mais elle ne s'affiche pas.

J'ai déjà fait le CSS, suit le Lienx 🦁 pour résoudre le problème.

## Extra 2 - Conditional Rendering

Il y a 3 moyens d'afficher du contenu conditionnellement.

1. `if... else...`

```jsx
const App = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  } else {
    return <div>{props.children}</div>;
  }
};
```

2. `&&`

```jsx
const App = (props) => {
  return (
    <div>
      <p>Hello</p>
      <p>{props.isLoading && 'Loading...'}</p>
    </div>
  );
};
```

3. ternary operator

[📖 doc](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```jsx
const App = (props) => {
  return (
    <div>
      <p>Hello</p>
      <p>{props.isLoading ? 'Loading...' : props.children}</p>
    </div>
  );
};
```

A toi de jouer.

Dans `ShoppingItem` j'aimerais bien que si la quantité est égal à 0 :

- rien ne s'affiche

Si la quantité est à 1 :

- le badge n'est pas affiché

Si le nom de l'item fait 2 ou moins caractères (0, 1 ou 3) :

- le titre est en rouge

## Extra 3 - Key

**Il n'y a rien à faire.**

Regarde juste la solution et amuse-toi avec en commentant / décommentant
la props "key" dans la liste et regarde comment la checkbox réagis quand tu supprimes des éléments.

Regarde la vidéo solution après avoir fait ceci.

## Extra 4 - Key

**Il n'y a rien à faire.**

Regarde juste la solution et place ton curseur dans les inputs puis attend et regarde
comment React gère ton curseur en fonction des différents input.
