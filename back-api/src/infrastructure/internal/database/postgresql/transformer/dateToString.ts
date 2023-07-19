export function parseDateFromString(dateString: string): Date | null {
    const parts = dateString.split('/');
    if (parts.length !== 3) {
      return null; // Formato inválido
    }
  
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Os meses no objeto Date são baseados em zero (janeiro é 0)
    const year = parseInt(parts[2], 10);
  
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return null; // Valores inválidos
    }
  
    return new Date(year, month, day);
  }