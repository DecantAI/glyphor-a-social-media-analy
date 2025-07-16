Sure, here is a simple example of a main App.js component for a social media analytics dashboard. Due to the complexity of the complete application, I will provide this as a starting point. 

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Loading from './components/Loading';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <Dashboard data={data} />;
};

export default App;
```

This is a basic setup for an App component that fetches data from an API endpoint and displays it in a Dashboard component. If the data is loading, it displays a Loading component. If there's an error during the data fetch, it displays an Error component.

The Dashboard, Error, and Loading components are not included in this example but would be relatively simple to create based on your specific needs. 

Please note that, in a real-world application, you would likely have many more components for different parts of your application (e.g., a NavBar component, a Footer component, different page components, etc.) and you would likely be using a state management library like Redux to manage your application's state. 

Also, the styling isn't included in this example, but you would typically use CSS or a CSS-in-JS library to style your components.