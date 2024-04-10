import axios from "axios";


export const axiosCustom = axios.create({
    baseURL:"https://ixora-auto.ru/wipers/"
})