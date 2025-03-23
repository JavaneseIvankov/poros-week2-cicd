function App() {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '100vh',
            width: '100%',
            backgroundColor: 'grey',
            color: 'white',
         }}
      >
         <header
            style={{
               position: 'sticky',
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
         </header>
         <main
            style={{
               // height: '100vh',
               width: '100%',
               fontSize: '5rem',
               display: 'flex',
               textAlign: 'center',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <h1
               style={{
                  fontSize: '5rem',
                  textAlign: 'center',
                  width: '100%',
                  height: '200px',
               }}
            >
               This is main content
            </h1>
         </main>
         <footer
            style={{
               width: '100%',
               height: '250px',
               backgroundColor: 'gray',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               color: 'white',
            }}
         >
            <h1 style={{ fontSize: '3rem' }}>This is footer</h1>
         </footer>
      </div>
   );
}

export default App;
