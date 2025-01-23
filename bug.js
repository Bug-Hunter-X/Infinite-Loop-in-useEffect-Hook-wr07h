```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the count state is updated inside the effect function
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```