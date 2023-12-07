const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: true
}));

const db = mysql.createPool({
  host: "220.149.236.48",
  user: "res1",
  password: "1234",
  database: "homepage",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // uploads/ 디렉토리로 변경
  },
  filename: function (req, file, cb) {
    // 파일 이름 그대로 저장
    file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
    cb(null, file.originalname);
  },
});
// multer 미들웨어 설정
const upload = multer({ storage: storage });
// 정적 파일 제공 설정
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.get("/list", (req, res) => {
  const sqlQuery =
  "SELECT BOARD_ID, BOARD_TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS REGISTER_DATE, IMAGE_FILE, PDF_FILE FROM BOARD;";;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
    } else {
      res.send(result);
    }
  });
});
app.get("/list2", (req, res) => {
  const sqlQuery =
  "SELECT BOARD_ID2, BOARD_TITLE2, REGISTER_ID2, DATE_FORMAT(REGISTER_DATE2, '%Y-%m-%d') AS REGISTER_DATE2, IMAGE_FILE, PDF_FILE FROM BOARD2;";;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
    } else {
      res.send(result);
    }
  });
});
  // "/list" 엔드포인트에 대한 요청 처리
  app.get("/list3", (req, res) => {
    const sqlQuery =
    "SELECT BOARD_ID3, BOARD_TITLE3, REGISTER_ID3, DATE_FORMAT(REGISTER_DATE3, '%Y-%m-%d') AS REGISTER_DATE3, IMAGE_FILE, PDF_FILE FROM BOARD3;";;
    db.query(sqlQuery, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
      } else {
        res.send(result);
      }
    });
  });
  app.get("/list4", (req, res) => {
    const sqlQuery =
    "SELECT BOARD_ID4, BOARD_TITLE4, REGISTER_ID4, DATE_FORMAT(REGISTER_DATE4, '%Y-%m-%d') AS REGISTER_DATE4, IMAGE_FILE, PDF_FILE FROM BOARD4;";;
    db.query(sqlQuery, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
      } else {
        res.send(result);
      }
    });
  });
  app.get("/list5", (req, res) => {
    const sqlQuery =
    "SELECT BOARD_ID5, BOARD_TITLE5, REGISTER_ID5, DATE_FORMAT(REGISTER_DATE5, '%Y-%m-%d') AS REGISTER_DATE5, IMAGE_FILE, PDF_FILE FROM BOARD5;";;
    db.query(sqlQuery, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
      } else {
        res.send(result);
      }
    });
  });
  app.post("/insert", upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
    const { title, content } = req.body;
    const imageFile = req.files["imageFile"];
    const pdfFile = req.files["pdfFile"];
  
    let imageBase64 = null;
    let pdfPath = null;
  
    if (imageFile) {
      imageBase64 = imageFile[0].path;
    }
  
    if (pdfFile) {
      pdfPath = pdfFile[0].path;
    }
  
    const sqlQuery =
      "INSERT INTO BOARD (BOARD_TITLE, BOARD_CONTENT, IMAGE_FILE, PDF_FILE, REGISTER_ID) VALUES (?, ?, ?, ?, 'parkjihyeok');";
    db.query(sqlQuery, [title, content, imageBase64, pdfPath], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ success: false, message: "파일 업로드 또는 글 작성에 실패했습니다." });
      } else {
        res.send({ success: true, message: "파일 업로드 및 글 작성이 성공적으로 완료되었습니다." });
      }
    });
  });
  // "/insert" 엔드포인트에 대한 요청 처리
  app.post("/insert2", upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]),(req, res) => {
    const { title, content } = req.body;
    const imageFile = req.files["imageFile"];
    const pdfFile = req.files["pdfFile"];
  
    let imageBase64 = null;
    let pdfPath = null;
  
    if (imageFile) {
      imageBase64 = imageFile[0].path;
    }
  
    if (pdfFile) {
      pdfPath = pdfFile[0].path;
    }
    // DB에 글 작성 요청 처리
    const sqlQuery =
      "INSERT INTO BOARD2 (BOARD_TITLE2, BOARD_CONTENT2, IMAGE_FILE, PDF_FILE, REGISTER_ID2) VALUES (?, ?, ?, ?,'parkjihyeok');";
    db.query(sqlQuery, [title, content, imageBase64, pdfPath], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ success: false, message: "파일 업로드 또는 글 작성에 실패했습니다." });
      } else {
        res.send({ success: true, message: "파일 업로드 및 글 작성이 성공적으로 완료되었습니다." });
      }
    });
  });
  app.post("/insert3",  upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
    const { title, content } = req.body;
    const imageFile = req.files["imageFile"];
    const pdfFile = req.files["pdfFile"];
  
    let imageBase64 = null;
    let pdfPath = null;
  
    if (imageFile) {
      imageBase64 = imageFile[0].path;
    }
  
    if (pdfFile) {
      pdfPath = pdfFile[0].path;
    }
    // DB에 글 작성 요청 처리
    const sqlQuery =
      "INSERT INTO BOARD3 (BOARD_TITLE3, BOARD_CONTENT3, IMAGE_FILE, PDF_FILE, REGISTER_ID3) VALUES (?, ?, ?,?, 'parkjihyeok');";
    db.query(sqlQuery, [title, content, imageBase64,pdfPath], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ success: false, message: "파일 업로드 또는 글 작성에 실패했습니다." });
      } else {
        res.send({ success: true, message: "파일 업로드 및 글 작성이 성공적으로 완료되었습니다." });
      }
    });
  });
  app.post("/insert4",  upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
    const { title, content } = req.body;
    const imageFile = req.files["imageFile"];
    const pdfFile = req.files["pdfFile"];
  
    let imageBase64 = null;
    let pdfPath = null;
  
    if (imageFile) {
      imageBase64 = imageFile[0].path;
    }
  
    if (pdfFile) {
      pdfPath = pdfFile[0].path;
    }
    // DB에 글 작성 요청 처리
    const sqlQuery =
      "INSERT INTO BOARD4 (BOARD_TITLE4, BOARD_CONTENT4, IMAGE_FILE, PDF_FILE, REGISTER_ID4) VALUES (?, ?, ?,?, 'parkjihyeok');";
    db.query(sqlQuery, [title, content, imageBase64,pdfPath], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ success: false, message: "파일 업로드 또는 글 작성에 실패했습니다." });
      } else {
        res.send({ success: true, message: "파일 업로드 및 글 작성이 성공적으로 완료되었습니다." });
      }
    });
  });
  app.post("/insert5",  upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
    const { title, content } = req.body;
    const imageFile = req.files["imageFile"];
    const pdfFile = req.files["pdfFile"];
  
    let imageBase64 = null;
    let pdfPath = null;
  
    if (imageFile) {
      imageBase64 = imageFile[0].path;
    }
  
    if (pdfFile) {
      pdfPath = pdfFile[0].path;
    }
    // DB에 글 작성 요청 처리
    const sqlQuery =
      "INSERT INTO BOARD5 (BOARD_TITLE5, BOARD_CONTENT5, IMAGE_FILE, PDF_FILE, REGISTER_ID5) VALUES (?, ?, ?,?, 'parkjihyeok');";
    db.query(sqlQuery, [title, content, imageBase64,pdfPath], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ success: false, message: "파일 업로드 또는 글 작성에 실패했습니다." });
      } else {
        res.send({ success: true, message: "파일 업로드 및 글 작성이 성공적으로 완료되었습니다." });
      }
    });
  });  

      app.post("/update", upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
        const { title, content, id } = req.body;
        const imageFile = req.files["imageFile"];
        const pdfFile = req.files["pdfFile"];
      
        let imagePath = null;
        let pdfPath = null;
      
        if (imageFile) {
          imagePath = `uploads/${imageFile[0].filename}`;
        }
      
        if (pdfFile) {
          pdfPath = `uploads/${pdfFile[0].filename}`;
        }
      
        let sqlQuery = "UPDATE BOARD SET BOARD_TITLE = ?, BOARD_CONTENT = ?, UPDATER_ID = 'artistJay'";
      
        const params = [title, content];
      
        if (imagePath) {
          sqlQuery += ", IMAGE_FILE = ?";
          params.push(imagePath);
        }
      
        if (pdfPath) {
          sqlQuery += ", PDF_FILE = ?";
          params.push(pdfPath);
        }
      
        sqlQuery += " WHERE BOARD_ID = ?;";
        params.push(id);
      
        db.query(sqlQuery, params, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send({ success: false, message: "업데이트에 실패했습니다." });
          } else {
            res.send({ success: true, message: "업데이트가 성공적으로 완료되었습니다." });
          }
        });
      });

      app.post("/update2", upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
        const { title, content, id } = req.body;
        const imageFile = req.files["imageFile"];
        const pdfFile = req.files["pdfFile"];
      
        let imagePath = null;
        let pdfPath = null;
      
        if (imageFile) {
          imagePath = `uploads/${imageFile[0].filename}`;
        }
      
        if (pdfFile) {
          pdfPath = `uploads/${pdfFile[0].filename}`;
        }
      
        let sqlQuery = "UPDATE BOARD2 SET BOARD_TITLE2 = ?, BOARD_CONTENT2 = ?, UPDATER_ID2 = 'artistJay'";
      
        const params = [title, content];
      
        if (imagePath) {
          sqlQuery += ", IMAGE_FILE = ?";
          params.push(imagePath);
        }
      
        if (pdfPath) {
          sqlQuery += ", PDF_FILE = ?";
          params.push(pdfPath);
        }
      
        sqlQuery += " WHERE BOARD_ID2 = ?;";
        params.push(id);
      
        db.query(sqlQuery, params, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send({ success: false, message: "업데이트에 실패했습니다." });
          } else {
            res.send({ success: true, message: "업데이트가 성공적으로 완료되었습니다." });
          }
        });
      });
    // "/update" 엔드포인트에 대한 요청 처리
    app.post("/update3", upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
      const { title, content, id } = req.body;
      const imageFile = req.files["imageFile"];
      const pdfFile = req.files["pdfFile"];
    
      let imagePath = null;
      let pdfPath = null;
    
      if (imageFile) {
        imagePath = `uploads/${imageFile[0].filename}`;
      }
    
      if (pdfFile) {
        pdfPath = `uploads/${pdfFile[0].filename}`;
      }
    
      let sqlQuery = "UPDATE BOARD3 SET BOARD_TITLE3 = ?, BOARD_CONTENT3 = ?, UPDATER_ID3 = 'artistJay'";
    
      const params = [title, content];
    
      if (imagePath) {
        sqlQuery += ", IMAGE_FILE = ?";
        params.push(imagePath);
      }
    
      if (pdfPath) {
        sqlQuery += ", PDF_FILE = ?";
        params.push(pdfPath);
      }
    
      sqlQuery += " WHERE BOARD_ID3 = ?;";
      params.push(id);
    
      db.query(sqlQuery, params, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send({ success: false, message: "업데이트에 실패했습니다." });
        } else {
          res.send({ success: true, message: "업데이트가 성공적으로 완료되었습니다." });
        }
      });
    });
    app.post("/update4", upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
      const { title, content, id } = req.body;
      const imageFile = req.files["imageFile"];
      const pdfFile = req.files["pdfFile"];
    
      let imagePath = null;
      let pdfPath = null;
    
      if (imageFile) {
        imagePath = `uploads/${imageFile[0].filename}`;
      }
    
      if (pdfFile) {
        pdfPath = `uploads/${pdfFile[0].filename}`;
      }
    
      let sqlQuery = "UPDATE BOARD4 SET BOARD_TITLE4 = ?, BOARD_CONTENT4 = ?, UPDATER_ID4 = 'artistJay'";
    
      const params = [title, content];
    
      if (imagePath) {
        sqlQuery += ", IMAGE_FILE = ?";
        params.push(imagePath);
      }
    
      if (pdfPath) {
        sqlQuery += ", PDF_FILE = ?";
        params.push(pdfPath);
      }
    
      sqlQuery += " WHERE BOARD_ID4 = ?;";
      params.push(id);
    
      db.query(sqlQuery, params, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send({ success: false, message: "업데이트에 실패했습니다." });
        } else {
          res.send({ success: true, message: "업데이트가 성공적으로 완료되었습니다." });
        }
      });
    });
    app.post("/update5", upload.fields([{ name: "imageFile", maxCount: 1 }, { name: "pdfFile", maxCount: 1 }]), (req, res) => {
      const { title, content, id } = req.body;
      const imageFile = req.files["imageFile"];
      const pdfFile = req.files["pdfFile"];
    
      let imagePath = null;
      let pdfPath = null;
    
      if (imageFile) {
        imagePath = `uploads/${imageFile[0].filename}`;
      }
    
      if (pdfFile) {
        pdfPath = `uploads/${pdfFile[0].filename}`;
      }
    
      let sqlQuery = "UPDATE BOARD5 SET BOARD_TITLE5 = ?, BOARD_CONTENT5 = ?, UPDATER_ID5 = 'artistJay'";
    
      const params = [title, content];
    
      if (imagePath) {
        sqlQuery += ", IMAGE_FILE = ?";
        params.push(imagePath);
      }
    
      if (pdfPath) {
        sqlQuery += ", PDF_FILE = ?";
        params.push(pdfPath);
      }
    
      sqlQuery += " WHERE BOARD_ID5 = ?;";
      params.push(id);
    
      db.query(sqlQuery, params, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send({ success: false, message: "업데이트에 실패했습니다." });
        } else {
          res.send({ success: true, message: "업데이트가 성공적으로 완료되었습니다." });
        }
      });
    });
    

