export const Home = () => {
  return (
    <div style={{ position: 'relative', backgroundImage: 'url(src/images/dark-blue-background-geometric-triangle-y05htl5vjn4jm9bi.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}>
      <div style={{ position: 'relative', width: '90%', maxWidth: '400px', background: 'rgba(30, 36, 44, 0.6)', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(5px)', marginLeft: '5%' }}>
        <h1 style={{ textAlign: 'left', marginBottom: '30px', color: '#61dafb', letterSpacing: '2px', textTransform: 'uppercase', mixBlendMode: 'difference' }}>Welcome to CashGrab.</h1>
        <h3 style={{ textAlign: 'left', color: '#fff', lineHeight: '1.5', mixBlendMode: 'difference' }}>
          Our platform utilizes AI to provide information about current prices of selected Stocks and Companies.
          The information given must not be taken as financial advice.
        </h3>
      </div>
    </div>
  );
}