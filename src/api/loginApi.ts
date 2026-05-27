import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserToken } from "../models/userToken";
import { LoginModel } from "../models/loginModel";
import { ResponseDTO } from "../models/dto";

const URL_BASE =
  "http://172.16.3.174:5003/api";

export const fazerLogin = async (
  login: LoginModel
): Promise<ResponseDTO<UserToken>> => {

  try {
    const response = await fetch(
      `${URL_BASE}/fazerLogin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      }
    );

     const text = await response.text();
    const data: ResponseDTO<UserToken> = text ? JSON.parse(text) : null;

    console.log("RESPOSTA API:", data);

    
    if (!response.ok || !data.sucesso || !data.dados?.token) {

      // pega mensagens do ModelState
      if (data.mensagem) {

        const mensagens = Object.values(data.mensagem)
          .flat()
          .join("\n");

        throw new Error(mensagens);
      }

      // mensagem padrão backend
      throw new Error(
        data.mensagem 
      );
    }

    // salva token
    await AsyncStorage.setItem(
      "token",
      data.dados?.token
    );

    return {
      sucesso: data.sucesso,
      mensagem: data.mensagem,
      dados: data.dados
    }

  } catch (error: any) {

    

    throw new Error(
      error.message 
    );
  }
};