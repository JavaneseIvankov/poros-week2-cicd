function App() {
   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: 'grey',
            color: 'white',
            fontSize: '1.5rem',
         }}
      >
         <h1 style={{ fontSize: '2rem', marginInlineStart: '50px' }}>
            Hello, Welcome
         </h1>
         <nav
            style={{
               display: 'flex',
               gap: '20px',
               marginInlineEnd: '50px',
               color: 'white',
            }}
         >
            <a href="#home" style={{ color: 'white' }}>
               Home
            </a>
            <a href="#about" style={{ color: 'white' }}>
               About
            </a>
            <a href="#contact" style={{ color: 'white' }}>
               Contact
            </a>
         </nav>
      </div>
   );
}

export default App;
