# Levantamento de Requisitos.

### Para abrir uma conta é necessário apenas o nome completo e CPF da pessoa, mas só é permitido uma conta por pessoa;

       1. Modelagem do schema do banco de dados. Ok.
       2. Verificar se o usuário já existe dentro do banco de dados -> Ok.
       3. Pegar o nome completo e CPF do usuário para registro -> Ok.

### Com essa conta é possível realizar transferências para outras contas e depositar;

    1. Modelagem do schema de balance para o usuário ter uma conta -> Ok.
    2. Modelage do schema com histórico de transferências dos clientes -> Ok
    3. Verificar se o usuário tem saldo para realizar a transferência -> Ok
    4. Modelagem do schema para depósitos -> Ok
    5. Não deve ser possível aceitar valores negativo nas contas -> Ok
    6. Cada depósito não pode ser maior do que 2.000 -> Ok

### Adicionais

       1. Autenticação
       2. Testes Unitários

### Ficou faltando || Necessário rever.

       1. Validar decimais (typescript)
       2. Verificar se o valor é zero no middleware verifyBalanceAccount.
