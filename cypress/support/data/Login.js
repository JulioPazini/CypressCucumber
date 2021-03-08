/* eslint-disable no-magic-numbers */
const { Consulta } = require('./Conexao.js');

const consultaLotacaoPadraoUsuario = async (usuario) => {
  const data = await Consulta(`
  SELECT l.DELOCAL AS DESCRICAO FROM ESAJUSUARIOLOTACAO ul
    JOIN ESAJLOCAL l 
  ON ul.CDLOCAL = l.CDLOCAL 
  WHERE ul.CDUSUARIO = '${usuario}' AND ul.FLPRINCIPAL = 'S' 
  `);
  return data[0].DESCRICAO;
};

consultaLotacaoPadraoUsuario('SAJ6.TESTE');

export default consultaLotacaoPadraoUsuario;

// module.exports = {
//   consultaLotacaoPadraoUsuario,
// };