app.post("/delete", (req, res) => {
  const id = req.body.boardIdList; // 6,5

  const sqlQuery = `DELETE FROM BOARD WHERE BOARD_ID IN (${id})`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});
  // "/delete" 엔드포인트에 대한 요청 처리
  app.post("/delete2", (req, res) => {
    const id = req.body.boardIdList; // 6,5
  
    const sqlQuery = `DELETE FROM BOARD2 WHERE BOARD_ID2 IN (${id})`;
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  });
  // "/delete" 엔드포인트에 대한 요청 처리
  app.post("/delete3", (req, res) => {
    const id = req.body.boardIdList; // 6,5
  
    const sqlQuery = `DELETE FROM BOARD3 WHERE BOARD_ID3 IN (${id})`;
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  });
  app.post("/delete4", (req, res) => {
    const id = req.body.boardIdList; // 6,5
  
    const sqlQuery = `DELETE FROM BOARD4 WHERE BOARD_ID4 IN (${id})`;
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  });
  app.post("/delete5", (req, res) => {
    const id = req.body.boardIdList; // 6,5
  
    const sqlQuery = `DELETE FROM BOARD5 WHERE BOARD_ID5 IN (${id})`;
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  });

  app.post("/detail", (req, res) => {
    const id = req.body.id;
    const sqlQuery =
      "SELECT BOARD_ID, BOARD_TITLE, BOARD_CONTENT, IMAGE_FILE, PDF_FILE FROM BOARD WHERE BOARD_ID = ?;";
    db.query(sqlQuery, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
      } else {
        if (result.length === 0) {
          res.status(404).send("해당 ID에 대한 레코드를 찾을 수 없습니다.");
        } else {
          // 이미지 파일과 PDF 파일의 경로를 포함하여 클라이언트에 전송
          const dataToSend = {
            ...result[0],
            IMAGE_FILE: result[0].IMAGE_FILE ? `http://220.149.236.48:3306/${result[0].IMAGE_FILE}` : null,
            PDF_FILE: result[0].PDF_FILE ? `http://220.149.236.48:3306/${result[0].PDF_FILE}` : null,
          };
          res.send(dataToSend);
        }
      }
    });
  });
 // "/detail" 엔드포인트에 대한 요청 처리
 app.post("/detail2", (req, res) => {
  const id = req.body.id;
  const sqlQuery =
    "SELECT BOARD_ID2, BOARD_TITLE2, BOARD_CONTENT2, IMAGE_FILE, PDF_FILE FROM BOARD2 WHERE BOARD_ID2 = ?;";
  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
    } else {
      if (result.length === 0) {
        res.status(404).send("해당 ID에 대한 레코드를 찾을 수 없습니다.");
      } else {
        // 이미지 파일과 PDF 파일의 경로를 포함하여 클라이언트에 전송
        const dataToSend = {
          ...result[0],
          IMAGE_FILE: result[0].IMAGE_FILE ? `http://220.149.236.48:3306/${result[0].IMAGE_FILE}` : null,
          PDF_FILE: result[0].PDF_FILE ? `http://220.149.236.48:3306/${result[0].PDF_FILE}` : null,
        };
        res.send(dataToSend);
      }
    }
  });
});

