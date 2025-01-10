function twoSum(numbers, target) {
    let left = 0; // Ponteiro inicial
    let right = numbers.length - 1; // Ponteiro final

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            // Retorna os índices baseados em 1
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; // Move o ponteiro esquerdo para a direita
        } else {
            right--; // Move o ponteiro direito para a esquerda
        }
    }

    // Se não encontrar a solução, retorna um array vazio
    return [];
}

// Exemplo de uso:
const numbers = [2, 7, 11, 15];
const target = 9;

const result = twoSum(numbers, target);
console.log(result); // Saída: [1, 2]
