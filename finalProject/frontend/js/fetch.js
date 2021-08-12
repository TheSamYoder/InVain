export const fetchPros = async () => {
    return fetch("http://localhost:8080/api/professionals")
        .then((response) => response.json());
};

export const fetchProBySpecialty = async (specialty) => {
    return fetch(`http://localhost:8080/api/professionals/specialties/${specialty}`)
        .then((response) => response.json())
        
}