
// layout('./routes/layout.tsx', [
//   index("routes/home.tsx"),
//   route('counter', './routes/counter.tsx'),
//   route('debounce-search', './routes/debounceSearch.tsx')
// ])

const routes = [
  { name: 'Home', url: '/' },
  { name: 'Counter', url: '/counter' },
  { name: 'Debounced Input', url: '/debounce-input' },
];

function Nav() {
  return (
    <nav className="md:col-span-3">
      {routes.map((item, index) => {
        return (
          <li key={`nav-${item.name}-${index}`}>
            <a href={item.url}>{item.name}</a>
          </li>
        );
      })}
    </nav>
  );
}

export { Nav };
