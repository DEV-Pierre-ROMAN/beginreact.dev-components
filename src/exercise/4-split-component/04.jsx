import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';

const shoppingArray = [
  {
    id: 1,
    name: 'Carotte !',
    quantity: 12,
  },
  {
    id: 2,
    name: 'Patate !',
    quantity: 11,
  },
  {
    id: 3,
    name: 'Haricot !',
    quantity: 54,
  },
];

const recipeArray = [
  {
    id: 1,
    name: 'Tarte à la carotte',
    date: '11.06.22',
  },
  {
    id: 2,
    name: 'Purée de patate',
    date: '15.08.23',
  },
  {
    id: 3,
    name: 'Sauce au haricot',
    date: '22.09.24',
  },
];
const Header = ({ title, subtitle }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </header>
      <hr />
    </>
  );
};

const ShoppingItem = ({ name, quantity }) => {
  return (
    <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
      <div className={styles.section}>
        <p>{name}</p>
        <p className={styles.badge}>{quantity}</p>
      </div>
      <div className={styles.section}>
        <input type="checkbox" />
      </div>
    </div>
  );
};

const ShoppingList = () => {
  return (
    <>
      <div className={clsx(styles['flex-col'])}>
        <h2>Liste de course</h2>
        <div className={styles['shopping-list-items']}>
          {shoppingArray.map((elem) => (
            <ShoppingItem key={elem.id} {...elem} />
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

const RecipeItem = ({ name, date }) => {
  return (
    <li className={clsx(styles['flex'], styles['gap-4'])}>
      <span>{name}</span>
      <p className={styles.badge}>{date}</p>
    </li>
  );
};

const Recipes = () => {
  return (
    <>
      <div className={clsx(styles['flex-col'])}>
        <h2>Liste de recettes à faire</h2>
        <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
          {recipeArray.map((elem) => (
            <RecipeItem key={elem.id} {...elem} />
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Create by BeginReact.dev</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className={clsx(styles['container'])}>
      <Header title="Mes recettes de cuisine !" subtitle="Par BeginReact.dev" />
      <ShoppingList />
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
