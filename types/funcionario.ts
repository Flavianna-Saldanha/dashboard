export type Funcionario = {
  id: string;
  nome: string;
  cpf: string;
	telefone?: string
  cargo: "Auxiliar" | "Veterinário" | "Supervisor";
  setor: "Abate" | "Limpeza" | "Recebimento";
  dataAdmissao: Date;
	salario: number
	email?: string
	ativo: boolean;
}