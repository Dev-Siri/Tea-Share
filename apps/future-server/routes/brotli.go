package routes

/**
 * ! WARNING: THIS IS NOT YET IMPLEMENTED CORRECTLY NOR USED ANYWHERE !
 */

// import (
// 	"net/http"
// 	"strings"

// 	"github.com/andybalholm/brotli"
// )

/*
type BrotliResponseWriter struct {
	http.ResponseWriter
	brotliWriter *brotli.Writer
}
*/

/*
func (brw *BrotliResponseWriter) Write(b []byte) (int, error) {
	if brw.brotliWriter == nil {
		brw.brotliWriter = brotli.NewWriterLevel(brw.ResponseWriter, brotli.BestCompression)
	}
	return brw.brotliWriter.Write(b)
}
*/

// func (brw *BrotliResponseWriter) Flush() {
// 	brw.brotliWriter.Flush()
// }

// ! NOT IMPLEMENTED CORRECTLY
/*
func brotliHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !strings.Contains(r.Header.Get("Accept-Encoding"), "br") {
			next.ServeHTTP(w, r)
			return
		}

		w.Header().Set("Content-Encoding", "br")
		w.Header().Add("Vary", "Accept-Encoding")
		brw := &BrotliResponseWriter{
				ResponseWriter: w,
		}
		next.ServeHTTP(brw, r)
		brw.brotliWriter.Close()
	})
}
*/
