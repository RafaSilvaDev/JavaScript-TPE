const concatNomes = (nomes) => nomes.map(nome => "Sra. " + nome)

const nomes = ["Eduarda", "Bruna", "Maria", "Gloria", "Isabela"]
const nomesComPrefixo = concatNomes(nomes);
console.log("Nomes com prefixo:", nomesComPrefixo); 