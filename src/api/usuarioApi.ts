import AsyncStorage from "@react-native-async-storage/async-storage";
import { AlterarSenhaUsuarioDTO, ResponseDTO, UsuarioDTO } from "../models/dto";

const URL_BASE =
  "http://172.16.3.174:5003/api";


export const listarUsuarioPorId = async(id: number): 
Promise<ResponseDTO<UsuarioDTO>> => {
    try {
        const response = await fetch(
            `${URL_BASE}/listarPorId/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          
        },
      
        });

        const data: ResponseDTO<UsuarioDTO> = await response.json();

        if(!response.ok || !data.sucesso || !data.dados){


        const mensagens = Object.values(data.mensagem)
          .flat()
          .join("\n");

        throw new Error(mensagens);
      }

     
      return {
        sucesso: data.sucesso,
        mensagem: data.mensagem,
        dados: data.dados
      }
    
    } catch (error: any) {
       console.log("Erro ao buscar usuário:", error);

    throw new Error(
      error.message || "Erro inesperado"
    ); 
    }
}



export const listarUsuarioPorCpf = async(cpf: string): 
Promise<ResponseDTO<UsuarioDTO>> => {
    try {
        const response = await fetch(
            `${URL_BASE}/listarPorCpf/${cpf}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          
        },
       
        });

        const data: ResponseDTO<UsuarioDTO> = await response.json();

        if(!response.ok || !data.sucesso || !data.dados){


        const mensagens = Object.values(data.mensagem)
          .flat()
          .join("\n");

        throw new Error(mensagens);
      }

     
      return {
        sucesso: data.sucesso,
        mensagem: data.mensagem,
        dados: data.dados
      }
    
    } catch (error: any) {
       console.log("Erro ao buscar usuário:", error);

    throw new Error(
      error.message || "Erro inesperado"
    ); 
    }
}

export const alterarSenha = async(usuario: AlterarSenhaUsuarioDTO): 
Promise<ResponseDTO<AlterarSenhaUsuarioDTO>> => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await fetch(`${URL_BASE}/alterarSenha`, {
            method: "PATCH",
            headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(usuario)
        });


        //const text = await response.text();
        const data: ResponseDTO<AlterarSenhaUsuarioDTO> = await response.json() ;
        
     

        const cpfExistente = await listarUsuarioPorCpf(usuario.usuarioCPF);

      

        if (cpfExistente === null){
            return {
                sucesso: false,
                mensagem: data.mensagem,
                dados: null
            }
        }

        
        return {
            sucesso: data.sucesso,
            mensagem: data.mensagem,
            dados: data.dados
        }
    } catch (error: any) {
        console.log("Erro ao alterar a senha:", error);

    throw new Error(
      error.message || "Erro inesperado"
    ); 
    }
}