package utils

import "github.com/valyala/fasthttp"

func GetPaginationParams(searchParams *fasthttp.Args) (int, int) {
	rawPage := searchParams.GetUintOrZero("page")
	limit := searchParams.GetUintOrZero("limit")

	page := (rawPage - 1) * limit

	return page, limit
}
