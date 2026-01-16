// Mock data para fallback quando a API estiver offline
// Baseado na estrutura da API: https://brainn-api-loterias.herokuapp.com/api/v1

export interface Loteria {
    id: number;
    nome: string;
}

export interface LoteriaConcurso {
    loteriaId: number;
    concursoId: string;
}

export interface Concurso {
    id: string;
    loteria: number;
    numeros: string[];
    data: string;
}

// Lista de loterias disponíveis
export const mockLoterias: Loteria[] = [
    { id: 0, nome: "mega-sena" },
    { id: 1, nome: "quina" },
    { id: 2, nome: "lotofácil" },
    { id: 3, nome: "lotomania" },
    { id: 4, nome: "timemania" },
    { id: 5, nome: "dia de sorte" },
];

// Relacionamento entre loterias e seus últimos concursos
export const mockLoteriasConcursos: LoteriaConcurso[] = [
    { loteriaId: 0, concursoId: "2550" },
    { loteriaId: 1, concursoId: "6020" },
    { loteriaId: 2, concursoId: "2700" },
    { loteriaId: 3, concursoId: "2420" },
    { loteriaId: 4, concursoId: "1900" },
    { loteriaId: 5, concursoId: "750" },
];

// Detalhes dos concursos (resultados)
export const mockConcursos: Record<string, Concurso> = {
    "2550": {
        id: "2550",
        loteria: 0,
        numeros: ["03", "17", "22", "35", "41", "58"],
        data: "2023-12-09T00:00:00.000Z",
    },
    "6020": {
        id: "6020",
        loteria: 1,
        numeros: ["08", "14", "27", "45", "73"],
        data: "2023-12-08T00:00:00.000Z",
    },
    "2700": {
        id: "2700",
        loteria: 2,
        numeros: ["01", "02", "04", "07", "08", "09", "10", "11", "12", "14", "16", "17", "20", "22", "24"],
        data: "2023-12-09T00:00:00.000Z",
    },
    "2420": {
        id: "2420",
        loteria: 3,
        numeros: ["02", "05", "09", "14", "17", "25", "29", "32", "41", "44", "53", "58", "66", "71", "74", "82", "85", "90", "94", "99"],
        data: "2023-12-08T00:00:00.000Z",
    },
    "1900": {
        id: "1900",
        loteria: 4,
        numeros: ["12", "25", "33", "48", "57", "66", "78"],
        data: "2023-12-07T00:00:00.000Z",
    },
    "750": {
        id: "750",
        loteria: 5,
        numeros: ["04", "10", "18", "24", "27", "31", "45"],
        data: "2023-12-09T00:00:00.000Z",
    },
};
