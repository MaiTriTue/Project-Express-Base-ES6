CREATE DATABASE cong_ty_luat;
USE cong_ty_luat;

CREATE TABLE users(
    Id integer AUTO_INCREMENT PRIMARY KEY,
    firtName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()

);

INSERT INTO users ( firtName, lastName )
VALUES
( 'LE', 'THANH HANG' ),
( 'LE', 'TAM LONG' );