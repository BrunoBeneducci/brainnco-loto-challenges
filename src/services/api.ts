import axios, { AxiosResponse } from 'axios';
import { mockLoterias, mockLoteriasConcursos, mockConcursos } from './mockData';

const api = axios.create({
    baseURL: 'https://brainn-api-loterias.herokuapp.com/api/v1',
    timeout: 3000, // timeout de 5s para não travar se API estiver offline
});

// Flag para controlar se estamos usando mock
let usingMock = false;

// Interceptor para fallback automático com mock data
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const { config } = error;
        
        // Se a API falhar, retorna dados mockados
        if (!usingMock) {
            console.warn('⚠️ API offline - usando dados mockados como fallback');
            usingMock = true;
        }

        // Simula resposta baseada na URL requisitada
        const url = config?.url || '';

        if (url === '/loterias') {
            return Promise.resolve({ data: mockLoterias } as AxiosResponse);
        }

        if (url === '/loterias-concursos') {
            return Promise.resolve({ data: mockLoteriasConcursos } as AxiosResponse);
        }

        if (url.startsWith('/concursos/')) {
            const concursoId = url.replace('/concursos/', '');
            const concurso = mockConcursos[concursoId];
            if (concurso) {
                return Promise.resolve({ data: concurso } as AxiosResponse);
            }
        }

        // Se não encontrar mock para a rota, rejeita
        return Promise.reject(error);
    }
);

export default api;