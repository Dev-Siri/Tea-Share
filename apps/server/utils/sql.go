package utils

import "database/sql"

func NewNullString(value string) sql.NullString {
	if len(value) == 0 {
		return sql.NullString{}
	}

	return sql.NullString{
		String: value,
		Valid:  true,
	}
}
