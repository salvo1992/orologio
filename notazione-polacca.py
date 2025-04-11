def eval_polish(expr):
    stack = []

    # Si scorre l'espressione normalmente
    for token in expr:
        if token in "+-*/":  # Se il token è un operatore
            if len(stack) < 2:
                raise ValueError("Espressione non valida: non ci sono abbastanza operandi.")
            b = stack.pop()
            a = stack.pop()
            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                if b == 0:
                    raise ValueError("Divisione per zero non consentita.")
                stack.append(a / b)
        else:
            stack.append(token)  # Aggiungi il numero allo stack
    
    if len(stack) != 1:
        raise ValueError("Espressione non valida: lo stack non contiene un unico risultato.")

    return stack[0]

# Espressione in notazione polacca: + * 12 - 9 5 4
expression = ['+', '*', 12, '-', 9, 5, 4]

try:
    result = eval_polish(expression)
    print("Risultato:", result)
except ValueError as e:
    print(f"Errore: {e}")


