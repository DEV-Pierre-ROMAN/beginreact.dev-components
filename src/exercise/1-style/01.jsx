import './global.css';

const VariantsStyle = {
  primary: {
    backgroundColor: '#646cff',
  },
  secondary: {
    backgroundColor: '#16a34a',
  },
  default: {
    backgroundColor: '#171717',
  },
};

const SizesStyle = {
  small: {
    padding: '8px 16px',
    fontSize: '1rem',
  },
  large: {
    padding: '12px 24px',
    fontSize: '1.2rem',
  },
};

const Button = ({ variant, size, children }) => {
  const variantStyle = VariantsStyle[variant]
    ? VariantsStyle[variant]
    : VariantsStyle.default;
  const sizesStyle = SizesStyle[size] ? SizesStyle[size] : SizesStyle.small;

  return (
    <button
      className="button"
      style={{
        ['--background-color']: variantStyle.backgroundColor,
        ['--padding']: sizesStyle.padding,
        ['--font-size']: sizesStyle.fontSize,
      }}
    >
      {children}
    </button>
  );
};

const Demo = () => {
  return (
    <div className="container">
      <Button variant="primary" size="small">
        Primary small
      </Button>
      <Button variant="secondary" size="small">
        Primary small
      </Button>
      <Button variant="default" size="small">
        Default small
      </Button>
      <Button variant="primary" size="large">
        Primary large
      </Button>
      <Button variant="secondary" size="large">
        Secondary large
      </Button>
      <Button variant="default" size="large">
        Default large
      </Button>
    </div>
  );
};

// ℹ️ Ne pas modifier le code ci-dessous
const App = () => {
  return (
    // ℹ️ Cette classe permet d'enlever les styles par défaut des boutons !
    <div className="remove-global-styles">
      <Demo />
    </div>
  );
};

export default App;
