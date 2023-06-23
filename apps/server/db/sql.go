package db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var Database *sql.DB

func Connect(url string) error {
	db, err := sql.Open("mysql", url)

	if err != nil {
		return err
	}

	Database = db
	return nil
}
