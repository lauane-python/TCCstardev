// Importa o banco_lite_tidb.sql para o TiDB Cloud.
// Uso (na pasta back/, depois de "npm install"):
//   DB_HOST=... DB_USER=... DB_PASSWORD=... node importar.js ../banco_lite_tidb.sql
// Não salve a senha dentro deste arquivo.

const fs = require("fs");
const mysql = require("mysql2/promise");

async function main() {
  const arquivo = process.argv[2] || "banco_lite_tidb.sql";
  const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;
  const DB_PORT = process.env.DB_PORT || 4000;
  const DB_NAME = process.env.DB_NAME || "stardev";

  if (!DB_HOST || !DB_USER || !DB_PASSWORD) {
    console.error("Faltam DB_HOST, DB_USER ou DB_PASSWORD.");
    process.exit(1);
  }

  const sql = fs.readFileSync(arquivo, "utf8");

  // 1) conecta sem banco e cria o stardev
  const base = await mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    ssl: { minVersion: "TLSv1.2", rejectUnauthorized: true },
  });
  await base.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
  await base.end();

  // 2) conecta no stardev e roda o arquivo inteiro
  const conn = await mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    multipleStatements: true,
    ssl: { minVersion: "TLSv1.2", rejectUnauthorized: true },
  });
  await conn.query(sql);

  const [tabelas] = await conn.query("SHOW TABLES");
  console.log("Importado com sucesso. Tabelas:", tabelas.map((t) => Object.values(t)[0]).join(", "));
  const [[c]] = await conn.query("SELECT COUNT(*) AS n FROM cadastro");
  console.log("Usuários em cadastro:", c.n);
  await conn.end();
}

main().catch((e) => {
  console.error("Erro:", e.message);
  process.exit(1);
});
