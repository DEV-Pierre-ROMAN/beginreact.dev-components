import clsx from 'clsx';

const Button = ({ variant, size, children }) => {
  return (
    <button
      className={clsx(
        'rounded border-0',
        {
          'bg-[#646cff]': variant === 'primary',
          'bg-green-600': variant === 'secondary',
          'bg-neutral-900': variant == 'default',
        },
        {
          'py-2 px-4 text-base': size === 'small',
          'py-3 px-6 text-lg': size === 'large',
        }
      )}
    >
      {children}
    </button>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col items-center gap-3">
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
