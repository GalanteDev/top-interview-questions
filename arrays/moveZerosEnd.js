// Given an integer array, move all zeros in-place to the end of the array. The solution should maintain the relative order of non-zero elements and should not use any additional space.

// Example:

// Input: [6, 0, 8, 2, 3, 0, 4, 0, 1]
// Output: [6, 8, 2, 3, 4, 1, 0, 0, 0]

function reArrange(nums) {
    let index = 0;

    // Paso 1: Mover todos los elementos no-cero al frente
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i]; // Asigna el valor actual de nums[i] a nums[index]
            index++;               // Incrementa index después de la asignación
        }
    }

    // Paso 2: Llenar los espacios restantes con ceros
    while (index < nums.length) {
        nums[index] = 0; // Asigna 0 a la posición actual de index
        index++;         // Incrementa index después de asignar el cero
    }
}