export const rootStyle = {
  flex: 1,
  borderRadius: 10,
  boxShadow: '0 2px 4px 2px grey',
  padding: 20
};

export const titleStyle = {
  textAlign: 'center'
};

export const taskStyle = {
  padding: '10px',
  marginBottom: '20px',
  boxShadow: '0 2px 4px 2px grey',
  display: 'flex',
  justifyContent: 'flex-between',
  borderRadius: 8,
  alignItems: 'center'
};

const buttonStyle = {
  color: 'white',
  flex: '0 auto 50px',
  padding: 10,
  border: 'none',
  borderRadius: 6,
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:disabled': {
    backgroundColor: 'grey'
  }
};

export const buttonRedStyle = {
  ...buttonStyle,
  backgroundColor: 'red',
};

export const buttonGreenStyle = {
  ...buttonStyle,
  backgroundColor: 'green'
};

export const labelStyle = {
  flex: 1,
  textAlign: 'center'
};
