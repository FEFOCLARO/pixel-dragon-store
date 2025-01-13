import axios from 'axios';

// Criamos uma instância do axios com a URL base da nossa API
const api = axios.create({
    baseURL: 'http://localhost:3001/api'
});

// Serviço para gerenciar todas as operações relacionadas aos velociraptors
export const DinoService = {
    // Busca todos os velociraptors
    getAllDinos: async () => {
        try {
            const response = await api.get('/dinosaurs');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar velociraptors:', error);
            throw error;
        }
    },

    // Busca um velociraptor específico
    getDinoById: async (id) => {
        try {
            const response = await api.get(`/dinosaurs/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar velociraptor:', error);
            throw error;
        }
    }
};

// Exportamos a instância do api para caso precisemos fazer outras requisições
export default api;