app.post("/detail3", (req, res) => {
  const id = req.body.id;
  const sqlQuery =
    "SELECT BOARD_ID3, BOARD_TITLE3, BOARD_CONTENT3, IMAGE_FILE, PDF_FILE FROM BOARD3 WHERE BOARD_ID3 = ?;";
  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
    } else {
      if (result.length === 0) {
        res.status(404).send("해당 ID에 대한 레코드를 찾을 수 없습니다.");
      } else {
        // 이미지 파일과 PDF 파일의 경로를 포함하여 클라이언트에 전송
        const dataToSend = {
          ...result[0],
          IMAGE_FILE: result[0].IMAGE_FILE ? `http://220.149.236.48:3306/${result[0].IMAGE_FILE}` : null,
          PDF_FILE: result[0].PDF_FILE ? `http://220.149.236.48:3306/${result[0].PDF_FILE}` : null,
        };
        res.send(dataToSend);
      }
    }
  });
});
app.post("/detail4", (req, res) => {
  const id = req.body.id;
  const sqlQuery =
    "SELECT BOARD_ID4, BOARD_TITLE4, BOARD_CONTENT4, IMAGE_FILE, PDF_FILE FROM BOARD4 WHERE BOARD_ID4 = ?;";
  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
    } else {
      if (result.length === 0) {
        res.status(404).send("해당 ID에 대한 레코드를 찾을 수 없습니다.");
      } else {
        // 이미지 파일과 PDF 파일의 경로를 포함하여 클라이언트에 전송
        const dataToSend = {
          ...result[0],
          IMAGE_FILE: result[0].IMAGE_FILE ? `http://220.149.236.48:3306/${result[0].IMAGE_FILE}` : null,
          PDF_FILE: result[0].PDF_FILE ? `http://220.149.236.48:3306/${result[0].PDF_FILE}` : null,
        };
        res.send(dataToSend);
      }
    }
  });
});
app.post("/detail5", (req, res) => {
  const id = req.body.id;
  const sqlQuery =
    "SELECT BOARD_ID5, BOARD_TITLE5, BOARD_CONTENT5, IMAGE_FILE, PDF_FILE FROM BOARD5 WHERE BOARD_ID5 = ?;";
  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("BOARD 테이블에서 데이터를 가져오는데 에러가 발생했습니다.");
    } else {
      if (result.length === 0) {
        res.status(404).send("해당 ID에 대한 레코드를 찾을 수 없습니다.");
      } else {
        // 이미지 파일과 PDF 파일의 경로를 포함하여 클라이언트에 전송
        const dataToSend = {
          ...result[0],
          IMAGE_FILE: result[0].IMAGE_FILE ? `http://220.149.236.48:3306/${result[0].IMAGE_FILE}` : null,
          PDF_FILE: result[0].PDF_FILE ? `http://220.149.236.48:3306/${result[0].PDF_FILE}` : null,
        };
        res.send(dataToSend);
      }
    }
  });
});