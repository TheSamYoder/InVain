export const fetchPros = async () => {
    return fetch("http://localhost:8080/api/professionals")
        .then((response) => response.json());
};

export const fetchProBySpecialty = async (specialty) => {
    return fetch(`http://localhost:8080/api/professionals/specialty/${specialty}`)
        .then((response) => response.json());
}

export const fetchProBySpecialties = async (specialty1, specialty2) => {
    return fetch(`http://localhost:8080/api/professionals/specialties/${specialty1}+${specialty2}`)
        .then((response) => response.json());
}

export const fetchServeByProId = async (id) => {
    return fetch(`http://localhost:8080/api/professionals/${id}/serves`)
        .then((response) => response.json());
}