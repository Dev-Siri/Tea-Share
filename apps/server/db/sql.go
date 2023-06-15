package db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var database *sql.DB

func Connect(url string) error {
	db, err := sql.Open("mysql", url)

	if err != nil {
		return err
	}

	database = db
	return nil
}

func SQL() *sql.DB {
	return database
}
