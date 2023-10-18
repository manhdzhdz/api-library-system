import { pool } from "../db.js";

export const getAuthors = async (req, res) => {
  try {
    // throw new  Error("BD Error")
    const [datos] = await pool.query("SELECT * FROM authors");
    res.json(datos);
  } catch (error) {
    return res.status(500).json({
      message: "Algo anda mal!... favor de verificar!",
    });
  }
};

export const getAuthor = async (req, res) => {
  try {
    const [datos] = await pool.query(
      "SELECT * FROM authors WHERE author_id = ?",
      [req.params.id]
    );
    res.json(datos[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo anda mal!... favor de verificar!",
    });
  }
};

export const addAuthor = async (req, res) => {
  console.log(req.body);
  const { name, nationality } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO authors (name,nationality) VALUES(?,?)",
      [name, nationality]
    );
    console.log(result);
    res.send({
      id: result.insertId,
      name,
      nationality,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo anda mal!... favor de verificar!",
    });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const [data] = await pool.query("DELETE FROM authors WHERE author_id=?", [
      req.params.id,
    ]);
    if (data.affectedRows <= 0)
      return res.status(404).json({
        message: "Author no encontrado!",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo anda mal!... favor de verificar!",
    });
  }
};

export const updateAuthor = async (req, res) => {
  const { id } = req.params; //de la url
  const { name, nationality } = req.body; //datos enviados
  try {
    const [result] = await pool.query(
        "UPDATE authors SET name = IFNULL(?,name),nationality=IFNULL(?,nationality) WHERE author_id=?",
        [name, nationality, id]
      );
      //EL infnull valida los datos en caso de no existit valores, solo actuliza los que si existan
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Author no encontrado!",
        });
      const [rows] = await pool.query("SELECT * FROM authors WHERE author_id=?", [
        id,
      ]);
      res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo anda mal!... favor de verificar!",
      });
  }
};
