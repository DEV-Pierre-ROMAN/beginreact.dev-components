import styled from 'styled-components';

const Button = styled.button(
  {
    border: 0,
    borderRadius: 4,
  },
  {
    backgroundColor: ({ variant }) => {
      if (variant === 'primary') {
        return '#646cff';
      } else if (variant === 'secondary') {
        return '#16a34a';
      } else {
        return '#171717';
      }
    },
    color: 'white',
    padding: ({ size }) => (size === 'small' ? '8px 12px' : '16px 20px'),
    fontSize: ({ size }) => (size === 'small' ? '1rem' : '1.2rem'),
  }
);

const Demo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
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
