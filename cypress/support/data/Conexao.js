/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
/* eslint-disable no-magic-numbers */
const oracledb = require('oracledb');
const config = require('./dbConfig');
oracledb.initOracleClient({ libDir: 'C:\\instantclient_19_10' }); 

let connection;

const CriarConexao = async () => {
  console.log('Realizando conexão...');
  try {
    connection = await oracledb.getConnection(config);
    console.log('Connection was successful!');
    return connection;
  } catch (err) {
    console.log(`Houve um problema de conexão ${err}`);
    return process.exit(1);
  }
};

const Consulta = async (sql) => {
  console.log(`Realizando consulta: ${sql}`);

  let conexao;
  do conexao = await CriarConexao();
  while (!conexao);

  try {

    sql = sql.replace(/\n/g, ' ').replace(/\r/g, ' ').replace(';', '');

    console.log(`Formatação: ${sql}`);

    const data = await conexao.execute(sql, {}, { outFormat: oracledb.OUT_FORMAT_OBJECT });

    await conexao.commit();

    console.log(`Consulta realizada com sucesso!`);

    console.log(data.rows[0]);

    return data.rows;
    
  } catch (err) {
    console.log(`Houve um erro ao realizar a consulta. ${err}`);

    throw new Error(err);
  } finally {
    try {
      await conexao.close();
    } catch (err) {
      console.log(`Houve um erro ao fechar a conexão. ${err}`);
    }
  }
};

// Consulta(`
//   SELECT l.DELOCAL AS DESCRICAO FROM ESAJUSUARIOLOTACAO ul
//     JOIN ESAJLOCAL l 
//   ON ul.CDLOCAL = l.CDLOCAL 
//   WHERE ul.CDUSUARIO = 'SAJ6.TESTE' AND ul.FLPRINCIPAL = 'S' 
//   `);

module.exports = { Consulta };
