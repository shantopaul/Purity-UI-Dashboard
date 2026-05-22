function App() {
  return (
    <div className="min-h-screen bg-pageBg flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-card shadow-card p-8 text-center">
        <h1 className="text-3xl font-bold text-dark mb-4">
          Purity UI Dashboard
        </h1>
        <p className="text-muted mb-6">
          Setup and Design System Initialized Successfully.
        </p>
        <div className="flex justify-center gap-4">
          <span className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-button text-sm">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-success/10 text-success font-bold rounded-button text-sm">
            React
          </span>
          <span className="px-4 py-2 bg-warning/10 text-warning font-bold rounded-button text-sm">
            Vite
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
