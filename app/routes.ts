import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout('./routes/layout.tsx', [
    index("routes/home.tsx"),
    route('counter', './routes/counter.tsx'),
    route('debounce-search', './routes/debounceSearch.tsx'),
    route('debounce-input', './routes/debounceInput.tsx'),
  ])
] satisfies RouteConfig;
