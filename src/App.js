import Orders from 'components/orders'

const App = () => {

  return (
    <div className="app">

      <header className="app-header">
        <h1 className="text-2xl text-white">Test Front End</h1>
      </header>

      <main className="app-main">
        <Orders/>
      </main>

    </div>
  );
}

export default App;
