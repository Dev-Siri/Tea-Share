This directory is a JS version of the current server. It serves as a resource where old code can be safely removed as new functionality is added to the Go server so we know what parts have been implemented.

You will find `@not_implemented` on functions which are yet to be implemented in the Go server.
Logic that has been implemented will be commented out and marked as `@implemented`.

If the functionality of all the things are implemented in the Go server, then the corresponding JS file will be removed.

This directory will be removed once the Go server is finished.