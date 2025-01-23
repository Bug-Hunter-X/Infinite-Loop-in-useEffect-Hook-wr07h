```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The effect runs only once on mount, fixing the infinite loop
    console.log('Effect ran!');
  }, []); // Empty dependency array ensures the effect runs only once

  return <div>Count: {count}</div>;
}
```