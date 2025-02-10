```javascript
// Correct - using optional chaining to handle the initial value.
function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count ?? 0}</Text> {/*Using Optional Chaining*/}      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

//Another approach:
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous operation
    setTimeout(() => {
      setCount(5);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```