import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%; 
  border: 1px solid #222222;
  border-radius: 10px;
  overflow-x: auto; /* Permite scroll horizontal se necessário */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;

export const TableHead = styled.thead`
  @media (max-width: 600px) {
    display: none; /* Esconde o cabeçalho na visualização móvel */
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: #999;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #bbb; /* Alternating row colors */
  }

  @media (max-width: 600px) {
    display: block;
    margin-bottom: 10px;
    border-bottom: 2px solid #bbb;
  }
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;

  @media (max-width: 600px) {
    display: block;
    text-align: left;
    margin-top: 5px;
    position: relative;

    &:before {
      content: attr(data-label) ": "; /* Adiciona dois pontos e um espaço para melhor formatação */
      display: block; /* Faz o rótulo aparecer como bloco, empurrando o conteúdo para baixo */
      margin-bottom: 5px; /* Espaço entre o rótulo e o dado */
      font-weight: bold;
      color: #fff; /* Ajusta a cor do texto do rótulo para branco, se desejado */
    }
  }
`;
