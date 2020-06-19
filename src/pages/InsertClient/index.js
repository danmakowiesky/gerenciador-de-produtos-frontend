import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './style';

function InsertClient() {
  return (
    <Container>
      <h1>Cadastrar Cliente</h1>
      <Form>
        <Input name="name" placeholder="Digite aqui o nome do cliente" />
        <Input name="CPF" placeholder="Digite aqui o CPF do cliente" />
        <Input
          name="Data de nasciment"
          placeholder="Digite aqui a data de nascimento do cliente."
        />

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}

export default InsertClient;
