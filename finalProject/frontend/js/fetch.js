const fetchPros = async () => {
    return fetch("http://localhost:8080/api/professionals").then((response) => response.json());
};

