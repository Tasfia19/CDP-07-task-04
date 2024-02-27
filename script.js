function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Browser not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        });
    });
  }

  function fetchDataCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Browser not ok');
        }
        return response.json();
      })
      .then(data => {
        callback(data);
      });
  }
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Browser not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  function displayData(data) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
      `;
      container.appendChild(row);
    });
  }
